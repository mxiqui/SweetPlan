import React, { useState } from 'react';
import './Switch.css'; // Estilos CSS para el componente (puedes personalizarlos según tus necesidades)

const ThreeWaySwitch = ({ onChange }) => {
  const [position, setPosition] = useState('medio');

  const handleClick = newPosition => {
    setPosition(newPosition);
    onChange(newPosition);
  };

  return (
    <div className="three-way-switch">
      <button
        className={`opcionAlto option ${position === 'alto' ? 'active' : ''}`}
        onClick={() => handleClick('alto')}
      >
        Booking
      </button>
      <button
        className={`opcionMedio option ${position === 'medio' ? 'active' : ''}`}
        onClick={() => handleClick('medio')}
      >
        Indeferente
      </button>
      <button
        className={`opcionBajo option ${position === 'bajo' ? 'active' : ''}`}
        onClick={() => handleClick('bajo')}
      >
        Airbnb
      </button>
    </div>
  );
};

export default ThreeWaySwitch;
