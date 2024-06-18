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


  if(viaje.booking== null){
    return (
      <div className='containerResultadosViaje'>
              <p className='textoPresupuesto'>Estas son los planes que te recomendamos</p>  
              <p > Estamos teniendo problemas, porfavor, vuelva a intentarlo más tarde</p>

          {/* Validación para comprobar si hay vuelos disponibles */}
          {viaje.vuelos && viaje.vuelos !== "No hay vuelos disponibles" ? (
          <div className="containerResultadosViajeDiv">
                <ViajesBaratos alojamientos={viaje.airbnb} vuelos={viaje.vuelos}  datos={datos} />
          </div>
          ) : (
            <>
              <p>No hay vuelos disponibles pero te agregamos los mejores alojamientos</p>
             <ViajesBaratos alojamientos={viaje.airbnb} vuelos={null}  datos={datos} />
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
          {viaje.vuelos && viaje.vuelos !== "No hay vuelos disponibles"  ? (
          <div className="containerResultadosViajeDiv">
                {selectedOption === "alto" && <ViajesCaros alojamientos={viaje.booking} vuelos={viaje.vuelos} datos={datos} />}
                {selectedOption === "medio" && <ViajesMedios alojamientos={viaje.airbnb} vuelos={viaje.vuelos}  datos={datos} alojamientos2={viaje.booking} />}
                {selectedOption === "bajo" && <ViajesBaratos alojamientos={viaje.airbnb} vuelos={viaje.vuelos}  datos={datos} />}
          </div>
          ) : (
            <>
              <p>No hay vuelos disponibles pero te agregamos los mejores alojamientos</p>
              {selectedOption === "alto" && <ViajesCaros alojamientos={viaje.booking} vuelos={null}  datos={datos} />}
              {selectedOption === "medio" && <ViajesMedios alojamientos={viaje.airbnb} vuelos={null}  datos={datos} alojamientos2={viaje.booking} />}
              {selectedOption === "bajo" && <ViajesBaratos alojamientos={viaje.airbnb} vuelos={null}  datos={datos} />}
            </>
            
            
          )}
      </div>
    )
  }
}

export default ResultadosViajeConVuelos;
