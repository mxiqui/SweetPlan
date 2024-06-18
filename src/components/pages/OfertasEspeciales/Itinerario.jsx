import React from 'react'
import '../../../assets/styles/Itinerario.css'
import PlanVuelos from '../../../utils/Tarjetas/Planes/PlanVuelos'
import PlanHotel from '../../../utils/Tarjetas/Planes/PlanHotel'

function Itinerario({data, almacenado, dataOpcional}) {

    
    console.log(data)

    if(data.lenght<2){
        data.setGaleria(dataOpcional)
        data.getAlojamiento()._galeria=dataOpcional
    }else{
        
    }

    return (
        <div className='containerItinerario'>
            <PlanVuelos ida={data.getVueloIda()} vuelta={data.getVueloVuelta()}/>
            <PlanHotel  alojamiento={data.getAlojamiento()} almacenado={almacenado}/>
        </div>
    )
}

export default Itinerario