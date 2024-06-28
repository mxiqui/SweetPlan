import React from 'react'
import '../../../assets/styles/Itinerario.css'
import PlanVuelos from '../../../utils/Tarjetas/Planes/PlanVuelos'
import PlanHotel from '../../../utils/Tarjetas/Planes/PlanHotel'

function Itinerario({data, almacenado, dataOpcional}) {

    return (
        <div className='containerItinerario'>
            <PlanVuelos ida={data.vueloIda} vuelta={data.vueloVuelta}/>
            <PlanHotel  alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data}/>
        </div>
    )
}

export default Itinerario