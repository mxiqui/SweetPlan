import React, { useState, useEffect } from 'react';
import '../../../assets/styles/PlanHotel.css';

function PlanHotel({ alojamiento, oferta }) {
    const [puntuacion, setPuntuacion] = useState();

    useEffect(() => {
        const puntuation = parseFloat(oferta.alojamiento.rating) * 2;

        if (puntuation < 5) {
            setPuntuacion("mala");
        } else if (puntuation >= 5 && puntuation < 7.5) {
            setPuntuacion("regular");
        } else {
            setPuntuacion("buena");
        }
    }, [oferta]);

    const open = () => {
        window.open(oferta.alojamiento.url, "_blank");
    };

    const renderStars = (numStars) => {
        let stars = '';
        for (let i = 0; i < numStars; i++) {
            stars += '★';
        }
        return stars;
    };

    const calcularNoches = () => {
        const fechaInicio = new Date(oferta.fechaIda);
        const fechaFin = new Date(oferta.fechaVuelta);
    
        const diferenciaTiempo = fechaFin - fechaInicio; // diferencia en milisegundos
        const noches = diferenciaTiempo / (1000 * 60 * 60 * 24); // convertir a días
    
        return Math.round(noches); // en caso de que haya milisegundos raros
    };

    // Corrección de la galería
    const galeriaRaw = oferta.alojamiento.galeria;
    const galeria = galeriaRaw
        .replace(/^\[|\]$/g, '') // elimina [ y ]
        .split(', ')
        .map(url => url.trim());

    const imagenPrincipal = galeria.length ? galeria[0] : '';

    // Estrellas a mostrar (si no hay estrellas, usamos el rating)
    const estrellas = oferta.alojamiento.estrellas || (oferta.alojamiento.rating);

    // Lógica para asignar "wordRating" basado en el "rating"
    const obtenerWordRating = (rating) => {
        if (rating <= 1.0) return "Mala";
        if (rating <= 2.5) return "Regular";
        if (rating <= 4.0) return "Buena";
        if (rating <= 5.0) return "Buena";
        return "Sin valoraciones";
    };

    return (
        <div
            className="containerPlanHotel tarjetaItinerario"
            onClick={open}
            style={{ height: "160px" }}
        >
            <img className='containerPlanHotelImagen' src={imagenPrincipal} alt="" />
            <div className="containerPlanHotelDatos">
                <div className='nombre'>
                    {/* <span>{renderStars(estrellas)}</span> */}
                </div>
                <div className='containerPlanHotelDatosValoracion'>
                    {oferta.alojamiento.rating != null ? <span className={`nota ${puntuacion}`}>{oferta.alojamiento.rating}</span> : <span>(0)</span>}
                    <p className='nota2'>{oferta.alojamiento.wordRating || obtenerWordRating(parseFloat(oferta.alojamiento.rating))}</p>
                </div>
                <div className='containerPlanHotelDireccion'>
                    <h5 className='direccion'>{oferta.alojamiento.address}</h5>
                    <h4 className='containerPlanHotelDireccionPrecio'>
  {(oferta.alojamiento.price === oferta.alojamiento.totalPrice
    ? (
        oferta.alojamiento.url.includes("airbnb")
          ? parseFloat(oferta.alojamiento.price) / calcularNoches()
          : parseFloat(oferta.alojamiento.price)
      )
    : (
        parseFloat(oferta.alojamiento.totalPrice) / calcularNoches()
      )
  ).toFixed(0)}€ 
  <span
    style={{
      color: "#8c8a8a",
      fontFamily: "inter-light",
      marginBottom: "-20px",
      fontSize: "12px"
    }}
  >
    por noche
  </span>
</h4>

                </div>
                <div className='containerPlanHotelTotalMovil'>
                <h4>
                    {oferta.alojamiento.price === oferta.alojamiento.totalPrice ? (
                        `${(
                        oferta.alojamiento.url.includes("airbnb")
                            ? parseFloat(oferta.alojamiento.price)
                            : calcularNoches() * parseFloat(oferta.alojamiento.price)
                        ).toFixed(0)} € / Total`
                    ) : (
                        `${parseFloat(oferta.alojamiento.totalPrice).toFixed(0)} € / Total`
                    )}
                    </h4>

                    <button className='btnVisitar2'>Ver</button>
                </div>
            </div>
            <div className='containerPlanHotelTotal'>
                <h4>
  {oferta.alojamiento.price === oferta.alojamiento.totalPrice
    ? (
        parseFloat(oferta.alojamiento.price)
      ).toFixed(0)
    : (
        parseFloat(oferta.alojamiento.totalPrice)
      ).toFixed(0)
  }
  € 
  <span
    style={{
      color: "#8c8a8a",
      fontFamily: "inter-light",
      marginBottom: "-20px",
      fontSize: "12px"
    }}
  >
    (
    {calcularNoches()} noches
    )
  </span>
</h4>


                <button className='btnVisitar2'>Ver</button>
            </div>
        </div>
    );
}

export default PlanHotel;
