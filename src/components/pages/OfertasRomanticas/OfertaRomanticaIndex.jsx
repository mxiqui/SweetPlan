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
                
                {error && <div>Ha ocurrido un fallo: {error}</div>} {/* Renderizar mensaje de error */}
                {isLoading ? (
                    <div>Cargando...</div>
                ) : (
                    <>
                    <TarjetaTipo tipo={"romantico"} />
                    <div className='containerTituloOferta'>
                        <h3 className='esloganDescripcion'>❤️ Disfruta de un viaje fantastico a {ofertaEspecial.destino} con tu pareja ❤️</h3>
                            <div className='containerDescripcionPrecio'>
                                <h5 className='precioDescripcion'>¡Desde <span>{(ofertaEspecial.precio/2).toFixed(2)}€ p.p!</span> con vuelos y alojamiento incluidos</h5>
                            </div>
                    </div>
                    <CaruselImagenes3 images={ofertaEspecial ? ofertaEspecial.galeria.split(";") : []} />
                    <div className="contenedorFlex">
                            <div className="containerDatosOfertas">
                                {ofertaEspecial && (
                                    <>
                                        <Descripcion descripcion={ofertaEspecial.descripcion} />
                                        {isMobile && <Anuncio tipo={"horizontal"} />}
                                        <Itinerario data={ofertaEspecial} almacenado={false} />
                                        <p className="alertaPrecios">*Algunos precios  pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
                                    </>
                                )}
                            </div>
                            <div className="containerFormularioOfertas">
                                {ofertaEspecial && <FormularioOferta oferta={ofertaEspecial} />}
                            </div>
                        </div>
                    </>
                    
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