import { useState, useEffect, useCallback } from 'react';
import Scene from "./Scene";
import { scenes } from "./data/scenes";

// Preload all scene background images up front
const preloadImages = () => {
  Object.values(scenes).forEach(scene => {
    if (scene.background) {
      const img = new Image();
      img.src = scene.background;
    }
  });
};
preloadImages();

const FADE_DURATION = 500; // ms

function App() {
  const [currentScene, setCurrentScene] = useState(() =>
    localStorage.getItem('currentScene') || 'tittle0'
  );
  const [inventory, setInventory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('inventory')) || [];
    } catch {
      return [];
    }
  });
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState("");
  const [fading, setFading] = useState(false);

  // Persist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('currentScene', currentScene);
  }, [currentScene]);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  // Auto-dismiss toast after 3s
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const changeScene = useCallback((to) => {
    setMessage("");
    setFading(true);
    setTimeout(() => {
      setCurrentScene(to);
      setFading(false);
    }, FADE_DURATION);
  }, []);

  const handleAction = (btn) => {
    switch (btn.type) {
      case 'exit':
        changeScene(btn.to);
        break;

      case 'text':
        setMessage(btn.message);
        break;

      case 'item':
        if (inventory.includes(btn.itemName)) {
          setToast(`You already have the ${btn.itemName}`);
        } else {
          setInventory(prev => [...prev, btn.itemName]);
          setToast(`${btn.itemName} added to inventory`);
        }
        break;

      case 'locked_exit':
        if (inventory.includes(btn.requiredItem)) {
          changeScene(btn.to);
        } else {
          setMessage(btn.lockedMessage);
        }
        break;
    }
  };

  return (
    <main style={{ backgroundColor: '#000', width: '100vw', height: '100vh', position: 'relative' }}>
      <div style={{
          position: 'absolute',
          bottom: '6%',
          left: '3%',
          padding: '10px 16px',
          background: 'rgba(0, 8, 20, 0.85)',
          border: '1px solid rgba(0, 210, 255, 0.25)',
          borderRadius: '4px',
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: '0.72rem',
          color: 'rgba(0, 210, 255, 0.7)',
          letterSpacing: '0.08em',
          lineHeight: '1.8',
          zIndex: 10,
        }}>
          <div style={{
            color: 'rgba(0, 210, 255, 0.4)',
            fontSize: '0.65rem',
            marginBottom: '4px',
            letterSpacing: '0.15em',
          }}>
            // POSITION
          </div>
          {currentScene}
        </div>
      <Scene
        sceneData={scenes[currentScene]}
        onButtonClick={handleAction}
      />

      {/* Fade overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#000',
        opacity: fading ? 1 : 0,
        transition: `opacity ${FADE_DURATION}ms ease`,
        pointerEvents: fading ? 'all' : 'none',
        zIndex: 50,
      }} />

      {/* Dialogue box */}
      {message && (
        <div style={{
          position: 'absolute',
          bottom: '6%',
          left: '12%',
          right: '12%',
          padding: '18px 22px 14px',
          background: 'linear-gradient(160deg, rgba(0,12,24,0.97) 0%, rgba(0,6,18,0.97) 100%)',
          border: '1px solid rgba(0, 210, 255, 0.5)',
          boxShadow: '0 0 24px rgba(0, 180, 255, 0.12), inset 0 0 40px rgba(0, 100, 180, 0.06)',
          borderRadius: '6px',
          fontFamily: '"Courier New", Courier, monospace',
          color: '#d0f0ff',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          letterSpacing: '0.02em',
          zIndex: 10,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            paddingBottom: '8px',
            borderBottom: '1px solid rgba(0, 210, 255, 0.2)',
          }}>
            <span style={{
              fontSize: '0.7rem',
              color: 'rgba(0, 210, 255, 0.6)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              // LOG
            </span>
            <button
              onClick={() => setMessage("")}
              style={{
                background: 'none',
                border: '1px solid rgba(0, 210, 255, 0.3)',
                color: 'rgba(0, 210, 255, 0.7)',
                fontFamily: 'inherit',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                padding: '2px 10px',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(0, 210, 255, 0.1)';
                e.target.style.color = '#00d2ff';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'none';
                e.target.style.color = 'rgba(0, 210, 255, 0.7)';
              }}
            >
              CLOSE
            </button>
          </div>
          <p style={{ margin: 0 }}>{message}</p>
        </div>
      )}

      {/* Item pickup toast */}
      {toast && (
        <div style={{
          position: 'absolute',
          top: '6%',
          right: '3%',
          padding: '10px 18px',
          background: 'rgba(0, 8, 20, 0.92)',
          border: '1px solid rgba(0, 210, 255, 0.4)',
          boxShadow: '0 0 16px rgba(0, 180, 255, 0.15)',
          borderRadius: '4px',
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: '0.78rem',
          color: '#00d2ff',
          letterSpacing: '0.08em',
          animation: 'toast-in 0.3s ease',
          pointerEvents: 'none',
          zIndex: 10,
        }}>
          + {toast}
        </div>
      )}

      {/* Inventory HUD */}
      {inventory.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '6%',
          left: '3%',
          padding: '10px 16px',
          background: 'rgba(0, 8, 20, 0.85)',
          border: '1px solid rgba(0, 210, 255, 0.25)',
          borderRadius: '4px',
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: '0.72rem',
          color: 'rgba(0, 210, 255, 0.7)',
          letterSpacing: '0.08em',
          lineHeight: '1.8',
          zIndex: 10,
        }}>
          <div style={{
            color: 'rgba(0, 210, 255, 0.4)',
            fontSize: '0.65rem',
            marginBottom: '4px',
            letterSpacing: '0.15em',
          }}>
            // INVENTORY
          </div>
          {inventory.map(i => (
            <div key={i}>▸ {i}</div>
          ))}
        </div>
      )}

      {/* Dev reset button — remove before shipping */}
      <button
        onClick={() => {
          localStorage.clear();
          setCurrentScene('tittle0');
          setInventory([]);
          setMessage("");
        }}
        style={{
          position: 'absolute',
          bottom: '1%',
          right: '1%',
          background: 'rgba(255,0,0,0.15)',
          border: '1px solid rgba(255,0,0,0.3)',
          color: 'rgba(255,80,80,0.7)',
          fontFamily: 'monospace',
          fontSize: '0.65rem',
          padding: '3px 8px',
          borderRadius: '3px',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        RESET
      </button>
    </main>
  );
}

export default App;