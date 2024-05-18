import React from 'react'
import '../../assets/styles/Aeropuerto.css'

function Aeropuerto({ciudad, pais, iata}) {
  return (
    <div className='containerAeropuertoSing'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg" alt="" />
        <div className="containerAeropuertoSingNames">
            <p>{ciudad}</p>
            <p>{pais}</p>
        </div>
        <div className="containerAeropuertoSingIATA">
            <p>{iata}</p>
        </div>
    </div>
  )
}

export default Aeropuerto