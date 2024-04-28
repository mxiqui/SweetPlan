import React from 'react'
import '../../../assets/styles/TarjetaTipo.css'

function TarjetaTipo({tipo}) {
  return (
    <div className='containerTarjetaTipo'>
        {tipo=='ofertaEspecial' && <h2 className='textoOfertaEspecial'>OFERTA ESPECIAL 🔥</h2>}
        {tipo=='escapada' && <h2 className='textoEscapada'>Escapada 🌴</h2>}
    </div>
  )
}

export default TarjetaTipo