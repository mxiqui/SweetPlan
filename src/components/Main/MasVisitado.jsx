import React, { useRef, useEffect } from 'react';
import '../../assets/styles/MasVisitado.css'


function MasVisitado({ imagen, nombre, precio }) {

  const openMostVisited=()=>{
    window.location.href = `/mostVisited`;
  }

  return (
    <div className='containerMasVisitado' style={{backgroundImage: `url(${imagen})`}} onClick={openMostVisited}>
    </div>
  );
}

export default MasVisitado;
