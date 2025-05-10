import React, { useEffect, useRef, useState } from 'react';

function Newsletter({ titulo, descripcion, imagen }) {
    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Se activa cuando el 30% de la imagen es visible
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="containerTarjetaParadax">
            <div className="infoElementParadax">
                <h4 className='titleParallax'>{titulo}</h4>
                <p className='descriptionParallax'>{descripcion}</p>
            </div>
            <div className="elementParadax">
                <img
                    ref={imgRef}
                    src={imagen}
                    alt="Imagen"
                    className={`imagen-grande ${isVisible ? 'visible' : 'hidden'}`}
                />
            </div>
        </div>
    );
}

export default Newsletter;
