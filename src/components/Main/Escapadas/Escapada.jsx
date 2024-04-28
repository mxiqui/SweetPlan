import React from 'react'

import '../../../assets/styles/Escapada.css'

function Escapada({oferta}) {
    
    const handleClick = () => {
            window.location.href = `/escapadaFin/${oferta.getId()}`;
    };
    
    return (
        <div className='containerEscapada' onClick={handleClick}>
            <img src={oferta.getImagen()} alt={oferta.getDestino()} />
                <div className='overlayEscapada'>
                    <div className="containerDestinoEscapada">
                        <p className='destinoEscapada'>{oferta.getDestino()}</p>
                        <p className='fechaEscapada'>{oferta.getFechas()}</p>
                    </div>
                    <div className="containerPrecioEscapada">
                        <p className='precioEscapada'>Precio desde <span>{oferta.getPrecio()} € </span></p>
                    </div>
                    {/* <p className='descripcionEscapada'>{oferta.descripcion}</p> */}
                    <button>Visitar</button>
                </div>
        </div>
    )
}

export default Escapada