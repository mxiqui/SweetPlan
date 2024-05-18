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



function OfferIndex() {


    var valor1 = sessionStorage.getItem('vuelo');
    var valor2 = sessionStorage.getItem('alojamiento');
    var plan = sessionStorage.getItem('plan');
    var vuelo = JSON.parse(valor1);
    var alojamiento = JSON.parse(valor2);
    var otrosDatos=JSON.parse(plan)

    const vueloIda= new Vuelos(null, vuelo[0].aerolinea, vuelo[0].urlImagen, vuelo[0].precio, vuelo[0].aeropuertoIda, vuelo[0].aeropuertoVuelta, vuelo[0].horaSalida, vuelo[0].horaLlegada, otrosDatos.datos.fecha_ida,null )
    const vueloVuelta= new Vuelos(null, vuelo[1].aerolinea, vuelo[1].urlImagen, vuelo[1].precio, vuelo[1].aeropuertoIda, vuelo[1].aeropuertoVuelta, vuelo[1].horaSalida, vuelo[1].horaLlegada, otrosDatos.datos.fecha_vuelta,null )
    const alojamientoo= new Alojamiento(alojamiento.nombre, 5, alojamiento.puntuacion, alojamiento.direccion, alojamiento.precio, null, alojamiento.precio_total, alojamiento.url)
    const oferta= new OfertaEspecial(null, alojamiento.galeria[0], otrosDatos.datos.destino, otrosDatos.datos.fecha_ida+otrosDatos.datos.fecha_vuelta, alojamiento.galeria, null, vueloIda, vueloVuelta, alojamientoo);


    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            <main>
                <CaruselImagenes3 images={alojamiento.galeria}/>

                    <div className="contenedorFlex">
                        <div className="containerDatosOfertas">
                            <TarjetaTipo tipo={"plan"} />
                            {oferta && (
                                <>
                                    <TituloOferta oferta={oferta} texto={"viaje fantastico a"} />
                                    <Descripcion descripcion={`¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! a <span>${oferta.getDestino()} </span> Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma.`} />
                                    <Itinerario data={oferta} />
                                    <p className="alertaPrecios">*Algunos precios  pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
                                </>
                            )}
                        </div>
                        <div className="containerFormularioOfertas">
                            {oferta && <FormularioOferta oferta={oferta} />}
                        </div>
                    </div>
                <Anuncio tipo={"horizontal"} />
                <Anuncio tipo={"horizontal"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
            </main>
            <Footer />
        </div>
    );
}

export default OfferIndex;
