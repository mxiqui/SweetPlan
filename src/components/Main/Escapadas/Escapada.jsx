import React from 'react'

import '../../../assets/styles/Escapada.css'
import imgUser from '../../../images/icon/user2.png'

function Escapada({oferta}) {
    
    const handleClick = () => {
            window.location.href = `/escapadaFin/${oferta.getId()}`;
    };
    
    return (
        <div className='containerEscapada' onClick={handleClick}>
            <img src={oferta.getImagen()} alt={oferta.getDestino()} />
                <div className='overlayEscapada'>
                    <div className="containerEscapadaOrigen">
                        <p>{oferta.getOrigen()}</p>
                        <p> <img src={imgUser} alt="" /> {oferta.getPersonas()} </p>
                    </div>
                    <div className="containerDestinoEscapada">
                        <p className='destinoEscapada'>{oferta.getDestino()}</p>
                        <p className='fechaEscapada'>{oferta.getFechas()}</p>
                    </div>
                    <div className="containerPrecioEscapada">
                        <p className='precioEscapada'>Precio desde <span>{oferta.getPrecioPersona().toFixed(2)} € p.p</span></p>
                    </div>
                    {/* <p className='descripcionEscapada'>{oferta.descripcion}</p> */}
                    <button>Visitar</button>
                </div>
        </div>
    )
}

export default Escapada