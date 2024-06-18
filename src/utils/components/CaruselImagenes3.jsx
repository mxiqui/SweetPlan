import React, { useState } from 'react';
import '../../assets/styles/CarruselImagenes2.css'; // Archivo CSS para los estilos del carrusel

import imagen from '../../images/bali.jpg'
import imagen2 from '../../images/bali/bali1.jpg'
import imagen3 from '../../images/bali/bali2.jpg'
import imagen4 from '../../images/bali/bali2.jpg'
import imagen5 from '../../images/bali/bali2.jpg'
import CarruselImagenesMovil from './CarruselImagenesMovil';

function CaruselImagenes3({images}) {

    const [imagenes, setImagenes]= useState([])
    images.forEach((imagen)=>{
        if(imagenes.length<5){
            imagenes.push(imagen)
        }
    })

    return (
        <>
            <div className="containerCarrusel2">
                {imagenes.map((img, index) => (
                    <div key={index} className="item" style={{ backgroundImage: `url(${img})` }}></div>
                ))}
            </div>
            <CarruselImagenesMovil images={images}/>
        </>
      );
}

export default CaruselImagenes3;
