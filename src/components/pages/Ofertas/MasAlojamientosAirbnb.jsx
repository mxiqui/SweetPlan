import React, { useState, useEffect } from 'react';

const MasAlojamientosAirbnb = () => {
  const [alojamientos, setAlojamientos] = useState([]);

  useEffect(() => {
    const plan = JSON.parse(sessionStorage.getItem('plan')); // Obtener el plan de la sesión
    if (plan && plan.alojamientosAirbnb) {
      setAlojamientos(plan.alojamientosAirbnb);
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
      <h2>Alojamientos Airbnb (comparados con el más barato)</h2>
      <div className="alojamientos-grid">
        {alojamientos.slice(1).map((a, index) => {
          const imagenUrl = a.galeria?.split(',')[0]?.replace(/\[|\]|"/g, '') || '';
          return (
            <div
              key={index}
              className="tarjeta-alojamiento"
              onClick={() => handleSelectAlojamiento(a)}
            >
              {imagenUrl && <img src={imagenUrl} alt={a.name} className="alojamiento-img" />}
              <h3>{a.name}</h3>
              <p><strong>Rating:</strong> {a.rating || 'Sin datos'}</p>
              <p><strong>Dirección:</strong> {a.address}</p>
              <p className="precio-diferencia">Diferencia: {formatoDiferencia(a.totalPrice)}</p>
              <a href={a.url} target="_blank" rel="noopener noreferrer">Ver en Airbnb</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MasAlojamientosAirbnb;
