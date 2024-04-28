import React from 'react'
import '../../assets/styles/Anuncio.css'

function Anuncio({tipo}) {
  return (
    <div className='containerAnuncio'>
        {tipo=='horizontal' && <div className='anuncioHorizontal'></div>}
        {tipo=='vertical' && <div className='anuncioVertical'></div>}
        {tipo=='cuadrado' && <div className='anuncioCuadradoContainer'>
            <div className='anuncioCuadrado'></div>
            <div className='anuncioCuadrado'></div>
            <div className='anuncioCuadrado'></div>
          </div>}
    </div>
  )
}

export default Anuncio