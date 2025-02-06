import React, { useState } from 'react'

import imageProof from '../../../images/aerolines/ryanair.png'
import AirplaneIcon from '../../../images/icon/avion.png'
import '../../../assets/styles/PlanVuelos.css'
import AvionComponent from '../../components/AvionComponent'

/**
 * Esta clase debe recibir por parametros los vuelos de ida y de vuelta, junto al alojamiento.
 * @returns 
 */
function PlanVuelos({ida, vuelta, almacenado}) {

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
        if(almacenado){
            return (
                <div className='containerPlanVuelos' >
                    <div className='containerIda-Vuelta'>
                        <div className='cAirplanes tarjetaItinerario' onClick={abrirVueloIda}>
                            <div className='containerAirlines'>
                                <img className='imageAirline' src={ida._imageAirline} alt="" />
                                <h5>{ida._airline}</h5>
                            </div>
            
                            <div className='ida'>
                                <div className="containerPlaceAndTime">
                                <h4>{ida._originTime.includes('T') ? ida._originTime.split('T')[1].substr(0, 5) : ida._originTime.substr(0, 5)}</h4>
                                    <h5>{ida._originAirport}</h5>
                                </div>
                                <AvionComponent/>
                                <div className="containerPlaceAndTime">
                                    <h4>{ida._destinationTime.includes('T') ? ida._destinationTime.split('T')[1].substr(0, 5) : ida._destinationTime.substr(0, 5)}</h4>
                                    <h5>{ida._destinationAirport}</h5>
                                </div>
                            </div>
                            {/* <div className='containerFechaPlaceAndTime'>
                                <p>{ida.getFecha()}</p>
                            </div> */}
                        </div>
            
                        <div className='cAirplanes tarjetaItinerario' onClick={abrirVueloVuelta}>
                            <div className='containerAirlines'>
                                <img className='imageAirline' src={vuelta._imageAirline} alt="" />
                                <h5>{vuelta._airline}</h5>
                            </div>
            
                            <div className='vuelta'>
                                <div className="containerPlaceAndTime">
                                    <h4>{vuelta._originTime.includes('T') ? vuelta._originTime.split('T')[1].substr(0, 5) : vuelta._originTime.substr(0, 5)}</h4>
                                    <h5>{vuelta._originAirport}</h5>
                                </div>
                                <AvionComponent/>
                                <div className="containerPlaceAndTime">
                                    <h4>{vuelta._destinationTime.includes('T') ? vuelta._destinationTime.split('T')[1].substr(0, 5) : vuelta._destinationTime.substr(0, 5)}</h4>
                                    <h5>{vuelta._destinationAirport}</h5>
                                </div>
                            </div>
                            {/* <div className='containerFechaPlaceAndTime'>
                                <p>{vuelta.getFecha()}</p>
                            </div> */}
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

    
}

export default PlanVuelos