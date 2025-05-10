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

import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';
import TituloOferta from './TituloOferta';
import { OfertaService } from './OfertaService';

import Lottie from "lottie-react";
import loadingAnimation from '../../../assets/json/loader.json'; // ajusta el path
import ItinerarioAlternativo from './Alternativo/ItinerarioAlternativo';

function OfertaIndex() {
    const { id } = useParams();
    const ofertaService = new OfertaService();

    const [oferta, setOferta] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOferta = async () => {
            setIsLoading(true);
            try {
                const data = await ofertaService.findById(id);
                setOferta(data);
            } catch (error) {
                console.error("Error al obtener la oferta:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchOferta();
    }, [id]);



    return (
        <div className="containerOfertaEspecialIndex">
            <Helmet>
                <title>{oferta ? `${oferta.destino} - Oferta de Escapada de Fin de Semana` : 'Cargando oferta...'}</title>
                <meta name="description" content={oferta ? oferta.descripcion?.slice(0, 150) : 'Descubre nuestras ofertas de escapadas de fin de semana.'} />
                <link rel="canonical" href={`https://sweetplan.es/ofertas/${id}`} />
            </Helmet>

            <Header />

            {isLoading ? (
                <div role='status' className="spinner-container">
                        <Lottie animationData={loadingAnimation} loop={true} style={{ height: 100, width: 100 }} />
                    </div>
            ) : (
                <main className='mainSuperior'>
                    <TarjetaTipo tipo="escapada" />
                    <TituloOferta oferta={oferta} texto="viaje fantástico a" />
                    <Carrusel portada={oferta.imagen} images={oferta.alojamiento?.galeria} />

                    <div className="contenedorFlex">
                            {(oferta.vueloIdaAlternativa != null && oferta.vueloVueltaAlternativa !=null) ? (
                                <ItinerarioAlternativo data={oferta} almacenado={false} />
                            ) : (
                                <Itinerario data={oferta} almacenado={false} />
                            )}
                            <Descripcion descripcion={oferta.descripcion} />
                            <p className="alertaPrecios">
                                *Algunos precios pueden experimentar cambios conforme nos acercamos a la fecha del evento.
                            </p>

                        <aside className="containerFormularioOfertas">
                            <FormularioOferta oferta={oferta} />
                        </aside>
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
