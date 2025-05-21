import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../../assets/styles/EscapadaIndex.css';

import Carrusel from './Carrusel';
import Descripcion from '../../../utils/components/Descripcion';
import TarjetaTipo from '../../../utils/Tarjetas/Tipo/TarjetaTipo';
import FormularioOferta from '../../../utils/formularios/FormularioOferta';
import Itinerario from './ItinerarioOfertas';
import SliderOffers from '../../../utils/components/Slider';

import { OfertaService } from './OfertaService';
import TituloOferta from './TituloOferta';

import Lottie from "lottie-react";
import loadingAnimation from '../../../assets/json/loader.json';
import ItinerarioAlternativo from './Alternativo/ItinerarioAlternativo';
import OfertasFechas from './OfertasFecha';
import OrigenYFechas from './OrigenYFechas';

function OfertaIndex() {
    const { id } = useParams();
    const ofertaService = new OfertaService();

    const [oferta, setOferta] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchOferta = async () => {
            setIsLoading(true);
            setHasError(false);
            try {
                const data = await ofertaService.findById(id);
                if (!data) throw new Error("No se encontró la oferta");
                setOferta(data);
            } catch (error) {
                console.error("Error al obtener la oferta:", error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchOferta();
    }, [id]);

    const helmetTitle = oferta
        ? `${oferta.destino} - Oferta de Escapada de Fin de Semana`
        : hasError
            ? 'Oferta no disponible - SweetPlan'
            : 'Cargando oferta...';

    const helmetDescription = oferta
        ? oferta.descripcion?.slice(0, 150)
        : 'Descubre nuestras ofertas de escapadas de fin de semana en SweetPlan.';

    return (
        <div className="containerOfertaEspecialIndex">
            <Helmet>
                <title>{helmetTitle}</title>
                <meta name="description" content={helmetDescription} />
                <link rel="canonical" href={`https://sweetplan.es/ofertas/${id}`} />
            </Helmet>

            <Header />

            {isLoading ? (
                <div role="status" className="spinner-container">
                    <Lottie animationData={loadingAnimation} loop={true} style={{ height: 100, width: 100 }} />
                </div>
            ) : hasError || !oferta ? (
                <main className="mainSuperior">
                    <h2>No se puede acceder a la oferta en este momento.</h2>
                    <p>Puede que la oferta haya sido eliminada o que el servidor esté inactivo. Por favor, intenta más tarde.</p>
                </main>
            ) : (
                <main className="mainSuperior">
                    <TarjetaTipo tipo="escapada" />
                    <TituloOferta oferta={oferta} texto="viaje fantástico a" />
                    <Carrusel portada={oferta.imagen} images={oferta.alojamiento?.galeria} />

                    <div className="contenedorFlex">
                        {(oferta.vueloIdaAlternativa && oferta.vueloVueltaAlternativa) ? (
                            <ItinerarioAlternativo data={oferta} almacenado={false} />
                        ) : (
                            <Itinerario data={oferta} almacenado={false} />
                        )}
                        <Descripcion descripcion={oferta.descripcion} />
                        <p className="alertaPrecios">
                            *Algunos precios pueden experimentar cambios conforme nos acercamos a la fecha del evento.
                        </p>

                        {/* <aside className="containerFormularioOfertas">
                            <FormularioOferta oferta={oferta} />
                        </aside> */}
                        <OrigenYFechas data={oferta}/>
                    </div>

                    <section aria-label="Ofertas relacionadas">
                        <SliderOffers />
                    </section>
                </main>
            )}

            <Footer />
        </div>
    );
}

export default OfertaIndex;
