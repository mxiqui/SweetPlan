import React, { useState, useEffect } from 'react';
import '../../../assets/styles/PlanHotel.css';

function PlanHotel({ alojamiento, almacenado, oferta }) {
    const [puntuacion, setPuntuacion] = useState();

    useEffect(() => {
        let puntuation;
        if (almacenado) {
            puntuation = oferta._alojamiento._puntuacion * 2; // Asignación correcta
        } else {
            puntuation = alojamiento.puntuacion * 2; // Asignación correcta
        }

        if (puntuation < 5) {
            setPuntuacion("mala");
        } else if (puntuation >= 5 && puntuation < 7.5) {
            setPuntuacion("regular");
        } else {
            setPuntuacion("buena");
        }
    }, [alojamiento, almacenado, oferta]);

    const open = () => {
        window.open(oferta._alojamiento._url, "_blank");
    };

    const renderStars = (numStars) => {
        let stars = '';
        for (let i = 0; i < numStars; i++) {
            stars += '★';
        }
        return stars;
    };


    
    return (
        <div className='containerPlanHotel tarjetaItinerario' onClick={open}>
            <img className='containerPlanHotelImagen' src={almacenado ? oferta._alojamiento._galeria.substring(1).split(',')[0] : alojamiento.galeria.split(";")[0]} alt="" />
            <div className="containerPlanHotelDatos">
                <div className='nombre'>
                    <h4>{almacenado ? oferta._alojamiento._name : alojamiento.nombre}</h4>
                    <span>{almacenado ? renderStars(oferta._alojamiento._starts) : renderStars(alojamiento.estrellas)}</span>
                </div>
                <div className='containerPlanHotelDatosValoracion'>
                    <span className={`nota ${puntuacion}`}>{almacenado ? oferta._alojamiento._puntuation : alojamiento.puntuacion}</span>
                    <p className='nota2'>{almacenado ? oferta._alojamiento._valoration : alojamiento.valoracion}</p>
                </div>
                <div className='containerPlanHotelDireccion'>
                    <h5 className='direccion'>{almacenado ? oferta._alojamiento._address : alojamiento.direccion}</h5>
                    <h5 className='direccion'>{almacenado ? oferta._alojamiento._night : oferta.noches} noches</h5>
                    <h5 className='containerPlanHotelDireccion-h5'>{almacenado ? (oferta._alojamiento._price / oferta._alojamiento._night).toFixed(2) : alojamiento.precio.toFixed(2)}€ / noche</h5>
                </div>
                <div className='containerPlanHotelTotalMovil'>
                    <h4>{almacenado ? (parseFloat(oferta._alojamiento._night) * parseFloat(oferta._alojamiento._price)).toFixed(2) : (parseFloat(oferta.noches) * parseFloat(alojamiento.precio)).toFixed(2)} € <span>/ Total</span></h4>
                    <button className='btnVisitar2'>Ver</button>
                </div>
            </div>
            <div className='containerPlanHotelTotal'>
                <h4>{almacenado ? (parseFloat(oferta._alojamiento._price)).toFixed(2) : ( parseFloat(alojamiento.precio)).toFixed(2)} €</h4>
                <button className='btnVisitar2'>Ver</button>
            </div>
        </div>
    );
}

export default PlanHotel;
