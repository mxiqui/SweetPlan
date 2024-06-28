import React, { useEffect, useState } from 'react'
import OffersSlider from './OffersSlider'
import { EscapadaFindesemanaService } from '../../services/EscapadaFindesemanaService';
import { OfertaEspecialService } from '../../services/OfertaEspecialService';

function SliderOffers() {
    const [ofertas, setOfertas] = useState([]);
    const obtenerOfertas = async () => {
        try {
            const escapadaService = new OfertaEspecialService();
            const nuevasOfertas = await escapadaService.ofertasSlider();
            if (nuevasOfertas !== undefined) {
                setOfertas(nuevasOfertas);
            }
            console.log(nuevasOfertas)

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
            title:oferta.destino,
            description: oferta.precio,
            imageUrl: oferta.imagen,
            id:oferta.id
        })
    })

    return (
        <div className='containerSliderr'>
            <h3>Otras ofertas que te podrian interesar</h3>
            <OffersSlider offers={offers} />
        </div>
    )
}

export default SliderOffers;