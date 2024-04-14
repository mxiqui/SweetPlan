import React from 'react'
import '../../assets/styles/TituloOferta.css'

function TituloOferta({oferta, texto}) {

  return (
    <div>
        <h3 className='esloganDescripcion'>Disfruta de un {texto} {oferta.getDestino()}</h3>
            <div className='containerDescripcionPrecio'>
                <h3 className='precioDescripcion'>¡Desde {oferta.getPrecio()}€!</h3>
                <p className='vuelosDescripcion'>Vuelos y alojamiento</p>
            </div>
    </div>
  )
}

export default TituloOferta