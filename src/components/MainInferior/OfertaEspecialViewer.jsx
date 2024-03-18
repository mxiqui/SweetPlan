import React, { useState, useEffect, useRef } from 'react';
import '../../assets/styles/OfertaEspecialViewer.css';
import iconoVerMas from '../../images/icon/flecha.png'

import imagenPrueba1 from '../../images/bali.jpg';
import imagenPrueba2 from '../../images/alhambra.jpg';
import imagenPrueba3 from '../../images/barcelona1.jpg';

function OfertaEspecialViewer({ ofertaEspecial }) {
    const [indice, setIndice] = useState(0);
    const [imagenes] = useState([imagenPrueba1, imagenPrueba2, imagenPrueba3]);
    const container1 = useRef(null); 
    const [imagenFondo, setImagen] = useState({
        backgroundImage: `url(${imagenes[indice]})`,
    });


    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
        }, 3000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [imagenes.length]); // Asegúrate de incluir `imagenes.length` como dependencia

    useEffect(() => {
        setImagen({ backgroundImage: `url(${imagenes[indice]})` });
    }, [indice, imagenes]);

    return (
        <div className="containerViewer">
            <div className='containerViewerOfertaEspecial' style={imagenFondo} ref={container1}>
                <h2>Visita {ofertaEspecial.destino}</h2>
                {/* <p>Desde {ofertaEspecial.precio}</p>
                <p>{ofertaEspecial.fechas}</p> */}
                <img src={iconoVerMas} alt="" />
            </div>
            <div className="containerViewerData">
                d
            </div>
        </div>
    );
}

export default OfertaEspecialViewer;
