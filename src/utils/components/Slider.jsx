import React, { useEffect, useState } from 'react'
import OffersSlider from './OffersSlider'
import { EscapadaFindesemanaService } from '../../services/EscapadaFindesemanaService';
import { OfertaService } from '../../components/pages/Ofertas/OfertaService';

function SliderOffers() {
    const [ofertas, setOfertas] = useState([]);
    const obtenerOfertas = async () => {
        try {
            const ofertaService = new OfertaService();
            const nuevasOfertas = await ofertaService.findByOrigen("all","OfertaEspecial");
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
            description: oferta._precioPersona,
            imageUrl: oferta._imagen,
            id:oferta._id
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