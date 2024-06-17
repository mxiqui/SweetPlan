import React, { useEffect, useState } from 'react'
import OffersSlider from '../../../utils/components/OffersSlider'
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';
import Slider from 'react-slick';
import SliderOffers from '../../../utils/components/Slider';

function Prueba2() {
    const [ofertas, setOfertas] = useState([]);
    const obtenerOfertas = async () => {
        try {
            const escapadaService = new EscapadaFindesemanaService();
            const nuevasOfertas = await escapadaService.findAll();
            if (nuevasOfertas !== undefined) {
                setOfertas(nuevasOfertas);
            }
        } catch (error) {
            console.error('Error al obtener las ofertas:', error);
        }
    };

    useEffect(() => {
        obtenerOfertas();
    }, []);

    const offers=[]
    ofertas.forEach((oferta)=>{
        offers.push({
            title:oferta._destino,
            description: oferta._precio,
            imageUrl: oferta._imagen
        })
    })

      
      
    return (
        <div>
            <SliderOffers/>
        </div>
    )
}

export default Prueba2