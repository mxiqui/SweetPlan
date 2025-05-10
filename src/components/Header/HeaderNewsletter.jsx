import React, { createContext, useContext, useReducer, useState } from 'react'
import Cabecera from './Cabecera'
import Buscador from './Buscador'

//Importar el css
import '../../assets/styles/Header.css'
import Menu from '../Menu/Menu'
import Calendar from '../../utils/calendario/Calendar'
import { ScrollContext } from '../pages/Inicio'
import CalendarioDoble from '../../utils/calendario/CalendarioDoble'
import Aviso from '../../utils/components/Aviso'
import CabeceraNewsletter from './CabeceraNewsletter'
import FormularioNewsletter from '../pages/NewsLetter/FormularioNewsletter'

export const MenuContext= createContext();
export const CalendarioContext= createContext();
export const AvisoContext= createContext();




function HeaderNewsletter() {

    const menuReducer = (state, action) => {
        switch (action.type) {
            case 'ABRIR_MENU':
                // dispatchScroll({type:"DISABLED"})
                document.getElementById("body").style.overflow = "hidden";

                return true;
            case 'CERRAR_MENU':
                // dispatchScroll({type:"ENABLED"})
                document.getElementById("body").style.overflow = "auto";
                return false;
            default:
                return state;
      }
    };

    const avisoReducer = (state, action) => {
        switch (action.type) {
            case 'ABRIR_AVISO':
                return true;
            case 'CERRAR_AVISO':
                return false;
            default:
                return state;
      }
    };
    
    const calendarioReducer = (state, action) => {
        switch (action.type) {
            case 'ABRIR_CALENDARIO':
                // dispatchScroll({type:"DISABLED"})
                document.getElementById("body").style.overflow = "hidden";
                return true;
            case 'CERRAR_CALENDARIO':
                // dispatchScroll({type:"ENABLED"})
                document.getElementById("body").style.overflow = "auto";
                return false;
            default:
                return state;
      }
    };

    const [abrirMenu, dispatch]=useReducer(menuReducer, false);
    const [abrirAviso, dispatchAviso]=useReducer(avisoReducer, false);
    

    return (
    <header className='headerNewsLetter'>
        <div className="containerHeader">
        <MenuContext.Provider value={{abrirMenu, dispatch}}>
            <CabeceraNewsletter/>
            <FormularioNewsletter/>
                    {abrirMenu && <Menu />}
        </MenuContext.Provider>  
        </div>
    </header>
  )
}

export default HeaderNewsletter