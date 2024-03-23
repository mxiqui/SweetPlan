import React, { useContext } from 'react'

//importamos imagen de prueba
import imagenPrueba from '../../images/avion.png'
import iconoPalmera from '../../images/icon/palmera.png'
import iconoMaletas from '../../images/icon/maletas.png'
import iconoMundo from '../../images/icon/destino.png'

import '../../assets/styles/OpcionesRapidas.css'
import { opcionesContext } from './Main'


function OpcionesRapidas() {

  const {dispatch}=useContext(opcionesContext);
  const ABRIR_ESCAPADAS=()=>{
    dispatch({ type: 'ESCAPADAS' });
  }
  const ABRIR_EXPERIENCIAS=()=>{
    dispatch({ type: 'EXPERIENCIAS_UNICAS' });
  }
  const ABRIR_CUALQUIER=()=>{
    dispatch({ type: 'default' });
  }

  return (
    <div className='containerOpcionesRapidas'>
        <div className="containerOpcionRapidaEscapadas" onClick={ABRIR_ESCAPADAS}>
            <img src={iconoPalmera} alt="" />
            <h3>Escapadas Fin de Semana</h3>
        </div>

        <div className="containerOpcionRapidaExperiencias" onClick={ABRIR_EXPERIENCIAS}>
        <img src={iconoMaletas} alt="" />
            <h3>Experiencias unicas</h3>
        </div>

        <div className="containerOpcionRapidaCualquierDestino" onClick={ABRIR_CUALQUIER}>
            <img src={iconoMundo} alt="" />
            <h3>Más populares</h3>
        </div>
    </div>
  )
}

export default OpcionesRapidas