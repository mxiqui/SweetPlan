import React from 'react'

import '../../../assets/styles/Escapada.css'

function Escapada({oferta}) {
  return (
    <div className='containerEscapada'>
        <img src={oferta.imagen} alt={oferta.destino} />
			<div className='overlayEscapada'>
				<p className='destinoEscapada'>{oferta.destino}</p>
				<p className='precioEscapada'>{oferta.precio} €</p>
				<p className='fechaEscapada'>{oferta.fechas}</p>
			</div>
    </div>
  )
}

export default Escapada