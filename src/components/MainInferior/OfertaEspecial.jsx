	import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react';
	import '../../assets/styles/OfertaEspecial.css';
	import OfertaEspecialViewer from './OfertaEspecialViewer';

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
				<div className='destino'>{oferta.destino}</div>
				<div className='precio'>{oferta.precio} €</div>
				<div className='fecha'>{oferta.fechas}</div>
			</div>
			</div>
			{/* {abrirViewer && <OfertaEspecialViewer ofertaEspecial={oferta} />}  */}
		</OfertaEspecialContext.Provider>

	);
}

export default OfertaEspecial;
