import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import '../../../assets/styles/OfertaEspecialIndex.css';
import Footer from "../../Footer/Footer";
import { OfertaEspecial } from "../../../models/OfertaEspecial";
import { Vuelos } from "../../../models/Vuelos";
import { Alojamiento } from "../../../models/Alojamiento";
import Anuncio from "../../Anuncios/Anuncio";
import FormularioOferta from '../../../utils/formularios/FormularioOferta';
import TarjetaTipo from '../../../utils/Tarjetas/Tipo/TarjetaTipo';
import Itinerario from '../../../components/pages/OfertasEspeciales/ItinerarioBooking';
import { calcularNumeroDeNoches } from "../../../utils/adapters/functions";
import { useLocation } from "react-router-dom";
import SliderOffers from "../../../utils/components/Slider";
import { server } from "../../../utils/Constantes";

function OfferIndexBooking() {
    const location = useLocation();
    const { vuelo, alojamiento, datos } = location.state || {};

    const [galeria, setGaleria] = useState([]);
    const [oferta, setOferta] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!vuelo || !alojamiento || !datos) return;

        const vueloIda = new Vuelos(
            null,
            vuelo.vueloIda.aerolinea,
            vuelo.vueloIda.urlImagen,
            vuelo.vueloIda.precio,
            vuelo.vueloIda.aeropuertoSalida,
            vuelo.vueloIda.aeropuertoLlegada,
            vuelo.vueloIda.horaSalida,
            vuelo.vueloIda.horaLLegada,
            datos.fechaIda,
            null
        );

        const vueloVuelta = new Vuelos(
            null,
            vuelo.vueloVulta.aerolinea,
            vuelo.vueloVulta.urlImagen,
            vuelo.vueloVulta.precio,
            vuelo.vueloVulta.aeropuertoSalida,
            vuelo.vueloVulta.aeropuertoLlegada,
            vuelo.vueloVulta.horaSalida,
            vuelo.vueloVulta.horaLLegada,
            datos.fechaVulta,
            null
        );

        let puntuacion = alojamiento.rating;
        if (puntuacion < 5) {
            puntuacion *= 2;
        }

        const alojamientoo = new Alojamiento(
            alojamiento.id,
            alojamiento.name,
            puntuacion,
            puntuacion,
            alojamiento.address,
            alojamiento.price,
            calcularNumeroDeNoches(datos.fechaIda, datos.fechaVuelta),
            datos.fecha_ida + datos.fecha_vuelta,
            alojamiento.link,
            alojamiento.imagen
        );

        const cargarImagenes = async () => {
            try {
                const response = await fetch(`${server}/imagenesBooking/${alojamiento.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (response.ok) {
                    const data = await response.text();
                    const imagenesArray = data.split(';').filter(url => url.trim() !== ""); // <- Limpiamos las URLs

                    setGaleria(imagenesArray);

                    const nuevaOferta = new OfertaEspecial(
                        null,
                        datos.imagen,
                        datos.destino,
                        datos.fecha_ida + datos.fecha_vuelta,
                        imagenesArray,
                        null,
                        vueloIda,
                        vueloVuelta,
                        alojamientoo
                    );

                    nuevaOferta._alojamiento._galeria = imagenesArray;
                    setOferta(nuevaOferta);
                    setLoading(false); // ✅ Listo para renderizar
                } else {
                    console.log('Error al obtener las imágenes:', response.statusText);
                }
            } catch (error) {
                console.error("Error al cargar imágenes:", error);
            }
        };

        cargarImagenes();
    }, [vuelo, alojamiento, datos]);

    // ⏳ Mostrar solo cuando los datos estén listos
    if (loading) return <div>Cargando imágenes...</div>;

    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            <main>
                <TarjetaTipo tipo={"plan"} />
                {oferta &&
                    <div className='containerTituloOferta'>
                        <h3 className='esloganDescripcion'>Disfruta de un viaje fantástico a {oferta.destino}</h3>
                        <div className='containerDescripcionPrecio'>
                            <h5 className='precioDescripcion'>
                                ¡Desde <span>{(oferta._alojamiento._totalPrice + oferta._vueloIda._price).toFixed(2)}€</span> con vuelos y alojamiento incluidos!
                            </h5>
                        </div>
                    </div>}
                <div className="contenedorFlex">
                    <div className="containerDatosOfertas">
                        {oferta && (
                            <>
                                <div><Itinerario data={oferta} almacenado={true} dataOpcional={galeria} /></div>
                                <p className="alertaPrecios">*Algunos precios pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
                            </>
                        )}
                    </div>
                    <div className="containerFormularioOfertas">
                        {oferta && <FormularioOferta oferta={oferta} />}
                    </div>
                </div>
                <Anuncio tipo={"horizontal"} />
                <Anuncio tipo={"horizontal"} />
                <SliderOffers />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
            </main>
            <Footer />
        </div>
    );
}

export default OfferIndexBooking;
