import React from 'react';
import '../../../assets/styles/Itinerario.css';
import PlanVuelos from './PlanVueloOferta';
import PlanHotel from './PlanHotelOferta';
import OfertasFechas from './OfertasFecha';
import OfertasOrigen from './OfertasOrigen';

function Itinerario({ data, almacenado, dataOpcional }) {
    return (
        <div className='containerItinerario'>
            <h3 className='tituloSeccionItinerario'>Itinerario</h3>
            <PlanVuelos ida={data.vueloIda} vuelta={data.vueloVuelta} />
            <PlanHotel alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data} /> 
            {/* <div className='containerOpcionesFechaYOrigen'>
                <OfertasFechas 
                destino={data.destino} 
                origen={data.origen} 
                personas={data.personas}
                fechaActual={data.fechaInicio}
                id={data.id}/>

            <OfertasOrigen
            destino={data.destino} 
                origenActual={data.origen} 
                personas={data.personas}
                fechaActual={data.fechaInicio}
                id={data.id}/>
            </div> */}
            

        </div>
    );
}

export default Itinerario;
