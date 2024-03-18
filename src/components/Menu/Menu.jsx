import React, { useContext, useState } from 'react'

//Importamos la imagen de la x
import iconoCerrar from '../../images/cerrar.png'
//Importamos las opciones de menu
import OpcionMenu from './OpcionMenu'
//importamos el css
import '../../assets/styles/Menu.css'
//Importar el contexto
import { MenuContext } from '../Header/Header'


function Menu() {

    //Lista de las opciones del menu
    const [opciones,setOpciones]=useState([
        {texto:"Escapadas vacacionales", enlace:"#"},
        {texto:"Escapadas fin de semana", enlace:"#"},
        {texto:"Viajes Nacionales", enlace:"#"},
        {texto:"Viajes Internacionales", enlace:"#"},
        {texto:"Ofertas especiales", enlace:"#containerContenedorMainInferior"},
        {texto:"Experiencias unicas", enlace:"#"},
        {texto:"Contacto", enlace:"#"},
        {texto:"Preguntas Frecuentes (FAQ)", enlace:"#"},
        {texto:"Sobre Nosotros", enlace:"#"}
    ])

    //importamos el dispatch para manejar la funcion
    const {dispatch}=useContext(MenuContext)
    const cerrarMenu=()=>{
        dispatch({type:'CERRAR_MENU'})
    }

  return (
    <nav className='menu'>
        <div className="containerMenu">
        <div className="cabeceraMenu">
            <h3>Menu</h3>
            <img onClick={cerrarMenu} src={iconoCerrar} alt="" />
        </div>
        <div className="opcionesMenu">
          {opciones.map((opcion, index) => (
            <OpcionMenu cerrarMenu={cerrarMenu} key={index} texto={opcion.texto} enlace={opcion.enlace} />
          ))}
        </div>
        </div>
    </nav>
  )
}

export default Menu