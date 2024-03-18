import React from 'react'
import Formulario from './Formulario'

//Importamos el css
import '../../assets/styles/Buscador.css'

function Buscador() {
  return (
    <div className='containerBuscador'>
        <h2>Planifica tu viaje de manera divertida</h2>
        <Formulario/>
    </div>
  )
}

export default Buscador