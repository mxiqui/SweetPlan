import React, { useState } from 'react'

import imageProof from '../../../images/aerolines/ryanair.png'
import AirplaneIcon from '../../../images/icon/avion.png'
import '../../../assets/styles/PlanVuelos.css'
import AvionComponent from '../../components/AvionComponent'

/**
 * Esta clase debe recibir por parametros los vuelos de ida y de vuelta, junto al alojamiento.
 * @returns 
 */
function PlanVuelos({ida, vuelta}) {

    const abrirVueloIda=()=>{
        window.open(ida.url, "_blank")
    }

    const abrirVueloVuelta=()=>{
        window.open(vuelta.url, "_blank")
    } 


    if(ida==null || vuelta ==null){
        return (
            <div className='containerPlanVuelos'>
                <div className='containerIda-Vuelta'>
                    <div className='cAirplanes tarjetaItinerario'>
                        <p>No hay vuelos para este viaje</p>
                    </div>
                </div>
            </div>
          )
    }else{
        return (
            <div className='containerPlanVuelos' >
                <div className='containerIda-Vuelta'>
                    <div className='cAirplanes tarjetaItinerario' onClick={abrirVueloIda}>
                        <div className='containerAirlines'>
                            <img className='imageAirline' src={ida.imagenAerolinea} alt="" />
                            <h5>{ida.aerolinea}</h5>
                        </div>
        
                        <div className='ida'>
                            <div className="containerPlaceAndTime">
                            <h4>{ida.horaLlegada.includes('T') ? ida.horaLlegada.split('T')[1].substr(0, 5) : ida.horaLlegada.substr(0, 5)}</h4>
                                <h5>{ida.aeropuertoIda}</h5>
                            </div>
                            <AvionComponent/>
                            <div className="containerPlaceAndTime">
                                <h4>{ida.horaSalida.includes('T') ? ida.horaSalida.split('T')[1].substr(0, 5) : ida.horaSalida.substr(0, 5)}</h4>
                                <h5>{ida.aeropuertoVuelta}</h5>
                            </div>
                        </div>
                        {/* <div className='containerFechaPlaceAndTime'>
                            <p>{ida.getFecha()}</p>
                        </div> */}
                    </div>
        
                    <div className='cAirplanes tarjetaItinerario' onClick={abrirVueloVuelta}>
                        <div className='containerAirlines'>
                            <img className='imageAirline' src={vuelta.imagenAerolinea} alt="" />
                            <h5>{vuelta.aerolinea}</h5>
                        </div>
        
                        <div className='vuelta'>
                            <div className="containerPlaceAndTime">
                                <h4>{vuelta.horaLlegada.includes('T') ? vuelta.horaLlegada.split('T')[1].substr(0, 5) : vuelta.horaLlegada.substr(0, 5)}</h4>
                                <h5>{vuelta.aeropuertoIda}</h5>
                            </div>
                            <AvionComponent/>
                            <div className="containerPlaceAndTime">
                                <h4>{vuelta.horaSalida.includes('T') ? vuelta.horaSalida.split('T')[1].substr(0, 5) : vuelta.horaSalida.substr(0, 5)}</h4>
                                <h5>{vuelta.aeropuertoVuelta}</h5>
                            </div>
                        </div>
                        {/* <div className='containerFechaPlaceAndTime'>
                            <p>{vuelta.getFecha()}</p>
                        </div> */}
                    </div>
                </div>
            </div>
          )
    }

    
}

export default PlanVuelos