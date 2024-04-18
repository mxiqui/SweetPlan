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
}

export default ResultadosViaje