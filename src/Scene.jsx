import { useState } from "react";

const Scene = ({ sceneData, onButtonClick }) => {
  const [hoveredBtn, setHoveredBtn] = useState(null);

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
        backgroundImage: `url(${sceneData.background})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundPosition: 'center',
      }}>
        {sceneData.buttons.map(btn => (
          <button
            key={btn.id}
            onClick={() => onButtonClick(btn)}
            onMouseEnter={() => setHoveredBtn(btn.id)}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              position: 'absolute',
              left: `${btn.x}%`,
              top: `${btn.y}%`,
              width: `${btn.width}%`,
              height: `${btn.height}%`,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '19px',
              cursor: hoveredBtn === btn.id ? 'pointer' : 'default',
              animation: hoveredBtn === btn.id ? 'cryo-pulse 1.4s ease-in-out infinite' : 'none',
              outline: 'none',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Scene;