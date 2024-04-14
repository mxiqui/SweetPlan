import React, { useState, useEffect } from 'react';
import '../../../assets/styles/PlanHotel.css';

function PlanHotel({ alojamiento }) {
    const [puntuacion, setPuntuacion] = useState();

    useEffect(() => {
        const puntuation = alojamiento.getPuntuation();
        if (puntuation < 5) {
            setPuntuacion("mala");
        } else if (puntuation >= 5 && puntuation < 7.5) {
            setPuntuacion("regular");
        } else {
            setPuntuacion("buena");
        }
    }, [alojamiento]); // Dependencia alojamiento para actualizar cuando cambie

    return (
        <div className='containerPlanHotel tarjetaItinerario'>
            <div className="containerPlanHotelImagen"></div>
            <div className="containerPlanHotelDatos">
                <div className='nombre'>
                    <h4>{alojamiento.getName()}</h4>
                    <span>★★★</span>
                </div>
                <div className='containerPlanHotelDatosValoracion'>
                    <span className={`nota ${puntuacion}`}>{alojamiento.getPuntuation()}</span>
                    <p className='nota2'>{alojamiento.getValoration()}</p>
                </div>
                <div className='containerPlanHotelDireccion'>
                    <h5 className='direccion'>{alojamiento.getAddress()}</h5>
                    <h5 className='direccion'>{alojamiento.getDate()} ({alojamiento.getNight()} noches)</h5>
                    <h5 className='containerPlanHotelDireccion-h5'>{alojamiento.getPrice()}€ / noche</h5>
                </div>
                <div className='containerPlanHotelTotalMovil'>
                    <h4>{alojamiento.getTotalPrice()} € <span>/ Total</span></h4>
                    <button className='btnVisitar2'>Ver</button>
                </div>
            </div>
            <div className='containerPlanHotelTotal'>
                <h4>{alojamiento.getTotalPrice()} €</h4>
                <button className='btnVisitar2'>Ver</button>
            </div>
        </div>
    );
}

export default PlanHotel;
