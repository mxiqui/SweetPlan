import React, { createContext, useReducer } from 'react'
import OpcionMasVisitada from './OpcionMasVisitada'
import '../../../assets/styles/OpcionesMasVisitados.css'
import SeleccionarOrigen from './SeleccionarOrigen'
import SeleccionarFechas from './SeleccionarFechas'

export const opcionesContext= createContext()
export const datosContext = createContext();

export const opcionesReducer= (state, action)=>{
  switch (action.type) {
    case 'ABRIR_ORIGEN':
      return {
        ...state,
        default: false,
        origen: true,
        fechas: false
      };
    case 'ABRIR_FECHAS':
      return {
        ...state,
        default: false,
        origen: false,
        fechas: true
      };
    case 'default':
      return {
        ...state,
        default: true,
        origen: false,
        fechas: false
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
                destino: action.payload,
                origen: null,
                fechas: null
            };
        case 'RELLENAR_ORIGEN':
            return {
                ...state,
                origen: action.payload,
                fechas: null
            };
        case 'RELLENAR_FECHAS':
            return {
                ...state,
                fechas: action.payload
            };
        case 'default':
            return {
                ...state,
                destino: null,
                origen: null,
                fechas: null
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
        destino: null,
        origen: null,
        fechas: null
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
                    {opcionSeleccionada.fechas && <SeleccionarFechas />}
                </div>
            </datosContext.Provider>
        </opcionesContext.Provider>

    )
}

export default OpcionesMasVisitados