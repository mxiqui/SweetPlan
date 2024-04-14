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
                    <p className='destinoEscapada'>{oferta.getDestino()}</p>
                    <p className='precioEscapada'>{oferta.getPrecio()} € <span>/ 2 personas</span></p>
                    <p className='fechaEscapada'>{oferta.getFechas()}</p>
                    {/* <p className='descripcionEscapada'>{oferta.descripcion}</p> */}
                </div>
        </div>
    )
}

export default Escapada