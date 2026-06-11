import { useState, useEffect, useCallback, useRef } from 'react';
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

const playSound = (soundPath) => {
  if (!soundPath) return;
  const audio = new Audio(soundPath);
  audio.play().catch(err => {
    console.warn("Audio playback failed or was blocked by the browser:", err);
  });
};

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

  const ambientAudioRef = useRef(null);
const currentTrackPathRef = useRef(null);

useEffect(() => {
  const newSoundPath = scenes[currentScene]?.ambientSound;

  // 1. If it's the SAME track, make sure it is actively playing and don't reset it
  if (currentTrackPathRef.current === newSoundPath) {
    if (ambientAudioRef.current && ambientAudioRef.current.paused) {
      ambientAudioRef.current.play().catch(err => console.log("Playback resumed", err));
    }
    return; 
  }

  // 2. If the track is DIFFERENT, stop and clear the old one
  if (ambientAudioRef.current) {
    ambientAudioRef.current.pause();
    ambientAudioRef.current = null;
  }

  // Update the path tracker string
  currentTrackPathRef.current = newSoundPath;

  // 3. Play the new track if it exists
  if (newSoundPath) {
    const audio = new Audio(newSoundPath);
    audio.loop = true;
    audio.volume = 0.4;
    
    ambientAudioRef.current = audio;

    audio.play().catch(err => {
      console.warn("Ambient playback blocked until user interaction:", err);
    });
  }

  return () => {
    if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
    }
  };
}, [currentScene]);

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
      if (btn.sound) playSound(btn.sound);
      break;

    case 'text':
      setMessage(btn.message);
      break;

    case 'item':
      if (inventory.includes(btn.itemName)) {
        setToast(`You already have the ${btn.itemName}`);
        playSound('/sounds/deny.mp3');
      } else {
        setInventory(prev => [...prev, btn.itemName]);
        setToast(`${btn.itemName} added to inventory`);
        playSound('/sounds/accept.mp3');
      }
      break;

    case 'locked_exit':
      if (inventory.includes(btn.requiredItem)) {
        changeScene(btn.to);
        if (btn.sound) playSound(btn.sound);
      } else {
        setMessage(btn.lockedMessage);
        playSound('/sounds/deny.mp3');
      }
      break;
      
    case 'locked_exit2items':
      if (inventory.includes(btn.requiredItem) && inventory.includes(btn.requiredItem2)) {
        changeScene(btn.to);
        if (btn.sound) playSound(btn.sound);
      } else {
        setMessage(btn.lockedMessage);
        playSound('/sounds/deny.mp3');
      }
      break;

      case 'end-reset':
        localStorage.clear();
        setCurrentScene('tittle0');
        setInventory([]);
        setMessage("");
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