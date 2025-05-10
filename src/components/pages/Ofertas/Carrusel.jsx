import React, { useState } from 'react';
import '../../../assets/styles/CarruselImagenes2.css';
import CarruselImagenesMovil from '../../../utils/components/CarruselImagenesMovil';


function Carrusel({images, portada}) {

    const [imagenes, setImagenes]= useState([])
    imagenes.push(portada)
    images.substring(1).split(",").forEach((imagen)=>{
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
            <CarruselImagenesMovil images={imagenes}/>
        </>
      );
}

export default Carrusel;
