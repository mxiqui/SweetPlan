import React from 'react'
import ViajeOrganizadoCaro from '../ofertas/ViajeOrganizadoCaro'
import '../../../../assets/styles/ViajesCaros.css'
import ViajeOrganizadoBarato from '../ofertas/ViajeOrganizadoBarato'
import ViajeOrganizadoMedio from '../ofertas/ViajeOrganizadoMedio'

function ViajesBaratos({alojamientos, vuelos, datos}) {

    if(vuelos!=null){
        return (
            <div className='containerViajesCaros'>
                <ViajeOrganizadoMedio alojamiento={alojamientos[2]} vuelo={vuelos[0]} datos={datos}/>
                <ViajeOrganizadoMedio alojamiento={alojamientos[3]} vuelo={vuelos[0]} datos={datos}/>
                <ViajeOrganizadoMedio alojamiento={alojamientos[4]} vuelo={vuelos[0]} datos={datos}/>
            </div>
        )
    }else{
        return (
            <div className='containerViajesCaros'>
                <ViajeOrganizadoMedio alojamiento={alojamientos[2]} vuelo={null} datos={datos}/>
                <ViajeOrganizadoMedio alojamiento={alojamientos[3]} vuelo={null} datos={datos}/>
                <ViajeOrganizadoMedio alojamiento={alojamientos[4]} vuelo={null} datos={datos}/>
            </div>
        )
    }
}

export default ViajesBaratos