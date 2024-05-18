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

    const abrirVuelos=()=>{
        window.open(ida.getUrl(), "_blank")
    } 


    if(ida==null || vuelta ==null){
        return (
            <div className='containerPlanVuelos' onClick={abrirVuelos}>
                <div className='containerIda-Vuelta'>
                    <div className='cAirplanes tarjetaItinerario'>
                        <p>No hay vuelos para este viaje</p>
                    </div>
                </div>
            </div>
          )
    }else{
        return (
            <div className='containerPlanVuelos' onClick={abrirVuelos}>
                <div className='containerIda-Vuelta'>
                    <div className='cAirplanes tarjetaItinerario'>
                        <div className='containerAirlines'>
                            <img className='imageAirline' src={ida.getImageAirline()} alt="" />
                            <h5>{ida.getAirline()}</h5>
                        </div>
        
                        <div className='ida'>
                            <div className="containerPlaceAndTime">
                            <h4>{ida.getOriginTime().includes('T') ? ida.getOriginTime().split('T')[1].substr(0, 5) : ida.getOriginTime().substr(0, 5)}</h4>
                                <h5>{ida.getOriginAirport()}</h5>
                            </div>
                            <AvionComponent/>
                            <div className="containerPlaceAndTime">
                                <h4>{ida.getDestinationTime().includes('T') ? ida.getDestinationTime().split('T')[1].substr(0, 5) : ida.getDestinationTime().substr(0, 5)}</h4>
                                <h5>{ida.getDestinationAirport()}</h5>
                            </div>
                        </div>
                        {/* <div className='containerFechaPlaceAndTime'>
                            <p>{ida.getFecha()}</p>
                        </div> */}
                    </div>
        
                    <div className='cAirplanes tarjetaItinerario'>
                        <div className='containerAirlines'>
                            <img className='imageAirline' src={ida.getImageAirline()} alt="" />
                            <h5>{vuelta.getAirline()}</h5>
                        </div>
        
                        <div className='vuelta'>
                            <div className="containerPlaceAndTime">
                                <h4>{vuelta.getOriginTime().includes('T') ? vuelta.getOriginTime().split('T')[1].substr(0, 5) : vuelta.getOriginTime().substr(0, 5)}</h4>
                                <h5>{vuelta.getOriginAirport()}</h5>
                            </div>
                            <AvionComponent/>
                            <div className="containerPlaceAndTime">
                                <h4>{vuelta.getDestinationTime().includes('T') ? vuelta.getDestinationTime().split('T')[1].substr(0, 5) : vuelta.getDestinationTime().substr(0, 5)}</h4>
                                <h5>{vuelta.getDestinationAirport()}</h5>
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