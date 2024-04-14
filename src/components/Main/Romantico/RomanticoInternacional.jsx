import React from 'react'
import '../../../assets/styles/RomanticoInternacional.css'
import imgAvion from '../../../images/icon/avion2.png'

function RomanticoInternacional({oferta}) {
    const handleClick = () => {
        window.location.href = `/ofertaRomantica/${oferta.getId()}`;
    };

  return (
    <div className='containerRomanticoInternacional' onClick={handleClick}>

        <div className="containerRomanticoInternacionalDiv1" style={{backgroundImage: `url(${oferta.getImagen()})`}}>
            <p className='containerRomanticoInternacionalState'>Check-in open</p>
            <div className="containerRomanticoInternacionalVuelo">
                <div className="containerRomanticoInternacionalVuelo-ida">
                    <h3>{oferta.getOrigen()}</h3>
                    <h4>{oferta.getVueloIda().getOriginAirport()}</h4>
                </div>
                <img width={"20px"} src={imgAvion} alt="" />
                <div className="containerRomanticoInternacionalVuelo-vuelta">
                    <h3>{oferta.getDestino()}</h3>
                    <h4>{oferta.getVueloIda().getDestinationAirport()}</h4>
                </div>
            </div>
        </div>
        <div className="containerRomanticoInternacionalDiv2">

            <div className="containerRomanticoInternacionalFecha">
                <p className='romanticoInternacionalFecha'>{oferta.getFechas()}</p>
                <p className='romanticoInternacionalPrecio'>{oferta.getPrecio()} €</p>
            </div>

        </div>

        <div className="containerRomanticoInternacionalDiv2"></div>
    </div>
  )
}

export default RomanticoInternacional