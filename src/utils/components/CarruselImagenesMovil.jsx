import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../../assets/styles/CarruselImagenesMovil.css'

function CarruselImagenesMovil({ images }) {
    // Transformar el array images en el formato requerido para ImageGallery
    const imagenes = images.map(image => ({
        original: image,
        thumbnail: image
    }));

    return (
        <div className='containerCarruselImagenesMovil'>
            <ImageGallery items={imagenes} />
        </div>
    );
}

export default CarruselImagenesMovil;
    