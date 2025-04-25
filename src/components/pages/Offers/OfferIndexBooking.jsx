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
import TituloOferta from '../../../utils/components/TituloOferta';
import Descripcion from '../../../utils/components/Descripcion';
import Itinerario from '../../../components/pages/OfertasEspeciales/Itinerario';
import { calcularNumeroDeNoches } from "../../../utils/adapters/functions";
import { useLocation } from "react-router-dom";
import SliderOffers from "../../../utils/components/Slider";
import { server } from "../../../utils/Constantes";
import CaruselImagenes3 from "../../../utils/components/CaruselImagenes3";

function OfferIndexBooking() {
    const location = useLocation();
    const { vuelo, alojamiento, datos } = location.state || {};
    const [galeria, setGaleria] = useState([]);
    const [oferta, setOferta] = useState(null);

    const vueloIda= new Vuelos(null, vuelo.vueloIda.aerolinea, vuelo.vueloIda.urlImagen, vuelo.vueloIda.precio, vuelo.vueloIda.aeropuertoSalida, vuelo.vueloIda.aeropuetoLlegada, vuelo.vueloIda.horaSalida, vuelo.vueloIda.horaLLegada, datos.fechaIda,null )
    const vueloVuelta= new Vuelos(null, vuelo.vueloVulta.aerolinea, vuelo.vueloVulta.urlImagen, vuelo.vueloVulta.precio, vuelo.vueloVulta.aeropuetoLlegada, vuelo.vueloVulta.horaSalida, vuelo.vueloVulta.horaLLegada, vuelo.vueloVulta.horaLLegada, datos.fechaVuelta,null )
        
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
        alojamiento.precio,
        calcularNumeroDeNoches(datos.fecha_ida, datos.fecha_vuelta),
        datos.fecha_ida + datos.fecha_vuelta,
        alojamiento.link,
        alojamiento.imagen
    );

    // useEffect(() => {
    //     const cargarImagenes = async () => {
    //         const response = await fetch(`${server}/getImages`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ id: alojamiento.id })
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             setGaleria(data);
    //             const nuevaOferta = new OfertaEspecial(null, data[0], datos.destino, datos.fecha_ida + datos.fecha_vuelta, data, null, vueloIda, vueloVuelta, alojamientoo);
    //             await setOferta(nuevaOferta);
    //         } else {
    //             console.log('Error al obtener las reviews:', response.statusText);
    //         }
    //     };

    //     cargarImagenes();
    // }, []);

    // useEffect(() => {
    //     if (oferta) {
    //         console.log(oferta);
    //     }
    // }, [oferta]);


    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            <main>
                <TarjetaTipo tipo={"plan"} />
                {oferta && 
                <div className='containerTituloOferta'>
                <h3 className='esloganDescripcion'>Disfruta de un viaje fantastico a {oferta.destino}</h3>
                    <div className='containerDescripcionPrecio'>
                        <h5 className='precioDescripcion'>¡Desde <span>{(alojamientoo._totalPrice+vueloIda._price).toFixed(2)}€!</span> con vuelos y alojamiento incluidos</h5>
                    </div>
            </div>}
                {/* {galeria.length > 0 && <CaruselImagenes3 images={galeria} />} */}
                <div className="contenedorFlex">
                    <div className="containerDatosOfertas">
                            <>
                                <Descripcion descripcion={`¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! a <span>${datos.origen} </span> Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma.`} />
                                <div><Itinerario data={oferta} almacenado={true} dataOpcional={galeria}/></div>
                                <p className="alertaPrecios">*Algunos precios pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
                            </>
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
