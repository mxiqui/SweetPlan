import React from 'react';
import '../../assets/styles/Aeropuerto.css';

function Aeropuerto({ ciudad, pais, iata }) {
  let imagen;
  try {
    imagen = require(`../../assets/flags/${pais}.png`);
  } catch (error) {
    imagen = require('../../assets/flags/default.png');
  }

  return (
    <div className='containerAeropuertoSing'>
        <img src={imagen} alt="" />
        <div className="containerAeropuertoSingNames">
            <p>{ciudad}</p>
            <p>{pais}</p>
        </div>
        <div className="containerAeropuertoSingIATA">
            <p>{iata}</p>
        </div>
    </div>
  );
}

export default Aeropuerto;
