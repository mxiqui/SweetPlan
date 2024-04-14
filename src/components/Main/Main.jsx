import React, { createContext, useEffect, useReducer } from 'react'
import OpcionesRapidas from './OpcionesRapidas'
import '../../assets/styles/Main.css'
import CarreteMasVisitado from './CarreteMasVisitado'
import EscapadasFinDeSemana from './Escapadas/EscapadasFinDeSemana'
import OfertasRomanticas from './Romantico/OfertasRomanticas'

export const opcionesContext= createContext()
export const opcionesReducer= (state, action)=>{
  switch (action.type) {
    case 'ESCAPADAS':
      return {
        ...state,
        default: false,
        escapadas: true,
        romantico: false
      };
    case 'ROMANTICO':
      return {
        ...state,
        default: false,
        escapadas: false,
        romantico: true
      };
    case 'default':
      return {
        ...state,
        default: true,
        escapadas: false,
        romantico: false
      };
    default:
      return state;
  }
}



function Main() {

  useEffect(() => {
    dispatch({ type: 'DEFAULT' });
  }, []);

  const [opcionSeleccionada, dispatch]=useReducer(opcionesReducer, {
    default:true,
    escapadas:false,
    romantico:false
  });


  return (
    <opcionesContext.Provider value={{opcionSeleccionada, dispatch}}>
      <main className='mainSuperior'>
      <OpcionesRapidas/>
      <section>
        {opcionSeleccionada.escapadas && <EscapadasFinDeSemana />}
        {opcionSeleccionada.default && <CarreteMasVisitado />}
        {opcionSeleccionada.romantico && <OfertasRomanticas />}
      </section>
    </main>
    </opcionesContext.Provider>
  )
}

export default Main