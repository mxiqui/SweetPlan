import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import '../../../assets/styles/EscapadaIndex.css';
import CaruselImagenes from '../../../utils/components/CaruselImagenes';
import Descripcion from '../../../utils/components/Descripcion';
import Itinerario from '../OfertasEspeciales/Itinerario';
import TituloOferta from '../../../utils/components/TituloOferta';
import imagenPrueba from '../../../images/bali.jpg';
import imagenPrueba2 from '../../../images/dubai.jpg';
import imagenPrueba3 from '../../../images/madrid.jpg';
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';
import { useParams } from "react-router-dom";
import Footer from '../../Footer/Footer';
import Anuncio from '../../Anuncios/Anuncio';
import CaruselImagenes3 from '../../../utils/components/CaruselImagenes3';
import TarjetaTipo from '../../../utils/Tarjetas/Tipo/TarjetaTipo';
import FormularioOferta from '../../../utils/formularios/FormularioOferta';
import { OfertaEspecialService } from '../../../services/OfertaEspecialService';
import SliderOffers from '../../../utils/components/Slider';

function OfertaRomanticaIndex() {
    const params = useParams();
    const id = params.id;

    const ofertaEspecialService = new OfertaEspecialService();
    const [ofertaEspecial, setOfertaEspecial] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [error, setError] = useState(null); // Nuevo estado para controlar errores

    useEffect(() => {
        if (!id) return;

        const fetchOfertaEspecial = async () => {
            setIsLoading(true);
            try {
				const escapadaService = new EscapadaFindesemanaService();
                const oferta = await escapadaService.findById(id);
                setOfertaEspecial(oferta);
            } catch (error) {
                console.error("Error al obtener la oferta especial:", error);
                setError("Ha ocurrido un error al cargar la oferta especial.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchOfertaEspecial();

        const checkIsMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            setIsMobile(/iphone|ipad|ipod|android/.test(userAgent));
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, [id]);

    const [arrayImagenes, setArrayImagenes] = useState([imagenPrueba, imagenPrueba2, imagenPrueba3, imagenPrueba, imagenPrueba2, imagenPrueba3, imagenPrueba, imagenPrueba2, imagenPrueba3]);

    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            <main>
                <CaruselImagenes3 images={ofertaEspecial ? ofertaEspecial.getGaleria() : []} />
                {error && <div>Ha ocurrido un fallo: {error}</div>} {/* Renderizar mensaje de error */}
                {isLoading ? (
                    <div>Cargando...</div>
                ) : (
                    <div className="contenedorFlex">
                        <div className="containerDatosOfertas">
                            <TarjetaTipo tipo={"ofertaEspecial"} />
                            {ofertaEspecial && (
                                <>
                                    <TituloOferta oferta={ofertaEspecial} texto={"viaje fantastico a"} />
                                    <Descripcion descripcion={`¡Descubre tu próximo escape con nuestras ofertas especiales de viaje! a <span>${ofertaEspecial._destino} </span> Sumérgete en un mundo de posibilidades infinitas mientras te embarcas en una aventura única diseñada exclusivamente para ti. Desde exuberantes selvas tropicales hasta majestuosas montañas nevadas, nuestros paquetes de viaje te llevarán a destinos extraordinarios que despiertan los sentidos y alimentan el alma.`} />
                                    {isMobile && <Anuncio tipo={"horizontal"} />}
                                    <Itinerario data={ofertaEspecial} />
                                    <p className="alertaPrecios">*Algunos precios  pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
                                </>
                            )}
                        </div>
                        <div className="containerFormularioOfertas">
                            {ofertaEspecial && <FormularioOferta oferta={ofertaEspecial} />}
                        </div>
                    </div>
                )}
                <Anuncio tipo={"horizontal"} />
                <SliderOffers/>
                <Anuncio tipo={"horizontal"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
            </main>
            <Footer />
        </div>
    );
}

export default OfertaRomanticaIndex;




// const escapadaService = new EscapadaFindesemanaService();
	// var escapada = escapadaService.findById(id);
	// console.log(escapada)