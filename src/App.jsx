import { useState, useEffect, useCallback } from 'react';
import Scene from "./Scene";
import { scenes } from "./data/scenes";

const preloadImages = () => {
  Object.values(scenes).forEach(scene => {
    if (scene.background) {
      const img = new Image();
      img.src = scene.background;
    }
  });
};
preloadImages();

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

  useEffect(() => {
    localStorage.setItem('currentScene', currentScene);
  }, [currentScene]);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

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
    }, 500);
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
      case 'locked_exit2items':
        if (inventory.includes(btn.requiredItem) && inventory.includes(btn.requiredItem2)) {
          changeScene(btn.to);
        } else {
          setMessage(btn.lockedMessage);
        }
        break;
    }
  };

  return (
    <main className="game-root">

      <Scene sceneData={scenes[currentScene]} onButtonClick={handleAction} />

      {/* Fade overlay */}
      <div className={`fade-overlay${fading ? ' fade-overlay--active' : ''}`} />

      {/* Dialogue box */}
      {message && (
        <div className="dialog">
          <div className="dialog__header">
            <span className="dialog__tag">// LOG</span>
            <button className="button-close" onClick={() => setMessage("")}>
              CLOSE
            </button>
          </div>
          <p className="dialog__body">{message}</p>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="toast">+ {toast}</div>
      )}

      {/* Inventory HUD */}
      {inventory.length > 0 && (
        <div className="hud-panel hud-panel--top-left">
          <div className="hud-label">// INVENTORY</div>
          {inventory.map(i => (
            <div key={i}>▸ {i}</div>
          ))}
        </div>
      )}

      {/* Position */}

      <p className="position-text">
        Position: {currentScene}
      </p>

      {/* Reset button */}
      <button
        className="button-reset"
        onClick={() => {
          localStorage.clear();
          setCurrentScene('tittle0');
          setInventory([]);
          setMessage("");
        }}
      >
        RESET
      </button>
    </main>
  );
}

export default App;