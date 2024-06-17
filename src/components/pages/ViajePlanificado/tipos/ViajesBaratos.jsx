import React from 'react'
import ViajeOrganizadoCaro from '../ofertas/ViajeOrganizadoCaro'
import '../../../../assets/styles/ViajesCaros.css'
import ViajeOrganizadoBarato from '../ofertas/ViajeOrganizadoBarato'

function ViajesBaratos({alojamientos, vuelos, datos}) {

    console.log(vuelos)

    if(vuelos!=null && vuelos!='No hay vuelos disponibles'){
        return (
            <div className='containerViajesCaros'>
                <ViajeOrganizadoBarato alojamiento={alojamientos[2]} vuelo={vuelos[0]} datos={datos}/>
                <ViajeOrganizadoBarato alojamiento={alojamientos[3]} vuelo={vuelos[0]} datos={datos}/>
                <ViajeOrganizadoBarato alojamiento={alojamientos[4]} vuelo={vuelos[0]} datos={datos}/>
            </div>
        )
    }else{
        return (
            <div className='containerViajesCaros'>
                <ViajeOrganizadoBarato alojamiento={alojamientos[2]} vuelo={null} datos={datos}/>
                <ViajeOrganizadoBarato alojamiento={alojamientos[3]} vuelo={null} datos={datos}/>
                <ViajeOrganizadoBarato alojamiento={alojamientos[4]} vuelo={null} datos={datos}/>
            </div>
        )
    }
}

export default ViajesBaratos