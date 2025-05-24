import React from 'react'

import '../../../assets/styles/Escapada.css'
import imgUser from '../../../images/icon/user2.png'
import imgSol from '../../../images/icon/sol2.png'
import imgLuna from '../../../images/icon/moon.png'
import imgCalendario from '../../../images/icon/icnCalendario.png'

function Escapada({ oferta }) {
    const handleClick = () => {
        window.location.href = `/escapadaFin/${oferta.getId()}`;
    };

    // ✅ Validación y parseo seguro de fechas
    const parseFecha = (fechaRaw) => {
        if (!fechaRaw || typeof fechaRaw !== 'string') return null;
        const limpia = fechaRaw.trim().replace('+00:00', 'Z');
        const fecha = new Date(limpia);
        return isNaN(fecha) ? null : fecha;
    };

    const inicio = parseFecha(oferta._fechaInicio);
    const fin = parseFecha(oferta._fechafin);


    let textoFecha = 'Fechas no disponibles';
    let dias = 0;
    let noches = 0;

    if (inicio && fin) {
        const opcionesMes = { month: 'short' };
        if (inicio.getMonth() === fin.getMonth()) {
            textoFecha = `${inicio.getDate()} ${inicio.toLocaleDateString('es-ES', opcionesMes)} – ${fin.getDate()} ${inicio.toLocaleDateString('es-ES', opcionesMes)}`;
        } else {
            textoFecha = `${inicio.getDate()} ${inicio.toLocaleDateString('es-ES', opcionesMes)} – ${fin.getDate()} ${fin.toLocaleDateString('es-ES', opcionesMes)} ${inicio.getFullYear()}`;
        }

        const msPorDia = 1000 * 60 * 60 * 24;
        const diffMs = fin - inicio;
        dias = Math.round(diffMs / msPorDia);
        noches = dias > 0 ? dias - 1 : 0;
    }


    return (
        <div className='containerEscapada' onClick={handleClick}>
            <img className='imgFondoOferta' src={oferta.getImagen()} alt={oferta.getDestino()} />
            <div className='overlayEscapada'>
                <div className="containerEscapadaOrigen">
                    <p>{oferta.getOrigen()}</p>
                    <p> <img src={imgUser} alt="" /> {oferta.getPersonas()} </p>
                </div>
                <div className="containerDestinoEscapadaV2">
                    <p className='destinoEscapadaV2'>{oferta.getDestino()}</p>
                    <p className='precioEscapadaV2'>desde <span>{oferta.getPrecioPersona().toFixed(0)} € </span></p>
                    <RegimenEscapada oferta={oferta} />
                </div>
                <div className="containerFechaEscapadaV2">
                    <p className='fechaEscapada'> {textoFecha} <img width={"23px"} className='imgCalendarioOferta' src={imgCalendario} alt="" /></p>
                    <div className='containerNochesEscapada'>
                        <p className='nochesEscapada'>{dias + 1} <img src={imgSol} alt="" /> {noches + 1} <img src={imgLuna} alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}


function RegimenEscapada({ oferta }) {
  const regimen = oferta?.getAlojamiento()?.regimen;

  if (!regimen || regimen === 'soloAlojamiento') {
    // No renderiza nada
    return <></>;
  }

  // Renderiza el régimen si tiene valor válido
  return <p className="regimenEscapadaV2">{regimen}</p>;
}



export default Escapada;
