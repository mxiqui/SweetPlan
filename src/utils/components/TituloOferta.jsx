import React from 'react'
import '../../assets/styles/TituloOferta.css'

function TituloOferta({oferta, texto}) {

  return (
    <div>
        <h3 className='esloganDescripcion'>Disfruta de un {texto} {oferta.getDestino()}</h3>
            <div className='containerDescripcionPrecio'>
                <h5 className='precioDescripcion'>¡Desde <span>{oferta.getPrecio()}€!</span> con vuelos y alojamiento incluidos</h5>
            </div>
    </div>
  )
}

export default TituloOferta