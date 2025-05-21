import React, { createContext, useEffect, useReducer } from 'react'
import OpcionesRapidas from './OpcionesRapidas'
import '../../assets/styles/Main.css'
import CarreteMasVisitado from './CarreteMasVisitado'
import EscapadasFinDeSemana from './Escapadas/EscapadasFinDeSemana'
import OfertasRomanticas from './Romantico/OfertasRomanticas'
import OfertasPorTags from './Escapadas/OfertasPorTags'

export const opcionesContext= createContext()
export const opcionesReducer= (state, action)=>{
  switch (action.type) {
    case 'ESCAPADAS':
      return {
        ...state,
        default: false,
        escapadas: true,
        romantico: false,
        playa: false
      };
    case 'ROMANTICO':
      return {
        ...state,
        default: false,
        escapadas: false,
        romantico: true,
        playa: false
      };
      
      case 'PLAYAS':
      return {
        ...state,
        default: false,
        escapadas: false,
        romantico: false,
        playa: true
      };
    case 'default':
      return {
        ...state,
        default: false,
        escapadas: false,
        romantico: false,
        playa: false
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
    default:false,
    escapadas:true,
    romantico:false,
    playa: false
  });


  return (
    <opcionesContext.Provider value={{opcionSeleccionada, dispatch}}>
      <main className='mainSuperior'>
      <OpcionesRapidas/>
      <section>
        {opcionSeleccionada.escapadas && <EscapadasFinDeSemana />}
        {opcionSeleccionada.romantico && <OfertasRomanticas />}
        {opcionSeleccionada.playa && <OfertasPorTags/>}
        {opcionSeleccionada.default && <CarreteMasVisitado />}
      </section>
    </main>
    </opcionesContext.Provider>
  )
}

export default Main