import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import '../../../assets/styles/OfertaEspecialIndex.css';
import imagenPrueba from '../../../images/bali.jpg';
import imagenPrueba2 from '../../../images/dubai.jpg';
import imagenPrueba3 from '../../../images/madrid.jpg';
import Itinerario from "./Itinerario";
import CaruselImagenes from "../../../utils/components/CaruselImagenes";
import Footer from "../../Footer/Footer";
import { OfertaEspecialService } from "../../../services/OfertaEspecialService";
import Descripcion from "../../../utils/components/Descripcion";
import TituloOferta from "../../../utils/components/TituloOferta";
import CaruselImagenes2 from "../../../utils/components/CarruselImagenes2";
import TarjetaTipo from "../../../utils/Tarjetas/Tipo/TarjetaTipo";
import Anuncio from "../../Anuncios/Anuncio";
import FormularioOferta from "../../../utils/formularios/FormularioOferta";
import CaruselImagenes3 from "../../../utils/components/CaruselImagenes3";
import Slider from "react-slick";
import SliderOffers from "../../../utils/components/Slider";

function OfertaEspecialIndex() {
    const params = useParams();
    const id = params.id;

    const ofertaEspecialService = new OfertaEspecialService();
    const [ofertaEspecial, setOfertaEspecial] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (!id) return;

        const fetchOfertaEspecial = async () => {
            setIsLoading(true);
            try {
                const oferta = await ofertaEspecialService.findById(id);
                setOfertaEspecial(oferta);
            } catch (error) {
                console.error("Error al obtener la oferta especial:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchOfertaEspecial();

        // Detectar si es un dispositivo móvil
        const checkIsMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            setIsMobile(/iphone|ipad|ipod|android/.test(userAgent));
        };

        checkIsMobile();

        // Agregar un listener para actualizar el estado si cambia el tamaño de la ventana
        window.addEventListener("resize", checkIsMobile);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, [id]);


    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            {isLoading ? (
                    <div>Cargando...</div>
                ) : (
            <main>
                <TarjetaTipo tipo={"ofertaEspecial"} />
                <TituloOferta oferta={ofertaEspecial} texto={"viaje fantastico a"} />

                <CaruselImagenes3 images={ofertaEspecial.getGaleria()} />
                
                    <div className="contenedorFlex">
                        <div className="containerDatosOfertas">
                            {ofertaEspecial && (
                                <>
                                    <Descripcion descripcion={`¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! a <span>${ofertaEspecial._destino} </span> Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma.`} />
                                    {isMobile && <Anuncio tipo={"horizontal"}/>}
                                    <Itinerario data={ofertaEspecial}  almacenado={false}/>
                                    <p className="alertaPrecios">*Algunos precios  pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
                                </>
                            )}
                        </div>
                        <div className="containerFormularioOfertas">
                            {ofertaEspecial && <FormularioOferta oferta={ofertaEspecial} />}
                        </div>
                    </div>
                
                <Anuncio tipo={"horizontal"} />
                <Anuncio tipo={"horizontal"} />
                <SliderOffers/>
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
            </main>
            )}
            <Footer />
        </div>
    );
}

export default OfertaEspecialIndex;
