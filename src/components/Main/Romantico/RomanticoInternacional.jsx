import React from 'react';
import '../../../assets/styles/RomanticoInternacional.css';
import imgAvion from '../../../images/icon/avion2.png';
import imgUser from '../../../images/icon/user2.png';

import imgSol from '../../../images/icon/sol2.png'
import imgLuna from '../../../images/icon/moon.png'


function RomanticoInternacional({oferta}) {
    
    const handleClick = () => {
            window.location.href = `/escapadaFin/${oferta.getId()}`;
    };

    // return (
    //     <div className="card">
    //         <img className="card-image" src={oferta.getImagen()} alt={oferta.getDestino()} />
    //         <div className="card-content">
    //             <h3 className="card-title">{oferta.getDestino()}</h3>
    //             <p className="card-subtitle">{oferta.getOrigen()}</p>
    //             <p className="card-price">Desde <strong>{oferta.getPrecioPersona().toFixed(2)} € p.p</strong></p>
    //         </div>
    //     </div>
    // );
    
    
    // return (
    //     <div className='containerEscapada' onClick={handleClick}>
    //         <img src={oferta.getImagen()} alt={oferta.getDestino()} />
    //             <div className='overlayEscapada'>
    //                 <div className="containerEscapadaOrigen">
    //                     <p>{oferta.getOrigen()}</p>
    //                     <p> <img src={imgUser} alt="" /> {oferta.getPersonas()} </p>
    //                 </div>
    //                 <div className="containerDestinoEscapada">
    //                     <p className='destinoEscapada'>{oferta.getDestino()}</p>
    //                     <p className='fechaEscapada'>{oferta.getFechas()}</p>
    //                 </div>
    //                 <div className="containerPrecioEscapada">
    //                     <p className='precioEscapada'>Precio desde <span>{oferta.getPrecioPersona().toFixed(2)} € p.p</span></p>
    //                 </div>
    //                 {/* <p className='descripcionEscapada'>{oferta.descripcion}</p> */}
    //                 <button>Visitar</button>
    //             </div>
    //     </div>
    // )

    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    const inicio = new Date('2025-07-09');
    const fin = new Date('2025-07-12');

    let textoFecha;
const opcionesMes = { month: 'short' };

if (inicio.getMonth() === fin.getMonth()) {
  textoFecha = `${inicio.getDate()}–${fin.getDate()} ${inicio.toLocaleDateString('es-ES', opcionesMes)} ${inicio.getFullYear()}`;
} else {
  textoFecha = `${inicio.getDate()} ${inicio.toLocaleDateString('es-ES', opcionesMes)} – ${fin.getDate()} ${fin.toLocaleDateString('es-ES', opcionesMes)} ${inicio.getFullYear()}`;
}

    // Cálculo de días y noches
    const msPorDia = 1000 * 60 * 60 * 24;
    const diffMs = fin - inicio;
    const dias = Math.round(diffMs / msPorDia);
    const noches = dias > 0 ? dias - 1 : 0;


    return (
        <div className='containerEscapada' onClick={handleClick}>
            <img src={oferta.getImagen()} alt={oferta.getDestino()} />
                <div className='overlayEscapada'>
                    <div className="containerEscapadaOrigen">
                        <p>{oferta.getOrigen()}</p>
                        <p> <img src={imgUser} alt="" /> {oferta.getPersonas()} </p>
                    </div>
                    <div className="containerDestinoEscapadaV2">
                        <p className='destinoEscapadaV2'>{oferta.getDestino()}</p>
                        <p className='precioEscapadaV2'>desde <span>{oferta.getPrecioPersona().toFixed(2)} € </span></p>
                    </div>
                    <div className="containerFechaEscapadaV2">
                        <p className='fechaEscapada'>{textoFecha}</p>
                        <p className='nochesEscapada'>{dias+1} <img src={imgSol} alt="" /> {noches+1} <img src={imgLuna} alt="" /></p>
                        </div>
                </div>
        </div>
    )
}


export default RomanticoInternacional;
