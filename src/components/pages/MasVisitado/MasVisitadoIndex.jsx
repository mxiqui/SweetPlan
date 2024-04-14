import React, { createContext, useReducer, useState } from 'react'
import Header from '../../Header/Header'
import OpcionesMasVisitados from './OpcionesMasVisitados'
import Footer from '../../Footer/Footer'
import { MasVisitadoService } from '../../../services/MasVisitadoService'
import Espera from '../../../utils/PantallaEspera/Espera'



export const pantallaEsperaContext = createContext();

export const pantallaEsperaReducer= (state, action)=>{
    switch (action.type) {
      case 'ABRIR':
        return true;
      case 'CERRAR':
        return false;
      case 'default':
        return false
      default:
        return state;
    }
  }


function MasVisitadoIndex() {

    var masVisitadoService= new MasVisitadoService();
    const [opciones, setOpciones]=useState(masVisitadoService.findAll());
    const [abrirPantallaEspera, dispatchPantalla]=useReducer(pantallaEsperaReducer, false);


    return (
        <div>
            <Header/>
            <pantallaEsperaContext.Provider value={{abrirPantallaEspera, dispatchPantalla}}>
                <main>
                    {abrirPantallaEspera && <Espera destino={"Mali"}/> || <OpcionesMasVisitados opciones={opciones}/>}
                </main>
            </pantallaEsperaContext.Provider>
            <Footer/>
        </div>
    )
}

export default MasVisitadoIndex