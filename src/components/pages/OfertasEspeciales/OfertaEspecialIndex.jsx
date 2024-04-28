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

function OfertaEspecialIndex() {
    const params = useParams();
    const id = params.id;

    const ofertaEspecialService = new OfertaEspecialService();
    const [ofertaEspecial, setOfertaEspecial] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
    }, [id]);

    return (
        <div className="containerOfertaEspecialIndex">
            <Header />
            <main>
                <CaruselImagenes2 />
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
                <Anuncio tipo={"horizontal"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
                <Anuncio tipo={"cuadrado"} />
            </main>
            <Footer />
        </div>
    );
}

export default OfertaEspecialIndex;
