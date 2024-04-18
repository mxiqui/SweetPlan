import React from 'react'
import ViajeOrganizadoCaro from '../ofertas/ViajeOrganizadoCaro'
import '../../../../assets/styles/ViajesCaros.css'

function ViajesCaros({alojamientos, vuelos}) {

    return (
        <div className='containerViajesCaros'>
            <ViajeOrganizadoCaro alojamiento={alojamientos[0]} vuelo={vuelos[0]}/>
            <ViajeOrganizadoCaro alojamiento={alojamientos[1]} vuelo={vuelos[0]}/>
            <ViajeOrganizadoCaro alojamiento={alojamientos[2]} vuelo={vuelos[1]}/>
        </div>
    )
}

export default ViajesCaros