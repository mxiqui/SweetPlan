import React from 'react'
import ViajeOrganizadoCaro from '../ofertas/ViajeOrganizadoCaro'
import '../../../../assets/styles/ViajesCaros.css'
import ViajeOrganizadoMedio from '../ofertas/ViajeOrganizadoMedio'

function ViajesMedios({alojamientos, vuelos, alojamientos2, datos}) {

    if(vuelos!=null && vuelos!='No hay vuelos disponibles'){
        return (
            <div className='containerViajesCaros'>
            <ViajeOrganizadoMedio alojamiento={alojamientos[0]} vuelo={vuelos[0]} datos={datos}/>
            <ViajeOrganizadoMedio alojamiento={alojamientos[1]} vuelo={vuelos[0]} datos={datos}/>
            <ViajeOrganizadoCaro alojamiento={alojamientos2[3]} vuelo={vuelos[0]} datos={datos}/>
        </div>
        )
    }else{
        return (
            <div className='containerViajesCaros'>
                <ViajeOrganizadoMedio alojamiento={alojamientos[0]} vuelo={null} datos={datos}/>
                <ViajeOrganizadoMedio alojamiento={alojamientos[1]} vuelo={null} datos={datos}/>
                <ViajeOrganizadoCaro alojamiento={alojamientos2[3]} vuelo={null} datos={datos}/>
            </div>
        )
    }
}

export default ViajesMedios