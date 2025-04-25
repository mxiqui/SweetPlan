import React, { useState } from 'react';
import ViajeOrganizado from './ViajeOrganizado';
import '../../../assets/styles/ResultadosViaje.css';
import ThreeWaySwitch from '../../../utils/components/ThreeWaySwitch';
import ViajesCaros from './tipos/ViajesCaros';
import ViajesMedios from './tipos/ViajesMedios';
import ViajesBaratos from './tipos/ViajesBaratos';

function ResultadosViajeConVuelos() {

  const [selectedOption, setSelectedOption] = useState('medio');
  var valor = sessionStorage.getItem('plan');
  var viaje = JSON.parse(valor);
  const [datos, setDatos]= useState(viaje.datos)


  const handleSwitchChange = newPosition => {
    setSelectedOption(newPosition);
  };

  


  if(viaje.alojamientoBooking == null){
    return (
      <div className='containerResultadosViaje'>
              <p className='textoPresupuesto'>Estas son los planes que te recomendamos</p>  
              <p > Estamos teniendo problemas, porfavor, vuelva a intentarlo más tarde</p>

          {/* Validación para comprobar si hay vuelos disponibles */}
          {viaje.vuelos && viaje.vuelos !== "No hay vuelos disponibles" ? (
          <div className="containerResultadosViajeDiv">
                <ViajesBaratos alojamientos={viaje.alojamientosAirbnb} vuelos={viaje.vuelos}  datos={viaje.datosBusqueda} />
          </div>
          ) : (
            <>
              <p>No hay vuelos disponibles pero te agregamos los mejores alojamientos</p>
             <ViajesBaratos alojamientos={viaje.alojamientosAirbnb} vuelos={null}  datos={viaje.datosBusqueda} />
            </>
            
            
          )}
      </div>
    )
  }else{
    return (
      <div className='containerResultadosViaje'>
              <p className='textoPresupuesto'>Seleccione la acomodación</p>
              <ThreeWaySwitch onChange={handleSwitchChange} />
  
              <p >Estas son los planes que te recomendamos</p>

          {/* Validación para comprobar si hay vuelos disponibles */}
          {viaje.vuelos && viaje.vuelos !== "null"  ? (
          <div className="containerResultadosViajeDiv">
                {selectedOption === "alto" && <ViajesCaros alojamientos={viaje.alojamientoBooking} vuelos={viaje.vuelos} datos={viaje.datosBusqueda} />}
                {selectedOption === "medio" && <ViajesMedios alojamientos={viaje.alojamientosAirbnb} vuelos={viaje.vuelos}  datos={viaje.datosBusqueda} alojamientos2={viaje.alojamientoBooking} />}
                {selectedOption === "bajo" && <ViajesBaratos alojamientos={viaje.alojamientosAirbnb} vuelos={viaje.vuelos}  datos={viaje.datosBusqueda} />}
          </div>
          ) : (
            <>
              <p>No hay vuelos disponibles pero te agregamos los mejores alojamientos</p>
              {selectedOption === "alto" && <ViajesCaros alojamientos={viaje.alojamientoBooking} vuelos={null}  datos={viaje.datosBusqueda} />}
              {selectedOption === "medio" && <ViajesMedios alojamientos={viaje.alojamientosAirbnb} vuelos={null}  datos={viaje.datosBusqueda} alojamientos2={viaje.alojamientoBooking} />}
              {selectedOption === "bajo" && <ViajesBaratos alojamientos={viaje.alojamientosAirbnb} vuelos={null}  datos={viaje.datosBusqueda} />}
            </>
            
            
          )}

          <div className="botonPersonalizarOferta">
            <button>Mostrar más vuelos y alojamientos</button>
          </div>
      </div>
    )
  }
}

export default ResultadosViajeConVuelos;
