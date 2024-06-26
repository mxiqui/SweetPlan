import React from 'react'
import '../../../assets/styles/TarjetaTipo.css'

function TarjetaTipo({tipo}) {
  return (
    <div className='containerTarjetaTipo'>
        {tipo=='ofertaEspecial' && <h2 className='textoOfertaEspecial'>OFERTA ESPECIAL 🔥</h2>}
        {tipo=='escapada' && <h2 className='textoEscapada'>Escapada 🌴</h2>}
        {tipo=='romantico' && <h2 className='textoEscapada'>Romantico ❤️</h2>}
        {tipo=='plan' && <h2 className='textoOfertaEspecial'>Mejor Plan 🌴</h2>}
    </div>
  )
}

export default TarjetaTipo