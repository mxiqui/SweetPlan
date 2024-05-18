import React, { useEffect, useState } from 'react';
import '../../assets/styles/FormularioOferta.css';
import imgCompartir from '../../images/icon/share.png';
import Anuncio from '../../components/Anuncios/Anuncio';

function FormularioOferta({ oferta }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            setIsMobile(/iphone|ipad|ipod|android/.test(userAgent));
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <form action="" className="formularioOfertaEspecial">
            <div className="containerFormularioCabecera">


                <div>
                    <p className="precioForm">
                        Desde <span>{oferta.getPrecio()} € </span>
                    </p>
                    <p className="fechaForm">{oferta.getFechas()}</p>
                </div>
                <button>Ver Oferta</button>
                <p className="containerFormularioCabeceraSalida">Salida desde Madrid</p>
            </div>
            <div className="containerFormularioBody">
                <p>¿Deseas viajar desde otro lugar o en otras fechas?</p>
                <button disabled>Ver más opciones</button>
            </div>
            {!isMobile && <Anuncio tipo={'horizontal'} />}
        </form>
    );
}

export default FormularioOferta;
