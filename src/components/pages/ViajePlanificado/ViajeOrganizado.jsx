import React from 'react'
import imgAvion from'../../../images/icon/avion2.png'
import imgPrueba from '../../../images/bali/bali1.jpg'
import '../../../assets/styles/ViajeOrganizado.css'


function ViajeOrganizado({oferta, alojamiento}) {

    const handleClick = () => {
        sessionStorage.setItem('vuelo', JSON.stringify(oferta));
        sessionStorage.setItem('alojamiento', JSON.stringify(alojamiento));
    };

  return (
    <div className='containerResultadoPlanificacion' onClick={handleClick}>
        <div className="containerResultadoPlanificacionDiv1" style={{backgroundImage: `url(${alojamiento.galeria[3]})`}}>
            <img className='imagenAerolinea' src={oferta[0].urlImagen} alt="" />
            <div className="containerResultadoPlanificacionVuelo">
                <div className="containerResultadoPlanificacionVuelo-ida">
                    <h3>{oferta[0].origen}</h3>
                    <h4>{oferta[0].aeropuertoIda}</h4>
                </div>
                <img width={"20px"} src={imgAvion} alt="" />
                <div className="containerResultadoPlanificacionVuelo-vuelta">
                    <h3>{oferta[0].destino}</h3>
                    <h4>{oferta[0].aeropuertoVuelta}</h4>
                </div>
            </div>
        </div>
        <div className="containerResultadoPlanificacionDiv2">

            <div className="containerResultadoPlanificacionFecha">
                <p className='containerResultadoPlanificacionFechaName'>{alojamiento.nombre}</p>
                <p className='containerResultadoPlanificacionFechaPrice'>{oferta[0].precio+oferta[1].precio} €</p>
            </div>
            <div className="containerResultadoPlanificacionFechaAdicional">
                <p>Vuelos y alojamiento</p>
                <p>Precio 2 personas</p>
            </div>

        </div>

        <div className="containerRomanticoInternacionalDiv2">
        </div>
    </div>
  )
}

export default ViajeOrganizado