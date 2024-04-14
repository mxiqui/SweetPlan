import React, { useRef, useEffect } from 'react';
import '../../assets/styles/MasVisitado.css'


function MasVisitado({ imagen, nombre, precio }) {

  const openMostVisited=()=>{
    window.location.href = `/mostVisited`;
  }

  return (
    <div className='containerMasVisitado' style={{backgroundImage: `url(${imagen})`}} onClick={openMostVisited}>
      <h4>Visita {nombre}</h4>
      <p>Desde {precio}€</p>
    </div>
  );
}

export default MasVisitado;
