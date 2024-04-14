import React, { createContext, useReducer, useState } from 'react';
import '../../../assets/styles/OfertasRomanticas.css';
import RomanticoNacional from './RomanticoNacional';
import RomanticoInternacional from './RomanticoInternacional';
import { OfertaRomanticaService } from '../../../services/OfertasRomanticasService';
import Interruptor from '../../../utils/components/Interruptor';

export const TipoOfertaRomanticaContext = createContext();

function OfertasRomanticas() {
  const ofertaRomanticaService = new OfertaRomanticaService();

  const [ofertasInternacionales, setOfertasInternacionales] = useState(ofertaRomanticaService.findAll());

  const tipoOfertaReducer = (state, action) => {
    switch (action.type) {
      case 'INTERNACIONAL':
        return 'INTERNACIONAL';
      case 'NACIONAL':
        return 'NACIONAL';
      default:
        return state;
    }
  };

  const [tipoOferta, dispatch] = useReducer(tipoOfertaReducer, 'INTERNACIONAL');

  return (
    <div>
      <TipoOfertaRomanticaContext.Provider value={{ tipoOferta, dispatch }}>
        <Interruptor />
      </TipoOfertaRomanticaContext.Provider>
      <div className='containerOfertasRomanticas'>
        {tipoOferta === 'INTERNACIONAL' ? (
          // Renderizado de ofertas internacionales si el tipo de oferta es internacional
          ofertasInternacionales.map((oferta) => (
            <RomanticoInternacional key={oferta.getId()} oferta={oferta} />
          ))
        ) : (
          // Renderizado de ofertas nacionales si el tipo de oferta es nacional
          <RomanticoNacional />
        )}
      </div>
    </div>
  );
}

export default OfertasRomanticas;
