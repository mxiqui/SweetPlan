import React from 'react'
import ViajeOrganizadoCaro from '../ofertas/ViajeOrganizadoCaro'
import '../../../../assets/styles/ViajesCaros.css'

function ViajesCaros({alojamientos, vuelos, datos}) {


    if(vuelos!=null && vuelos!='No hay vuelos disponibles'){
        return (
            <div className='containerViajesCaros'>
                <ViajeOrganizadoCaro alojamiento={alojamientos[0]} vuelo={vuelos[0]} datos={datos}/>
                <ViajeOrganizadoCaro alojamiento={alojamientos[1]} vuelo={vuelos[0]} datos={datos}/>
                <ViajeOrganizadoCaro alojamiento={alojamientos[2]} vuelo={vuelos[1]} datos={datos}/>
            </div>
        )
    }else{
        return (
            <div className='containerViajesCaros'>
                <ViajeOrganizadoCaro alojamiento={alojamientos[0]} vuelo={null} datos={datos}/>
                <ViajeOrganizadoCaro alojamiento={alojamientos[1]} vuelo={null} datos={datos}/>
                <ViajeOrganizadoCaro alojamiento={alojamientos[2]} vuelo={null} datos={datos}/>
            </div>
        )
    }
}

export default ViajesCaros