import React from 'react'

import '../../assets/styles/DetallesAlojamiento.css'

import imgWifi from '../../images/icon/wifi.png'
import imgTerraza from '../../images/icon/terraza.png'
import imgTelevision from '../../images/icon/television.png'
import imgPlaya from '../../images/icon/playa.png'
import imgPiscina from '../../images/icon/piscina.png'
import imgJardin from '../../images/icon/jardin.png'
import imgParking from '../../images/icon/parking.png'
import imgCocina from '../../images/icon/cocina.png'
import imgBanera from '../../images/icon/banera.png'
import imgAire from '../../images/icon/acondicionador-de-aire.png'

function DetallesAlojamiento({ detalles }) {

    const objetoPrueba = {
        wifi: true,
        piscina: false,
        playa: true,
        cocina: true,
        aparcamiento: true,
        balcon: true,
        terraza: true,
        television: true,
        bañera: false,
        aireAcondicionado: false,
        jardin: false
    }

    const icons = {
        wifi: imgWifi,
        piscina: imgPiscina,
        playa: imgPlaya,
        cocina: imgCocina,
        aparcamiento: imgParking,
        balcon: imgTerraza, // Assuming you meant "balcon" to be "terraza"
        terraza: imgTerraza,
        television: imgTelevision,
        bañera: imgBanera,
        aireAcondicionado: imgAire,
        jardin: imgJardin
    }

    return (
        <div className='containerDetallesAlojamiento'>
            <h4>¿Qué encontrarás en la casa?</h4>
            <div className='containerDetallesAlojamientoDetalle'>
                {Object.keys(objetoPrueba).map(key => {
                    if (objetoPrueba[key]) {
                        return (
                            <div key={key}>
                                <img src={icons[key]} alt={key} />
                                <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default DetallesAlojamiento
