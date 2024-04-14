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


    return (
    <div className='containerPlanVuelos' onClick={abrirVuelos}>
        <div className='containerIda-Vuelta'>
            <div className='cAirplanes tarjetaItinerario'>
                <div className='containerAirlines'>
                    <img className='imageAirline' src={imageProof} alt="" />
                    <h5>{ida.getAirline()}</h5>
                </div>

                <div className='ida'>
                    <div className="containerPlaceAndTime">
                        <h4>{ida.getOriginTime()}</h4>
                        <h5>{ida.getOriginAirport()}</h5>
                    </div>
                    <AvionComponent/>
                    <div className="containerPlaceAndTime">
                        <h4>{ida.getDestinationTime()}</h4>
                        <h5>{ida.getDestinationAirport()}</h5>
                    </div>
                </div>
                <div className='containerFechaPlaceAndTime'>
                    <p>{ida.getFecha()}</p>
                </div>
            </div>

            <div className='cAirplanes tarjetaItinerario'>
                <div className='containerAirlines'>
                    <img className='imageAirline' src={imageProof} alt="" />
                    <h5>{vuelta.getAirline()}</h5>
                </div>

                <div className='vuelta'>
                    <div className="containerPlaceAndTime">
                        <h4>{vuelta.getOriginTime()}</h4>
                        <h5>{vuelta.getOriginAirport()}</h5>
                    </div>
                    <AvionComponent/>
                    <div className="containerPlaceAndTime">
                        <h4>{vuelta.getDestinationTime()}</h4>
                        <h5>{vuelta.getDestinationAirport()}</h5>
                    </div>
                </div>
                <div className='containerFechaPlaceAndTime'>
                    <p>{vuelta.getFecha()}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlanVuelos