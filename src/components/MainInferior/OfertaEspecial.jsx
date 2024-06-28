	import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react';
	import '../../assets/styles/OfertaEspecial.css';
	import imgUser from '../../images/icon/user2.png'

	export const OfertaEspecialContext= createContext()


function OfertaEspecial({ oferta}) {

	const abrirViewerReducer = (state, action) => {
		switch (action.type) {
		case 'ABRIR_VIEWER':
			return true;
		default:
			return state;
		}
	};

	const [abrirViewer, dispatch]= useReducer(abrirViewerReducer, false)


	const handleClick = () => {
		window.location.href = `/specialOffer/${oferta.id}`;
	};

	return (
		<OfertaEspecialContext.Provider value={{abrirViewer, dispatch}}>

			<div className='containerOfertaEspecial' onClick={handleClick}>
			<img src={oferta.imagen} alt={oferta.destino} />
			<div className='overlay'>
				<div className="containerNumeroUsuarios">
					<img src={imgUser} alt="" />
					<p>{oferta.personas}</p>
				</div>
				<div className='destino'>{oferta.destino}</div>
				<div className='precio'>{oferta.precioPersona.toFixed(2)} €</div>
				<div className='fecha'>{oferta.AlojamientoV2.fecha}</div>
			</div>
			</div>
		</OfertaEspecialContext.Provider>

	);
}

export default OfertaEspecial;
