import React from 'react'
import '../../../assets/styles/TituloOferta.css'

function TituloOferta({oferta, texto}) {

  return (
    <div className='containerTituloOferta'>
        <h3 className='esloganDescripcion'>Disfruta de un {texto} {oferta.destino}</h3>
            <div className='containerDescripcionPrecio'>
              <h5 className='precioDescripcion'>
                ¡Desde <span>
                  {(oferta.precioTotal).toFixed(0)}€ por persona!
                </span> con vuelos y alojamiento incluidos ({oferta.personas} Personas)
              </h5>
            </div>
    </div>
  )
}

export default TituloOferta