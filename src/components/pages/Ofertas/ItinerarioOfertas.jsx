import React from 'react';
import '../../../assets/styles/Itinerario.css';
import PlanVuelos from './PlanVueloOferta';
import PlanHotel from './PlanHotelOferta';

function Itinerario({ data, almacenado, dataOpcional }) {
    return (
        <div className='containerItinerario'>
            <h3 className='tituloSeccionItinerario'>Itinerario</h3>
            <PlanVuelos ida={data.vueloIda} vuelta={data.vueloVuelta} />
            <PlanHotel alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data} /> 

        </div>
    );
}

export default Itinerario;
