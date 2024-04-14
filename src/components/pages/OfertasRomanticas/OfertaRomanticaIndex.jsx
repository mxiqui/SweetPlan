import React, { useState } from 'react'
import Header from '../../Header/Header'
import '../../../assets/styles/EscapadaIndex.css'
import CaruselImagenes from '../../../utils/components/CaruselImagenes'
import Descripcion from '../../../utils/components/Descripcion'
import Itinerario from '../OfertasEspeciales/Itinerario'
import TituloOferta from '../../../utils/components/TituloOferta'

import imagenPrueba from '../../../images/bali.jpg'
import imagenPrueba2 from '../../../images/dubai.jpg'
import imagenPrueba3 from '../../../images/madrid.jpg'
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService'
import { useParams } from "react-router-dom";
import Footer from '../../Footer/Footer'


function OfertaRomanticaIndex() {

    const params = useParams();
	const id = params.id;

	const escapadaService = new EscapadaFindesemanaService();
	var escapada = escapadaService.findById(id);

    const [arrayImagenes, setArrayImagenes]= useState(imagenPrueba, imagenPrueba2, imagenPrueba3, imagenPrueba, imagenPrueba2, imagenPrueba3, imagenPrueba, imagenPrueba2, imagenPrueba3)

    return (
		<div className="containerOfertaEspecialIndex">
			<Header/>
			<main>
				<div>
					<h1 className='tituloOferta'>VIAJES ROMÁNTICOS</h1>
					<TituloOferta oferta={escapada} texto={"viaje romantico a "}/>
				</div>
				<Itinerario data={escapada}/>
				<p className="alertaPrecios">*Algunos precios  pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
				<Descripcion/>
				<CaruselImagenes imagenes={arrayImagenes}/>
			</main>
			<Footer/>
		</div>
	);
}

export default OfertaRomanticaIndex