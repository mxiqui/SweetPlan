import React, { useContext } from 'react'

//Logo de la plataforma
import logo from '../../images/icon/logo2SinFondo.png'
//Icono del menu
import iconoMenu from '../../images/menu.png'
//Importamos el css
import '../../assets/styles/Cabecera.css'
//Importamos el contexto
import { MenuContext } from './Header'

function Cabecera() {

    const {dispatch}=useContext(MenuContext)
    const abrirMenu=()=>{
        dispatch({type:'ABRIR_MENU'})
    }

    const init=()=>{
      window.location.href="/"
    }

  return (
    <div className='containerCabecera'>
        <h2 translate='no'>
            <img onClick={init} src={logo} alt="" />
        </h2>
        <img onClick={abrirMenu} src={iconoMenu} alt="" />
    </div>
  )
}

export default Cabecera