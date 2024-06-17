	import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react';
	import '../../assets/styles/OfertaEspecial.css';

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
		window.location.href = `/specialOffer/${oferta.getId()}`;
	};

	return (
		<OfertaEspecialContext.Provider value={{abrirViewer, dispatch}}>

			<div className='containerOfertaEspecial' onClick={handleClick}>
			<img src={oferta.getImagen()} alt={oferta.getDestino()} />
			<div className='overlay'>
				<div className='destino'>{oferta.getDestino()}</div>
				<div className='precio'>{oferta.getPrecio().toFixed(2)} €</div>
				<div className='fecha'>{oferta.getFechas()}</div>
			</div>
			</div>
		</OfertaEspecialContext.Provider>

	);
}

export default OfertaEspecial;
