import React from 'react'
import ViajeOrganizadoCaro from '../ofertas/ViajeOrganizadoCaro'
import '../../../../assets/styles/ViajesCaros.css'
import ViajeOrganizadoBarato from '../ofertas/ViajeOrganizadoBarato'

function ViajesBaratos({alojamientos, vuelos}) {

    return (
        <div className='containerViajesCaros'>
            <ViajeOrganizadoBarato alojamiento={alojamientos[2]} vuelo={vuelos[0]}/>
            <ViajeOrganizadoBarato alojamiento={alojamientos[3]} vuelo={vuelos[0]}/>
            <ViajeOrganizadoBarato alojamiento={alojamientos[4]} vuelo={vuelos[0]}/>
        </div>
    )
}

export default ViajesBaratos