import React from 'react'

//importamos imagen de prueba
import imagenPrueba from '../../images/avion.png'
import iconoPalmera from '../../images/icon/palmera.png'
import iconoMaletas from '../../images/icon/maletas.png'
import iconoMundo from '../../images/icon/destino.png'

import '../../assets/styles/OpcionesRapidas.css'

function OpcionesRapidas() {
  return (
    <div className='containerOpcionesRapidas'>
        <div className="containerOpcionRapidaEscapadas">
            <img src={iconoPalmera} alt="" />
            <h3>Escapadas Fin de Semana</h3>
        </div>

        <div className="containerOpcionRapidaExperiencias">
        <img src={iconoMaletas} alt="" />
            <h3>Experiencias unicas</h3>
        </div>

        <div className="containerOpcionRapidaCualquierDestino">
            <img src={iconoMundo} alt="" />
            <h3>Cualquier destino</h3>
        </div>
    </div>
  )
}

export default OpcionesRapidas