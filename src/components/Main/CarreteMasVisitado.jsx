import React, { useState, useEffect } from 'react';
import MasVisitado from './MasVisitado';
import '../../assets/styles/CarreteMasVisitado.css'

import iconoPalmera from '../../images/icon/palmera.png'
import imagenPrueba from '../../images/bali.jpg'

function CarreteMasVisitado() {
  const [indice, setIndice] = useState(0);

  // Datos de prueba
  const datosPruebas = [
    {
      img: {iconoPalmera},
      nombre: "Bali",
      precio: "1990.95"
    },
    {
        img: {iconoPalmera},
        nombre: "New York",
      precio: "1990.95"
    },
    {
        img: {iconoPalmera},
        nombre: "Dubai",
      precio: "1990.95"
    },
    {
        img: {iconoPalmera},
        nombre: "Granada",
      precio: "1990.95"
    }
  ];

  // Cambia el índice cada 3 segundos para simular el carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % datosPruebas.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [indice]);

  return (
    <div className='containerCarreteMasVisitado'>
      <h2>Destinos más populares</h2>
      <MasVisitado
        imagen={imagenPrueba}
        nombre={datosPruebas[indice].nombre}
        precio={datosPruebas[indice].precio}
      />
    </div>
  );
}

export default CarreteMasVisitado;
