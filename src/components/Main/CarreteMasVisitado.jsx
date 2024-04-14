import React, { useState, useEffect } from 'react';
import MasVisitado from './MasVisitado';
import '../../assets/styles/CarreteMasVisitado.css'


import { MasVisitadoService } from '../../services/MasVisitadoService';

function CarreteMasVisitado() {
  const [indice, setIndice] = useState(0);

  let masVisitadoService= new MasVisitadoService()
  const [datos, setDatos] = useState(masVisitadoService.findAll());
  const [gallery, setGallery] = useState(masVisitadoService.getGalleryImage());


  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % datos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [indice]);



  return (
    <div className='containerCarreteMasVisitado'>
      <h2>Destinos más populares</h2>
      <MasVisitado
        imagen={gallery[indice]}
        nombre={datos[indice].nombre}
        precio={datos[indice].precio}
      />
    </div>
  );
}

export default CarreteMasVisitado;
