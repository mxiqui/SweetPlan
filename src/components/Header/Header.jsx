import React, { createContext, useContext, useReducer, useState } from 'react'
import Cabecera from './Cabecera'
import Buscador from './Buscador'

//Importar el css
import '../../assets/styles/Header.css'
import Menu from '../Menu/Menu'
export const MenuContext= createContext();

const menuReducer = (state, action) => {
    switch (action.type) {
        case 'ABRIR_MENU':
            return true;
        case 'CERRAR_MENU':
            return false;
        default:
            return state;
  }
};

function Header() {

    const [abrirMenu, dispatch]=useReducer(menuReducer, false);

    return (
    <header>
        <div className="containerHeader">
        <MenuContext.Provider value={{abrirMenu, dispatch}}>
            <Cabecera/>
            <Buscador/>
            {abrirMenu && <Menu />}
        </MenuContext.Provider>  
        </div>
    </header>
  )
}

export default Header