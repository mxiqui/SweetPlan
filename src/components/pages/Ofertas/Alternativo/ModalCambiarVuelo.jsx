import React from 'react';
import '../../../../assets/styles/ModalCambiarVuelos.css';

function ModalCambiarVuelos({ isOpen, onClose, onConfirm, children, diferencia }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  const formatoPrecio = (valor) => {
    return (valor > 0 ? '+' : '') + valor.toFixed(2) + '€';
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
          <button className="btn-cambiar" onClick={onConfirm}>
            {formatoPrecio(diferencia)}
          </button>
        </div>
      </div>
    </div>
  );
}


export default ModalCambiarVuelos;
