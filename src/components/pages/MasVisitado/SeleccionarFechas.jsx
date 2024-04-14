import React, { createContext, useContext, useReducer } from 'react'
import '../../../assets/styles/SeleccionarFechas.css'
import CalendarioMesesFlexibles from '../../../utils/calendario/CalendarioMesesFlexibles'

import { pantallaEsperaContext } from './MasVisitadoIndex';
import CalendarMostVisited from '../../../utils/calendario/CalendarMostVisited';

export const fechaContext = createContext();

export const fechaReducer= (state, action)=>{
  switch (action.type) {
    case 'ABRIR_FECHAS_FLEXIBLES':
      return true;
    case 'CERRAR_FECHAS_FLEXIBLES':
      return false;
    case 'default':
      return false
    default:
      return state;
  }
}

function SeleccionarFechas() {

  const [abrirFechaFlexible, dispatch]=useReducer(fechaReducer, false);
  const {dispatchPantalla} = useContext(pantallaEsperaContext);

  const abrirFechasFlexibles=()=>{
    dispatch({type:'ABRIR_FECHAS_FLEXIBLES'})
  }
  const cerrarFechasFlexibles=()=>{
    dispatch({type:'CERRAR_FECHAS_FLEXIBLES'})
  }

  const abrirPantallaEspera=()=>{
    setTimeout(()=>{
      dispatchPantalla({type:'ABRIR'})
    }, 2000)
  }



    return (
        <fechaContext.Provider value={{abrirFechaFlexible, dispatch}}>
        <div className='containerSeleccionarFechas'>
            <div className='containerSeleccionarFechas2'>
                <h2>En que fechas deseas viajar</h2>
                

                {abrirFechaFlexible && 
                (<div className="containerSeleccionarFechasFlexibles">
                    <p onClick={cerrarFechasFlexibles}>Fechas Exactas</p>
                    <CalendarioMesesFlexibles />
                </div>) 
                || 
                (<div className='containerSeleccionarFechasExactas'>
                    <CalendarMostVisited/>
                    <p onClick={abrirFechasFlexibles}>Fechas Flexibles</p>
                </div>)
                }

                <button onClick={abrirPantallaEspera}>Siguiente</button>
                
            </div>
        </div>
        </fechaContext.Provider>

    )
} 

export default SeleccionarFechas