import React, { useState } from "react";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import '../../../assets/styles/OfertaEspecialIndex.css'

import imagenPrueba from '../../../images/bali.jpg'
import imagenPrueba2 from '../../../images/dubai.jpg'
import imagenPrueba3 from '../../../images/madrid.jpg'
import Itinerario from "./Itinerario";
import CaruselImagenes from "../../../utils/components/CaruselImagenes";
import Footer from "../../Footer/Footer";
import { ofertaEspecialprueba } from '../../../resources/Ofertas'
import { OfertaEspecialService } from "../../../services/OfertaEspecialService";
import Descripcion from "../../../utils/components/Descripcion";
import TituloOferta from "../../../utils/components/TituloOferta";



function OfertaEspecialIndex() {
	const params = useParams();
	const id = params.id;

	const ofertaEspecialService = new OfertaEspecialService();
	//var ofertaEspecial = ofertaEspecialService.findById(id);
	var ofertaEspecial = ofertaEspecialService.findByIdPrueba();

	const [arrayImagenes, setArrayImagenes]= useState(imagenPrueba, imagenPrueba2, imagenPrueba3, imagenPrueba, imagenPrueba2, imagenPrueba3, imagenPrueba, imagenPrueba2, imagenPrueba3)

	return (
		<div className="containerOfertaEspecialIndex">
			<Header />
			<main>
				<div>
					<h1>OFERTAS ESPECIALES</h1>
					{/* <p>¡Visita {ofertaEspecial.getDestino()} desde {ofertaEspecial.getPrecio()}€ euros por persona!</p> */}
					<TituloOferta oferta={ofertaEspecial} texto={"viaje fantastico a"}/>
				</div>
				<Itinerario data={ofertaEspecial}/>
				<p className="alertaPrecios">*Algunos precios  pueden experimentar cambios conforme nos acercamos a la fecha del evento</p>
				<Descripcion/>
				<div>
					<select name="" id="">
						<option value="">Málaga</option>
						<option value="">Barcelona</option>
						<option value="">Madrid</option>
						<option value="">Valencia</option>
					</select>
				</div>
				<CaruselImagenes imagenes={arrayImagenes}/>
			</main>
			<Footer/>
		</div>
	);
}

export default OfertaEspecialIndex;
