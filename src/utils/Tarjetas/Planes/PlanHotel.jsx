import React, { useState, useEffect } from 'react';
import '../../../assets/styles/PlanHotel.css';

function PlanHotel({ alojamiento, almacenado }) {
    const [puntuacion, setPuntuacion] = useState();


    useEffect(() => {
        const puntuation = alojamiento.getPuntuation()*2;
        if (puntuation < 5) {
            setPuntuacion("mala");
        } else if (puntuation >= 5 && puntuation < 7.5) {
            setPuntuacion("regular");
        } else {
            setPuntuacion("buena");
        }
    }, [alojamiento]); // Dependencia alojamiento para actualizar cuando cambie
    

    const open = () => {
        if (almacenado == null || almacenado == undefined || almacenado == false) {
            window.location.href = `/alojamiento/${alojamiento.getId()}`;
        } else {
            // Create a form and submit it
           
            if(Array.isArray(alojamiento._galeria) || alojamiento._galeria.split(";").lenght>0){
                const form = document.createElement('form');
            form.method = 'GET';
            form.action = `/alojamientoPlaneado/${alojamiento.getId()}`;

            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'data';
            input.value = JSON.stringify({
                id: alojamiento.getId(),
                name: alojamiento.getName(),
                puntuacion: alojamiento.getPuntuation(),
                direccion: alojamiento.getAddress(),
                precio: alojamiento.getPrice(),
                noches: alojamiento.getNight(),
                totalPrice: alojamiento.getTotalPrice(),
                galeria:alojamiento._galeria,
                link:alojamiento.getUrl() 
            });

            form.appendChild(input);
            document.body.appendChild(form);
            form.submit();
            }else{
                window.open(alojamiento._url, '_blank');

            }

            
        }
    };

   if(alojamiento){
    console.log(alojamiento)
   }


    return (
        <div className='containerPlanHotel tarjetaItinerario' onClick={open}>
            {/* <div className="containerPlanHotelImagen"></div> */}
            <img className='containerPlanHotelImagen' src={alojamiento._galeria[0]} alt="" />
            <div className="containerPlanHotelDatos">
                <div className='nombre'>
                    <h4>{alojamiento.getName()}</h4>
                    <span>★★★</span>
                </div>
                <div className='containerPlanHotelDatosValoracion'>
                    <span className={`nota ${puntuacion}`}>{alojamiento.getPuntuation()}</span>
                    <p className='nota2'>{(alojamiento.getValoration())}</p>
                </div>
                <div className='containerPlanHotelDireccion'>
                    <h5 className='direccion'>{alojamiento.getAddress()}</h5>
                    <h5 className='direccion'>{alojamiento.getNight()} noches</h5>
                    <h5 className='containerPlanHotelDireccion-h5'>{alojamiento.getPrice().toFixed(2)}€ / noche</h5>
                </div>
                <div className='containerPlanHotelTotalMovil'>
                    <h4>{alojamiento.getTotalPrice()} € <span>/ Total</span></h4>
                    <button className='btnVisitar2'>Ver</button>
                </div>
            </div>
            <div className='containerPlanHotelTotal'>
                <h4>{alojamiento.getTotalPrice().toFixed(2)} €</h4>
                <button className='btnVisitar2'>Ver</button>
            </div>
        </div>
    );
}

export default PlanHotel;
