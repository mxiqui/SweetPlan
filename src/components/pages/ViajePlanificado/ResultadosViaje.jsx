import React, { useState } from 'react'
import ViajeOrganizado from './ViajeOrganizado'
import '../../../assets/styles/ResultadosViaje.css'
import ThreeWaySwitch from '../../../utils/components/ThreeWaySwitch';
import ViajesCaros from './tipos/ViajesCaros';
import ViajesMedios from './tipos/ViajesMedios';
import ViajesBaratos from './tipos/ViajesBaratos';

function ResultadosViaje() {

  const [selectedOption, setSelectedOption] = useState('medio');
  var valor = sessionStorage.getItem('plan');
  var viaje = JSON.parse(valor);


  const handleSwitchChange = newPosition => {
    setSelectedOption(newPosition);
  };

  if(viaje.booking!=null){
    return (
      <div className='containerResultadosViaje'>
              <ThreeWaySwitch onChange={handleSwitchChange} />
  
          <div className="containerResultadosViajeDiv">
  
            {selectedOption == "alto" && <ViajesCaros alojamientos={viaje.booking} vuelos={viaje.vuelos}/>}
            {selectedOption == "medio" && <ViajesMedios alojamientos={viaje.airbnb} vuelos={viaje.vuelos} alojamientos2={viaje.booking}/>}
            {selectedOption == "bajo" && <ViajesBaratos alojamientos={viaje.airbnb} vuelos={viaje.vuelos}/>}
  
          </div>
      </div>
    )
  }else{
    return (
      <div className='containerResultadosViaje'>
  
          <div className="containerResultadosViajeDiv">
  
          <ViajesBaratos alojamientos={viaje.airbnb} vuelos={viaje.vuelos}/>
          {viaje.vuelos=="No hay vuelos disponibles" ? <p>No hay vuelos Disponibles </p> : <p>No hay vuelos Disponibles </p>}
          </div>
      </div>
    )
  }

  
}

export default ResultadosViaje