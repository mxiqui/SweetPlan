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


function ContenedorMainInferior() {

    //Obtener de BBDD
    const [ofertasPrueba,setOfertsPrueba]=useState([
        {
        id:1,
        imagen:imagenPrueba,
        destino:'Bali (Indonesia)',
        fechas: '01-10 Febrero',
        precio: '1010,95'
        },
        {
        id:2,
        imagen:imagenPrueba2,
        destino:'Dubai (EAU)',
        fechas: '01-10 Febrero',
        precio: '650,95'
        },
        {
        id:3,
        imagen:imagenPrueba3,
        destino:'Madrid (España)',
        fechas: 'febrero',
        precio: '10'
        },
        {
        id:4,
        imagen:imagenPrueba4,
        destino:'bali',
        fechas: 'febrero',
        precio: '10'
        },
        {
        id:5,
        imagen:imagenPrueba5,
        destino:'bali',
        fechas: 'febrero',
        precio: '10'
        },
        {
        id:6,
        imagen:imagenPrueba6,
        destino:'bali',
        fechas: 'febrero',
        precio: '10'
        }
    ])

    return (
        <div className='containerContenedorMainInferior' id='containerContenedorMainInferior'>
            <h2>OFERTAS ESPECIALES</h2>
            <p>¡Visita destinos a precios increíbles!</p>
            <div className='containerOfertasEspeciales'>
                {ofertasPrueba.map((oferta) => (
                    <OfertaEspecial
                        key={oferta.id}
                        oferta={oferta}
                    />
                ))}
            </div>
        </div>
    );
    }

    export default ContenedorMainInferior