import React, { useRef, useEffect } from 'react';
import '../../assets/styles/MasVisitado.css'

import imagenPrueba from '../../images/bali.jpg'

function MasVisitado({ imagen, nombre, precio }) {

  return (
    <div className='containerMasVisitado' style={{backgroundImage: `url(${imagen})`}}>
      <h4>Visita {nombre}</h4>
      <p>Desde {precio}€</p>
    </div>
  );
}

export default MasVisitado;
