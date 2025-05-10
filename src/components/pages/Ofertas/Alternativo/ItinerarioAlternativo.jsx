import React, { useEffect, useState } from 'react';
import '../../../../assets/styles/Itinerario.css';
import PlanVuelos from '../PlanVueloOferta';
import PlanHotel from '../PlanHotelOferta';
import ModalCambiarVuelos from './ModalCambiarVuelo';

function ItinerarioAlternativo({ data, almacenado, dataOpcional }) {
    const [usarVuelosAlternativos, setUsarVuelosAlternativos] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleAbrirModal = () => setMostrarModal(true);
    const handleCerrarModal = () => setMostrarModal(false);

   const handleConfirmarCambio = () => {
    setUsarVuelosAlternativos(prev => !prev); // <-- Alterna el valor
    setMostrarModal(false);
};
 

    const vueloIda = usarVuelosAlternativos ? data.vueloIdaAlternativa : data.vueloIda;
    const vueloVuelta = usarVuelosAlternativos ? data.vueloVueltaAlternativa : data.vueloVuelta;

    const precioOriginal = (data.vueloIda?.precio || 0) + (data.vueloVuelta?.precio || 0);
const precioAlternativo = (data.vueloIdaAlternativa?.precio || 0) + (data.vueloVueltaAlternativa?.precio || 0);
const diferencia = usarVuelosAlternativos
    ? precioOriginal - precioAlternativo
    : precioAlternativo - precioOriginal;


    return (
        <div className='containerItinerario'>
            <h3 className='tituloSeccionItinerario'>Itinerario</h3>
            
            <PlanVuelos ida={vueloIda} vuelta={vueloVuelta} />
            <PlanHotel alojamiento={data.AlojamientoV2} almacenado={almacenado} oferta={data} /> 

            <p className="botonCambiarVuelos" onClick={handleAbrirModal}>
                Cambiar los vuelos
            </p>

            {/* Modal flotante */}
            <ModalCambiarVuelos
    isOpen={mostrarModal}
    onClose={handleCerrarModal}
    onConfirm={handleConfirmarCambio}
    diferencia={diferencia}
>
    <PlanVuelos
        ida={usarVuelosAlternativos ? data.vueloIda : data.vueloIdaAlternativa}
        vuelta={usarVuelosAlternativos ? data.vueloVuelta : data.vueloVueltaAlternativa}
    />
</ModalCambiarVuelos>


        </div>
    );
}

export default ItinerarioAlternativo;
