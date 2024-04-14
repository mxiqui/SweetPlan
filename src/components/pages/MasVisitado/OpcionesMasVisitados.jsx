import React, { createContext, useEffect, useReducer } from 'react'
import OpcionMasVisitada from './OpcionMasVisitada'
import '../../../assets/styles/OpcionesMasVisitados.css'
import SeleccionarOrigen from './SeleccionarOrigen'
import SeleccionarFechas from './SeleccionarFechas'
import Detalles from './Detalles'


export const opcionesContext= createContext()
export const datosContext = createContext();

export const opcionesReducer= (state, action)=>{
  switch (action.type) {
    case 'ABRIR_ORIGEN':
      return {
        ...state,
        default: false,
        origen: true,
        fechas: false,
        detalles:false
      };
    case 'ABRIR_FECHAS':
      return {
        ...state,
        default: false,
        origen: false,
        fechas: true,
        detalles:false
      };

      case 'ABRIR_DETALLES':
        return {
          ...state,
          default: false,
          origen: false,
          fechas: false,
          detalles:true
        };
    case 'default':
      return {
        ...state,
        default: true,
        origen: false,
        fechas: false,
        detalles:false
      };
    default:
      return state;
  }
}


export const datosReducer= (state, action)=>{
    switch (action.type) {
        case 'RELLENAR_DESTINO':
            return {
                ...state,
                destino: action.payload
            };
        default:
            return state;
    }
  }


function OpcionesMasVisitados({opciones}) {

    const [opcionSeleccionada, dispatch]=useReducer(opcionesReducer, {
        default:true,
        origen:false,
        fechas:false
    });

    const [datos, dispatchDatos]=useReducer(datosReducer, {
      destino: null
    });

    return (
        <opcionesContext.Provider value={{opcionSeleccionada, dispatch}}>
            <datosContext.Provider value={{datos, dispatchDatos}}>
                <div className='containerMasVisitados'>
                    
                    <h2>Destinos más populares</h2>
                    <p>Seleccione la opción que mas te guste</p>

                    <div className="containerOpcionesMasVisitados" >
                        {opciones.map((opcion)=>(
                            <OpcionMasVisitada key={opcion.id} opcion={opcion} />
                        ))}
                    </div>
                        
                    {opcionSeleccionada.origen && <SeleccionarOrigen />}
                    {opcionSeleccionada.detalles && <Detalles/>}
                    {opcionSeleccionada.fechas && <SeleccionarFechas />}
                </div>
            </datosContext.Provider>
        </opcionesContext.Provider>

    )
}

export default OpcionesMasVisitados