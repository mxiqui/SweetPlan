import React, { useEffect } from 'react';
import '../../assets/styles/PopupAviso.css';

function PopupAviso({ onClose }) {
  // Cierra el popup al hacer clic fuera del contenido
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupContent = document.getElementById('popup-content');
      if (popupContent && !popupContent.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-box" id="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>¡Todavía no puedes planificar tu viaje!</h2>
        <p>Estamos trabajando para ofrecerte esta funcionalidad pronto. Mientras tanto, explora nuestras <strong>mejores ofertas</strong> disponibles en la web.</p>
        <a href="/" className="popup-link">Ver ofertas</a>
      </div>
    </div>
  );
}

export default PopupAviso;
