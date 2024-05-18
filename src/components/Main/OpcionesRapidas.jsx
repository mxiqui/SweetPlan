import React, { useContext } from 'react'


import iconoPalmera from '../../images/icon/palmera.png'
import iconoMaletas from '../../images/icon/maletas.png'
import iconoMundo from '../../images/icon/destino.png'
import iconoCorazon from '../../images/icon/corazon.png'

import '../../assets/styles/OpcionesRapidas.css'
import { opcionesContext } from './Main'


function OpcionesRapidas() {

  const {dispatch}=useContext(opcionesContext);
  const ABRIR_ESCAPADAS=()=>{
    dispatch({ type: 'ESCAPADAS' });
  }
  const ABRIR_EXPERIENCIAS=()=>{
    dispatch({ type: 'ROMANTICO' });
  }
  const ABRIR_CUALQUIER=()=>{
    dispatch({ type: 'default' });
  }

  return (
    <div className='containerOpcionesRapidas'>
        <div className="containerOpcionRapidaEscapadas" onClick={ABRIR_ESCAPADAS}>
            <img src={iconoPalmera} alt="" />
            <h3>Escapadas</h3>
        </div>

        <div className="containerOpcionRapidaExperiencias" onClick={ABRIR_EXPERIENCIAS}>
        <img src={iconoCorazon} alt="" />
            <h3>Románticas</h3>
        </div>

        <div className="containerOpcionRapidaChollos" onClick={ABRIR_ESCAPADAS}>
            <h3>Chollos</h3>
        </div>

        <div className="containerOpcionRapidaCualquierDestino" onClick={ABRIR_CUALQUIER}>
            <img src={iconoMundo} alt="" />
            <h3>Más populares</h3>
        </div>
    </div>
  )
}

export default OpcionesRapidas