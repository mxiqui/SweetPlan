import React, { useEffect, useRef } from 'react';
import imagenAvion from '../../images/icon/avion.png';
import '../../assets/styles/AvionComponent.css'

const AvionComponent = () => {
    const avionRef = useRef(null);
  
    useEffect(() => {
      const avion = avionRef.current;
      const containerWidth = avion.parentElement.offsetWidth;
      const avionWidth = avion.offsetWidth;
  
      let position = 0;
      let speed = 1;
  
      const moveAvion = () => {
        position += speed;
        if (position >= containerWidth) {
          position = -avionWidth; // Reiniciar al principio
        }
        avion.style.left = `${position}px`;
        requestAnimationFrame(moveAvion);
      };
  
      moveAvion();
  
      return () => cancelAnimationFrame(moveAvion);
    }, []);
  
    return (
      <div className="avion-container">
        <div className="avion-line-container">
          {/* <div className="linea-horizontal"></div> */}
          <img
            ref={avionRef}
            src={imagenAvion}
            alt="Avión"
            className="avion"
          />
        </div>
      </div>
    );
  };
  
  export default AvionComponent;