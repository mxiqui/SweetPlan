import React, { useState, useEffect } from 'react';
import imgAvion from '../../images/icon/avion.png';
import '../../assets/styles/AvionVuelo.css';

function AvionVuelo({ escala = 0, duracion = 800, puntosPorTramo = 10 }) {
    const [posicion, setPosicion] = useState(0);

    const totalTramos = escala === 0 ? 1 : escala + 1;
    const totalPuntos = totalTramos * puntosPorTramo;

    useEffect(() => {
        const intervalo = duracion / puntosPorTramo;
        const timer = setInterval(() => {
            setPosicion((prev) => (prev < totalPuntos ? prev + 1 : 0));
        }, intervalo);

        return () => clearInterval(timer);
    }, [duracion, puntosPorTramo, totalPuntos]);

    const tramos = [];
    for (let tramo = 0; tramo < totalTramos; tramo++) {
        const start = tramo * puntosPorTramo;
        const end = (tramo + 1) * puntosPorTramo;
        const puntosAntes = '.'.repeat(Math.max(0, Math.min(posicion - start, puntosPorTramo)));
        const puntosDespues = '.'.repeat(Math.max(0, end - posicion));

        tramos.push(
            <React.Fragment key={tramo}>
                <span className="puntos">{puntosAntes}</span>
                <img src={imgAvion} alt="avión" className="avion-icono" />
                <span className="puntos">{puntosDespues}</span>
                {tramo < escala && <span className="punto-rojo"></span>}
            </React.Fragment>
        );
    }

    return <div className="vuelo-contenedor">{tramos}</div>;
}

export default AvionVuelo;
