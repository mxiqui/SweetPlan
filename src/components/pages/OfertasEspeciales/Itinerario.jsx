import React from 'react'
import '../../../assets/styles/Itinerario.css'
import PlanVuelos from '../../../utils/Tarjetas/Planes/PlanVuelos'
import PlanHotel from '../../../utils/Tarjetas/Planes/PlanHotel'

function Itinerario({data}) {

    return (
        <div className='containerItinerario'>
            <PlanVuelos ida={data.getVueloIda()} vuelta={data.getVueloVuelta()}/>
            <PlanHotel alojamiento={data.getAlojamiento()}/>
        </div>
    )
}

export default Itinerario