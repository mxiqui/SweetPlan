import React from 'react'
import ViajeOrganizadoCaro from '../ofertas/ViajeOrganizadoCaro'
import '../../../../assets/styles/ViajesCaros.css'
import ViajeOrganizadoMedio from '../ofertas/ViajeOrganizadoMedio'

function ViajesMedios({alojamientos, vuelos, alojamientos2}) {


    return (
        <div className='containerViajesCaros'>
            <ViajeOrganizadoMedio alojamiento={alojamientos[0]} vuelo={vuelos[0]}/>
            <ViajeOrganizadoMedio alojamiento={alojamientos[1]} vuelo={vuelos[0]}/>
            <ViajeOrganizadoCaro alojamiento={alojamientos2[3]} vuelo={vuelos[0]}/>
        </div>
    )
}

export default ViajesMedios