// src/Scene.jsx
const Scene = ({ sceneData, onButtonClick }) => {
  if (!sceneData) return null;

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      padding: '5vh 10vw'
    }}>
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${sceneData.background})`, // This must match your key
      backgroundSize: 'cover',
      overflow: 'hidden',
      backgroundPosition: 'center',
    }}>
      {sceneData.buttons.map(btn => (
        <button 
          key={btn.id}
          onClick={() => onButtonClick(btn)}
          style={{
            position: 'absolute',
            left: `${btn.x}%`,
            top: `${btn.y}%`,
            width: `${btn.width}%`,
            height: `${btn.height}%`,
            backgroundColor: 'rgba(255, 0, 0, 0.3)', // Temporary red tint to see it!
            border: '1px solid red',
            cursor: 'pointer'
          }}
        />
      ))}
    </div>
    </div>
  );
};

export default Scene;