import React, { createContext, useEffect, useReducer } from 'react'
import OpcionesRapidas from './OpcionesRapidas'
import '../../assets/styles/Main.css'
import CarreteMasVisitado from './CarreteMasVisitado'
import EscapadasFinDeSemana from './Escapadas/EscapadasFinDeSemana'

export const opcionesContext= createContext()
export const opcionesReducer= (state, action)=>{
  switch (action.type) {
    case 'ESCAPADAS':
      return {
        ...state,
        default: false,
        escapadas: true,
        experiencias: false
      };
    case 'EXPERIENCIAS_UNICAS':
      return {
        ...state,
        default: false,
        escapadas: false,
        experiencias: true
      };
    case 'default':
      return {
        ...state,
        default: true,
        escapadas: false,
        experiencias: false
      };
    default:
      return state;
  }
}



function Main() {

  useEffect(() => {
    // Aquí puedes dispatch una acción para establecer `default` como `true`
    dispatch({ type: 'DEFAULT' });
  }, []);

  const [opcionSeleccionada, dispatch]=useReducer(opcionesReducer, {
    default:true,
    escapadas:false,
    experiencias:false
  });


  return (
    <opcionesContext.Provider value={{opcionSeleccionada, dispatch}}>
      <main className='mainSuperior'>
      <OpcionesRapidas/>
      <section>
        {/* <EscapadasFinDeSemana/> */}
        {/* <CarreteMasVisitado/> */}
        {/* <CarreteMasVisitado/> */}
        {/* <div className="otroContenedorDeMientras">dd</div> */}

        {opcionSeleccionada.escapadas && <EscapadasFinDeSemana />}
        {opcionSeleccionada.default && <CarreteMasVisitado />}
      </section>
    </main>
    </opcionesContext.Provider>
  )
}

export default Main