import React, { useState, useEffect } from 'react';

const MasAlojamientosBooking = () => {
  const [alojamientos, setAlojamientos] = useState([]);

  useEffect(() => {
    const plan = JSON.parse(sessionStorage.getItem('plan')); // Obtener el plan de la sesión
    if (plan && plan.alojamientoBooking) {
      setAlojamientos(plan.alojamientoBooking);
    }
  }, []);

  const alojamientoBase = alojamientos[0]?.totalPrice || 0;

  const formatoDiferencia = (precio) => {
    const diff = precio - alojamientoBase;
    const signo = diff >= 0 ? '+' : '-';
    return `${signo}€${Math.abs(diff).toFixed(2)}`;
  };

  const handleSelectAlojamiento = (alojamiento) => {
    console.log('Alojamiento seleccionado:', alojamiento);
  };

  return (
    <div className="alojamientos-container">
      <h2>Alojamientos Booking (comparados con el más barato)</h2>
      <div className="alojamientos-grid">
        {alojamientos.slice(1).map((a, index) => (
          <div
            key={a.id || index}
            className="tarjeta-alojamiento"
            onClick={() => handleSelectAlojamiento(a)}
          >
            <img src={a.image} alt={a.name} className="alojamiento-img" />
            <h3>{a.name}</h3>
            <p><strong>Rating:</strong> {a.rating} ({a.wordRating})</p>
            <p><strong>Dirección:</strong> {a.address}</p>
            <p><strong>Distancia:</strong> {a.distance} km</p>
            <p className="precio-diferencia">Diferencia: {formatoDiferencia(a.totalPrice)}</p>
            <a href={a.url} target="_blank" rel="noopener noreferrer">Ver en Booking</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasAlojamientosBooking;
