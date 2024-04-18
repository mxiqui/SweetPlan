import React, { useState, useEffect } from 'react';
import OfertaEspecial from './OfertaEspecial';
import { OfertaEspecialService } from '../../services/OfertaEspecialService';

function ContenedorMainInferior() {
    const ofertaEspecialService = new OfertaEspecialService();
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        const obtenerOfertas = async () => {
            try {
                const ofertasObtenidas = await ofertaEspecialService.findAll();
                setOfertas(ofertasObtenidas);
            } catch (error) {
                console.error('Error al obtener las ofertas:', error);
            }
        };

        obtenerOfertas();
    }, []); // Ejecutar solo en el montaje inicial

    console.log(ofertas);

    if (!ofertas || !ofertas.length) {
        return <div>Cargando ofertas...</div>;
    }

    return (
        <div className='containerContenedorMainInferior' id='containerContenedorMainInferior'>
            <h2>OFERTAS ESPECIALES</h2>
            <p className='containerContenedorMainInferior-p'>¡Visita destinos a precios increíbles!</p>
            <div className='containerOfertasEspeciales'>
                {ofertas.map((oferta) => (
                    <OfertaEspecial
                        key={oferta.getId()}
                        oferta={oferta}
                    />
                ))} 
            </div>
        </div>
    );
}

export default ContenedorMainInferior;
