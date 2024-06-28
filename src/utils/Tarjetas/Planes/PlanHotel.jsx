import React, { useState, useEffect } from 'react';
import '../../../assets/styles/PlanHotel.css';

function PlanHotel({ alojamiento, almacenado, oferta }) {
    const [puntuacion, setPuntuacion] = useState();

    console.log(oferta)


    useEffect(() => {
        const puntuation = alojamiento.puntuacion*2;
        if (puntuation < 5) {
            setPuntuacion("mala");
        } else if (puntuation >= 5 && puntuation < 7.5) {
            setPuntuacion("regular");
        } else {
            setPuntuacion("buena");
        }
    }, [alojamiento]); // Dependencia alojamiento para actualizar cuando cambie
    

    const open = () => {
        window.open(alojamiento.url, "_blank");
        // if (almacenado == null || almacenado == undefined || almacenado == false) {
        //     window.location.href = `/alojamiento/${alojamiento.id}`;
        // } else {
        //     // Create a form and submit it
           
        //     if(Array.isArray(alojamiento.galeria) || alojamiento.galeria.split(";").lenght>0){
        //         const form = document.createElement('form');
        //     form.method = 'GET';
        //     form.action = `/alojamientoPlaneado/${alojamiento.id}`;

        //     const input = document.createElement('input');
        //     input.type = 'hidden';
        //     input.name = 'data';
        //     input.value = JSON.stringify({
        //         id: alojamiento.id,
        //         name: alojamiento.nombre,
        //         puntuacion: alojamiento.puntuacion,
        //         direccion: alojamiento.direccion,
        //         precio: alojamiento.precio,
        //         // totalPrice: alojamiento.getTotalPrice(),
        //         galeria:alojamiento.galeria,
        //         link:alojamiento.url 
        //     });

        //     form.appendChild(input);
        //     document.body.appendChild(form);
        //     form.submit();
        //     }else{
        //         window.open(alojamiento.url, '_blank');

        //     }

            
        // }
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
            {/* <div className="containerPlanHotelImagen"></div> */}
            <img className='containerPlanHotelImagen' src={alojamiento.galeria.split(";")[0]} alt="" />
            <div className="containerPlanHotelDatos">
                <div className='nombre'>
                    <h4>{alojamiento.nombre}</h4>
                    <span>{renderStars(alojamiento.estrellas)}</span>
                </div>
                <div className='containerPlanHotelDatosValoracion'>
                    <span className={`nota ${puntuacion}`}>{alojamiento.puntuacion}</span>
                    <p className='nota2'>{alojamiento.valoracion}</p>
                </div>
                <div className='containerPlanHotelDireccion'>
                    <h5 className='direccion'>{alojamiento.direccion}</h5>
                    <h5 className='direccion'>{oferta.noches} noches</h5>
                    <h5 className='containerPlanHotelDireccion-h5'>{alojamiento.precio.toFixed(2)}€ / noche</h5>
                </div>
                <div className='containerPlanHotelTotalMovil'>
                    <h4>{(parseFloat(oferta.noches) * parseFloat(alojamiento.precio)).toFixed(2)} € <span>/ Total</span></h4>
                    <button className='btnVisitar2'>Ver</button>
                </div>
            </div>
            <div className='containerPlanHotelTotal'>
                <h4>{(parseFloat(oferta.noches) * parseFloat(alojamiento.precio)).toFixed(2)} €</h4>
                <button className='btnVisitar2'>Ver</button>
            </div>
        </div>
    );
}

export default PlanHotel;
