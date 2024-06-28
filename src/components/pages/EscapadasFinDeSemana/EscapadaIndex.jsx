import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import '../../../assets/styles/EscapadaIndex.css';
import CaruselImagenes from '../../../utils/components/CaruselImagenes';
import Descripcion from '../../../utils/components/Descripcion';
import Itinerario from '../OfertasEspeciales/Itinerario';
import TituloOferta from '../../../utils/components/TituloOferta';
import Footer from '../../Footer/Footer';
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';
import { useParams } from "react-router-dom";
import CaruselImagenes2 from '../../../utils/components/CarruselImagenes2';
import TarjetaTipo from '../../../utils/Tarjetas/Tipo/TarjetaTipo';
import FormularioOferta from '../../../utils/formularios/FormularioOferta';
import Anuncio from '../../Anuncios/Anuncio';
import CaruselImagenes3 from '../../../utils/components/CaruselImagenes3';
import SliderOffers from '../../../utils/components/Slider';

function EscapadaIndex() {
    const params = useParams();
    const id = params.id;

    const escapadaService = new EscapadaFindesemanaService();
    const [escapada, setEscapada] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEscapada = async () => {
            setIsLoading(true);
            try {
                const escapadaData = await escapadaService.findById(id);
                setEscapada(escapadaData);
            } catch (error) {
                console.error("Error al obtener la escapada:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchEscapada();
    }, [id]);


    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            {isLoading ? (
                    <div>Cargando...</div>
                ) : (
            <main>
            <TarjetaTipo tipo={"escapada"} />
            <TituloOferta oferta={escapada} texto={"viaje fantastico a"} />
            <CaruselImagenes3 images={escapada.galeria.split(";")} />

                
                    <div className="contenedorFlex">

                        <div className="containerDatosOfertas">
                            
                            {escapada && (
                                <>
                                    <Descripcion descripcion={escapada.descripcion} />
                                    <Itinerario data={escapada} almacenado={false}/>
                                    <p className="alertaPrecios">*Algunos precios  pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
                                </>
                            )}
                        </div>
                        <div className="containerFormularioOfertas">
                            {escapada && <FormularioOferta oferta={escapada} />}
                        </div>
                    </div>
                
                <Anuncio tipo={"horizontal"} />
                <SliderOffers/>
                <Anuncio tipo={"horizontal"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
            </main>
            )}
            <Footer />
        </div>
    );
}

export default EscapadaIndex;
