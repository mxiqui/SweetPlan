import React from 'react';
import '../../../assets/styles/Itinerario.css';
import PlanVuelos from './PlanVueloOferta';
import PlanHotel from './PlanHotelOferta';
import OfertasFechas from './OfertasFecha';

function Itinerario({ data, almacenado, dataOpcional }) {
    return (
        <div className='containerItinerario'>
            <h3 className='tituloSeccionItinerario'>Itinerario</h3>
            <PlanVuelos ida={data.vueloIda} vuelta={data.vueloVuelta} />
            <PlanHotel alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data} /> 
            <OfertasFechas 
                destino={data.destino} 
                origen={data.origen} 
                personas={data.personas}
                fechaActual={data.fechaInicio}/>

        </div>
    );
}

export default Itinerario;
