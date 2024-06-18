import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getAlojamientoById } from '../../../services/Alojamiento';
import Header from '../../Header/Header';
import CaruselImagenes3 from '../../../utils/components/CaruselImagenes3';
import Titulo from '../../../utils/components/Titulos/Titulo';
import '../../../assets/styles/AlojamientoIndex.css';
import imgUbicacion from '../../../images/icon/ubicacion.png';
import Descripcion from '../../../utils/components/Descripcion';
import imgStars from '../../../images/icon/estrella.png';
import DetallesAlojamiento from '../../../utils/components/DetallesAlojamiento';
import Anuncio from '../../Anuncios/Anuncio';
import Footer from '../../Footer/Footer';
import Reviews from './Reviews';
import { server } from '../../../utils/Constantes';
import SliderOffers from '../../../utils/components/Slider';

function AlojamientoPlaneado() {
    const params = useParams();
    const location = useLocation();
    const id = params.id;

    const [alojamiento, setAlojamiento] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchAlojamiento = async () => {
            setIsLoading(true);
            try {
                const jsonData = new URLSearchParams(location.search).get('data');
                const alojamientoData = JSON.parse(jsonData);
                setAlojamiento(alojamientoData);
            } catch (error) {
                console.error("Error al obtener el alojamiento:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAlojamiento();
    }, [id, location]);

    useEffect(() => {
        const fetchReviews = async () => {
            if (alojamiento) {
                const parsedUrl = new URL(alojamiento.link);
                const sitioWeb = parsedUrl.hostname.split('.')[1];

                if (sitioWeb === 'booking' || sitioWeb === 'airbnb') {
                    try {
                        const endpoint = sitioWeb === 'booking' ? '/getReviewsBooking' : '/getReviewsAirbnb';
                        const response = await fetch(`${server}${endpoint}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: alojamiento.id })
                        });

                        if (response.ok) {
                            const data = await response.json();
                            setReviews(data);
                        } else {
                            console.log('Error al obtener las reviews:', response.statusText);
                        }
                    } catch (error) {
                        console.error('Error al obtener las reviews:', error);
                    }
                }
            }
        };

        fetchReviews();
    }, [alojamiento]);

    const open = () => {
        window.open(alojamiento.link, '_blank');
    };

    const elementos = Array.from({ length: 5 });

    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            {isLoading ? (
                <div>Cargando...</div>
            ) : (
                <main>
                    <div className='containerCabeceraAlojamiento'>
                        <div>
                            <Anuncio tipo={"vertical"} />
                            <Titulo titulo={alojamiento.name} />
                            <div className='contenedorAuxiliar'>
                                <img src={imgUbicacion} alt="" />
                                <p className='direccionAlojamiento'>{alojamiento.direccion}</p>
                            </div>
                            <div className='contenedorAuxiliar2'>
                                {elementos.map((_, index) => (
                                    <img key={index} className='iconoEstrella' src={imgStars} alt="" />
                                ))}
                                <p>{alojamiento.puntuacion}</p>
                            </div>
                        </div>
                        <div>
                            <button className='btnAlojamiento' onClick={open}>Ir al alojamiento</button>
                        </div>
                    </div>
                    <CaruselImagenes3 images={alojamiento.galeria} />
                    <div className=''>
                        <div className='containerDetallesAlojamiento'>
                            <Descripcion descripcion={"Este agradable hotel se encuentra junto a la reserva natural de Breña. Dispone de un bonito jardín con piscina al aire libre de temporada, solárium y conexión Wi-Fi gratuita. <br><br> Se halla a 100 metros de la playa de Castillejos. Las habitaciones de La Breña presentan una decoración clásica en tonos pastel. Cuentan con aire acondicionado, vistas hermosas, TV de plasma con canales vía satélite y baño privado con secador de pelo. <br><br> Cada mañana se sirve un desayuno continental en el restaurante del hotel, que tiene una preciosa terraza con vistas al mar. También ofrece un menú del día para el almuerzo y platos tradicionales elaborados con productos de la zona. <br><br> El hotel goza de una ubicación idónea para disfrutar de la playa y el campo. Se encuentra a solo 40 metros de la pintoresca cueva Las Cortinas y a 700 metros del centro de la ciudad, donde encontrará diversos restaurantes y comercios. La Breña ofrece aparcamiento privado gratuito. Está a 10 km de Conil de la Frontera y a menos de 1 hora en coche de Cádiz."} />
                            <DetallesAlojamiento />
                            {/* <Anuncio tipo={"horizontal"} /> */}
                        </div>
                        {reviews && <Reviews reviews={{ company: alojamiento.company, data: reviews }} />}
                        {/* <Anuncio tipo={"horizontal"} /> */}
                        <SliderOffers />
                        <Anuncio tipo={"horizontal"} />
                    </div>
                </main>
            )}
            <Footer />
        </div>
    );
}

export default AlojamientoPlaneado;
