import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import '../../../assets/styles/OfertaEspecialIndex.css';
import Footer from "../../Footer/Footer";
import { OfertaEspecial } from "../../../models/OfertaEspecial";
import { Vuelos } from "../../../models/Vuelos";
import { Alojamiento } from "../../../models/Alojamiento";
import Anuncio from "../../Anuncios/Anuncio";
import FormularioOferta from '../../../utils/formularios/FormularioOferta'
import TarjetaTipo from '../../../utils/Tarjetas/Tipo/TarjetaTipo'
import CaruselImagenes2 from '../../../utils/components/CarruselImagenes2'
import TituloOferta from '../../../utils/components/TituloOferta'
import Descripcion from '../../../utils/components/Descripcion'
import Itinerario from '../../../components/pages/OfertasEspeciales/Itinerario'
import CaruselImagenes3 from "../../../utils/components/CaruselImagenes3";
import { calcularNumeroDeNoches } from "../../../utils/adapters/functions";
import { useLocation } from "react-router-dom";
import SliderOffers from "../../../utils/components/Slider";



function OfferIndex() {


    const location = useLocation();
    const { vuelo, alojamiento, datos } = location.state || {};

    const vueloIda= new Vuelos(null, vuelo[0].aerolinea, vuelo[0].urlImagen, vuelo[0].precio, vuelo[0].aeropuertoIda, vuelo[0].aeropuertoVuelta, vuelo[0].horaSalida, vuelo[0].horaLlegada, datos.fecha_ida,null )
    const vueloVuelta= new Vuelos(null, vuelo[1].aerolinea, vuelo[1].urlImagen, vuelo[1].precio, vuelo[1].aeropuertoIda, vuelo[1].aeropuertoVuelta, vuelo[1].horaSalida, vuelo[1].horaLlegada, datos.fecha_vuelta,null )
    let puntuacion = alojamiento.puntuacion;

    if (puntuacion < 5) {
        puntuacion *= 2;
    }
    
    const alojamientoo = new Alojamiento(
        alojamiento.id, 
        alojamiento.nombre, 
        puntuacion, 
        puntuacion, 
        alojamiento.direccion, 
        alojamiento.precio, 
        calcularNumeroDeNoches(datos.fecha_ida, datos.fecha_vuelta),
        datos.fecha_ida + datos.fecha_vuelta, 
        alojamiento.url, 
        alojamiento.galeria
    );    

    console.log(alojamiento)

    const oferta= new OfertaEspecial(null, alojamiento.galeria[0], datos.destino, datos.fecha_ida+datos.fecha_vuelta, alojamiento.galeria, null, vueloIda, vueloVuelta, alojamientoo);

    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            <main>
                <TarjetaTipo tipo={"plan"} />
                <div className='containerTituloOferta'>
                    <h3 className='esloganDescripcion'>Disfruta de un viaje fantastico a {oferta.getDestino()}</h3>
                        <div className='containerDescripcionPrecio'>
                            <h5 className='precioDescripcion'>¡Desde <span>{(alojamientoo._totalPrice+vueloIda._price).toFixed(2)}€!</span> con vuelos y alojamiento incluidos</h5>
                        </div>
                </div>

                <CaruselImagenes3 images={alojamiento.galeria}/>

                    <div className="contenedorFlex">
                        <div className="containerDatosOfertas">
                            {oferta && (
                                <>
                                    <Itinerario data={oferta} almacenado={true} />
                                    <p className="alertaPrecios">*Algunos precios  pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
                                </>
                            )}
                        </div>
                        <div className="containerFormularioOfertas">
                            {oferta && <FormularioOferta oferta={oferta} />}
                        </div>
                    </div>
                
                <SliderOffers/>
                
            </main>
            <Footer />
        </div>
    );
    // return (
    //     <div>
    //       <h1>Oferta Planificada</h1>
    //       {vuelo && <p>Vuelo: {JSON.stringify(vuelo)}</p>}
    //       {alojamiento && <p>Alojamiento: {JSON.stringify(alojamiento)}</p>}
    //       {datos && <p>Datos: {JSON.stringify(datos)}</p>}
    //     </div>
    //   );
    
}

export default OfferIndex;
