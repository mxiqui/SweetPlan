import React, {useState } from 'react'
import OfertaEspecial from './OfertaEspecial'


//Imagenes de pruebas
import imagenPrueba from '../../images/bali.jpg'
import imagenPrueba2 from '../../images/dubai.jpg'
import imagenPrueba3 from '../../images/madrid.jpg'
import imagenPrueba4 from '../../images/paris.jpg'
import imagenPrueba5 from '../../images/maldivas.jpg'
import imagenPrueba6 from '../../images/nuevaYork.jpg'
import imagenPrueba7 from '../../images/sagrada.jpg'
import imagenPrueba8 from '../../images/maldivas2.jpg'
import {OfertaEspecialService} from '../../services/OfertaEspecialService'


function ContenedorMainInferior() {

    let ofertaEspecialService= new OfertaEspecialService();
    const [ofertas, setOfertas]=useState(ofertaEspecialService.findAll())

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

    export default ContenedorMainInferior