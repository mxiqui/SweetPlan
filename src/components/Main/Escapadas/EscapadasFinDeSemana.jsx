import React, { useState } from 'react'
import '../../../assets/styles/EscapadasFinDeSemana.css'
import Escapada from './Escapada'

//Imagenes de pruebas
import imagenPrueba from '../../../images/bali.jpg'
import imagenPrueba2 from '../../../images/dubai.jpg'
import imagenPrueba3 from '../../../images/madrid.jpg'
import imagenPrueba4 from '../../../images/paris.jpg'
import imagenPrueba5 from '../../../images/maldivas.jpg'
import imagenPrueba6 from '../../../images/nuevaYork.jpg'

function EscapadasFinDeSemana() {

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
    }
])


  return (
    <div className='containerPrincipalEscapadas'>
        <h2>Escapadas Fin de semana</h2>
        <div>
          <select name="" id="">
              <option value="">Málaga</option>
              <option value="">Madrid</option>
              <option value="">Barcelona</option>
          </select>
        </div>
        <div className="containerEscapadasFinDeSemana">
        {ofertasPrueba.map((oferta) => (
                    <Escapada
                        key={oferta.id}
                        oferta={oferta}
                    />
        ))}
        </div>
    </div>
  )
}

export default EscapadasFinDeSemana