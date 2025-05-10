import React from 'react'
import '../../../assets/styles/Itinerario.css'
import PlanVuelos from '../../../utils/Tarjetas/Planes/PlanVuelos'
import PlanHotel from '../../../utils/Tarjetas/Planes/PlanHotel'

function Itinerario({data, almacenado, dataOpcional}) {
    return (
        <div className='containerItinerario'>

            <h3 className='tituloSeccionItinerario'>✈️ Vuelos</h3>
            {almacenado ? <PlanVuelos ida={data._vueloIda} vuelta={data._vueloVuelta} almacenado={true}/> : <PlanVuelos ida={data.vueloIda} vuelta={data.vueloVuelta}/>}

            <h3 className='tituloSeccionItinerario'>🏠 Alojamiento</h3>
            {almacenado ? <PlanHotel  alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data}/> : <PlanHotel  alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data}/>}

        </div>
    )
}

export default Itinerario