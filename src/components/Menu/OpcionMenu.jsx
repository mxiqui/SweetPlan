import React from 'react'
import '../../assets/styles/OpcionMenu.css'

function OpcionMenu({texto, enlace, cerrarMenu}) {
  return (
    <div className='opcionMenu'>
        <a onClick={cerrarMenu} href={enlace}>{texto}</a>
    </div>
  )
}

export default OpcionMenu