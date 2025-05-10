import React, { useState } from 'react';
import ViajeOrganizado from './ViajeOrganizado';
import '../../../assets/styles/ResultadosViaje.css';
import ThreeWaySwitch from '../../../utils/components/ThreeWaySwitch';
import ViajesCaros from './tipos/ViajesCaros';
import ViajesMedios from './tipos/ViajesMedios';
import ViajesBaratos from './tipos/ViajesBaratos';
import MasVuelos from '../Ofertas/MasVuelos';
import MasAlojamientosAirbnb from '../Ofertas/MasAlojamientosAirbnb';

function ResultadosViajeConVuelos() {
  const [selectedOption, setSelectedOption] = useState('medio');
  const valor = sessionStorage.getItem('plan');
  const viaje = JSON.parse(valor);
  const { vuelos, alojamientoBooking, alojamientosAirbnb, datosBusqueda } = viaje;

  const handleSwitchChange = newPosition => {
    setSelectedOption(newPosition);
  };

  const hayVuelos = vuelos && vuelos !== "null" && vuelos !== "No hay vuelos disponibles";
  const hayBooking = alojamientoBooking != null;
  const hayAirbnb = alojamientosAirbnb != null;

  const mostrarViajes = (tipo) => {
    switch (tipo) {
      case 'alto':
        return <ViajesCaros alojamientos={alojamientoBooking} vuelos={hayVuelos ? vuelos : null} datos={datosBusqueda} />;
      case 'medio':
        return <ViajesMedios 
                 alojamientos={alojamientosAirbnb} 
                 vuelos={hayVuelos ? vuelos : null} 
                 datos={datosBusqueda} 
                 alojamientos2={alojamientoBooking} 
               />;
      case 'bajo':
      default:
        return <ViajesBaratos alojamientos={alojamientosAirbnb} vuelos={hayVuelos ? vuelos : null} datos={datosBusqueda} />;
    }
  };

  // ✅ Directriz 1: Hay vuelos + Booking + Airbnb
  if (hayVuelos && hayBooking && hayAirbnb) {
    return (
      <div className='containerResultadosViaje'>
        <p className='textoPresupuesto'>Seleccione la acomodación</p>
        <ThreeWaySwitch onChange={handleSwitchChange} />
        {/* <p>Estas son los planes que te recomendamos</p> */}
        <div className="containerResultadosViajeDiv">
          {mostrarViajes(selectedOption)}
        </div>
        <div className="botonPersonalizarOferta">
          <button>Mostrar más vuelos y alojamientos</button>
        </div>
        {/* <MasVuelos/>
        <MasAlojamientosAirbnb/> */}
      </div>
    );
  }

  // ✅ Directriz 2: Solo Booking y Airbnb, sin vuelos
  if (!hayVuelos && hayBooking && hayAirbnb) {
    return (
      <div className='containerResultadosViaje'>
        <p className='textoPresupuesto'>Seleccione la acomodación</p>
        <ThreeWaySwitch onChange={handleSwitchChange} />
        <p>No hay vuelos disponibles en este momento. Por favor, inténtalo más tarde.</p>
        <div className="containerResultadosViajeDiv">
          {mostrarViajes(selectedOption)}
        </div>
      </div>
    );
  }

  // ✅ Directriz 3: Solo vuelos + Airbnb (sin Booking)
  if (hayVuelos && !hayBooking && hayAirbnb) {
    return (
      <div className='containerResultadosViaje'>
        <p className='textoPresupuesto'>Estas son los planes más económicos que te recomendamos</p>
        <div className="containerResultadosViajeDiv">
          <ViajesBaratos alojamientos={alojamientosAirbnb} vuelos={vuelos} datos={datosBusqueda} />
        </div>
      </div>
    );
  }

  // ⚠️ Fallback: datos incompletos o error
  return (
    <div className='containerResultadosViaje'>
      <p className='textoPresupuesto'>Estamos teniendo problemas. Por favor, vuelva a intentarlo más tarde.</p>
    </div>
  );
}

export default ResultadosViajeConVuelos;
