import { useState } from 'react';
import Scene from "./Scene";
import { scenes } from "./data/scenes";

function App() {
  const [currentScene, setCurrentScene] = useState('cryoRoom');

  const [message, setMessage] = useState("");

  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  {/* item type */}
  const handleAction = (item) => {
    switch (item.type) {
      case 'exit':
        setCurrentScene(item.to);
        setMessage("");
        setItemName("");
      case 'text':
        setMessage(item.message);
        setItemName("");
      case 'item':
        setItemName(item.itemName);
        setItemDescription(item.itemDescription);
    }
  };

  return (
    <main style={{ backgroundColor: '#000', width: '100vw', height: '100vh' }}>
      <Scene 
        sceneData={scenes[currentScene]} 
        onButtonClick={handleAction} 
      />

      {/* messagebox logic */}
      {message && (
        <div 
          onClick={() => setMessage("")}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '20%',
            right: '20%',
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #00d4ff',
            color: 'white',
            fontFamily: 'monospace',
            cursor: 'pointer',
          }}
          className='rounded rounded-4'
        >
          {message}
        </div>
      )}

      {/* item logic */}
      {itemName && (
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '20%',
            right: '20%',
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #ff0000',
            color: 'white',
            fontFamily: 'monospace',
            cursor: 'pointer'
          }}
          className='rounded rounded-4's
        >
          <p>You have found {itemName}. {itemDescription}</p>
          <button onClick={() => {setItemName("")}} className='btn btn-danger'>Close</button>
        </div>
      )}

    </main>
  );
}

export default App;