import React from 'react'
import '../../../assets/styles/Itinerario.css'
import PlanVuelos from '../../../utils/Tarjetas/Planes/PlanVuelos'
import PlanHotel from '../../../utils/Tarjetas/Planes/PlanHotelBooking'

function Itinerario({data, almacenado, dataOpcional}) {
    console.log(data)
    return (
        <div className='containerItinerario'>
            {almacenado ? <PlanVuelos ida={data._vueloIda} vuelta={data._vueloVuelta} almacenado={true}/> : <PlanVuelos ida={data.vueloIda} vuelta={data.vueloVuelta}/>}
            {almacenado ? <PlanHotel  alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data}/> : <PlanHotel  alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data}/>}
        </div>
    )
}

export default Itinerario