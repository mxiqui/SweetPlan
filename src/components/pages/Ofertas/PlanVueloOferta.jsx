import React from 'react';
import '../../../assets/styles/PlanVuelos.css';
import AvionComponent from '../../../utils/components/AvionComponent';

/**
 * Componente que muestra la información de los vuelos de ida y vuelta.
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.ida - Información del vuelo de ida
 * @param {Object} props.vuelta - Información del vuelo de vuelta
 * @returns {JSX.Element}
 */
function PlanVuelos({ ida, vuelta }) {
  const abrirEnlace = (url) => {
    if (url) window.open(url, '_blank');
  };

  const formatearHora = (hora) => {
    if (!hora) return '';
    return hora.includes('T') ? hora.split('T')[1].substring(0, 5) : hora.substring(0, 5);
  };

  if (!ida || !vuelta) {
    return (
      <div className='containerPlanVuelos'>
        <div className='containerIda-Vuelta'>
          <div className='cAirplanes tarjetaItinerario'>
            <p>No hay vuelos para este viaje.</p>
          </div>
        </div>
      </div>
    );
  }

  const renderVuelo = (vuelo, tipo) => (
    <div className='cAirplanes tarjetaItinerario' onClick={() => abrirEnlace(vuelo.url)} role='button' tabIndex={0}>
      <div className='containerAirlines'>
        <img className='imageAirline' src={vuelo.urlImagen} alt={`Logo de ${vuelo.aerolinea}`} loading='lazy' />
        <h5>{vuelo.aerolinea}</h5>
      </div>

      <div className={tipo}>
        <div className='containerPlaceAndTime'>
          <h4>{formatearHora(vuelo.horaSalida)}</h4>
          <h5>{vuelo.aeropuertoSalida}</h5>
        </div>
        <AvionComponent />
        <div className='containerPlaceAndTime'>
          <h4>{formatearHora(vuelo.horaLLegada)}</h4>
          <h5>{vuelo.aeropuetoLlegada}</h5>
        </div>
      </div>
    </div>
  );

  return (
    <div className='containerPlanVuelos'>
      <div className='containerIda-Vuelta'>
        {renderVuelo(ida, 'ida')}
        {renderVuelo(vuelta, 'vuelta')}
      </div>
    </div>
  );
}

export default PlanVuelos;
