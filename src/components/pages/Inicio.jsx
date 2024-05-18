import React, { createContext, useReducer, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Anuncio from '../Anuncios/Anuncio';
import MainInferior from '../MainInferior/MainInferior';
import Suscripcion from '../Suscripcion/Suscripcion';
import Footer from '../Footer/Footer';
import Espera from '../../utils/PantallaEspera/Espera';
import Loader2 from '../../utils/loader/Loader2';
import Romantico from '../Main/Romantico/RomanticoNacional';
import OfertasRomanticas from '../Main/Romantico/OfertasRomanticas';
import Cookies from 'js-cookie';


export const pantallaEsperaContext = createContext();
export const ScrollContext = createContext();

export const abrirPantallaEsperaReducer = (state, action) => {
  switch (action.type) {
    case 'ABRIR':
      return true;
    case 'CERRAR':
      return false;
    default:
      return state;
  }
};

export const ScrollReducer = (state, action) => {
  switch (action.type) {
    case 'ENABLED':
      return true;
    case 'DISABLED':
      return false;
    default:
      return state;
  }
};

function Inicio() {
  const [abrirPantallaEspera, dispatchPantallaEspera2] = useReducer(abrirPantallaEsperaReducer, true);
  const [$scroll, dispatchScroll] = useReducer(ScrollReducer, true);
  const [todosComponentesMontados, setTodosComponentesMontados] = useState(false);
  const [suscrito, setSuscrito]=useState(false)

  useEffect(() => {
    const tiempoEspera = setTimeout(() => {
      setTodosComponentesMontados(true);
    }, 2000); // Utilizamos un tiempo de espera mínimo

    return () => clearTimeout(tiempoEspera);
  }, []);

  useEffect(() => {
    if ($scroll) {
      document.getElementById("body").style.overflow = "auto";
    } else {
      document.getElementById("body").style.overflow = "hidden";
    }
  }, [$scroll]);


  useEffect(()=>{
    const suscrito = Cookies.get('Suscrito');
    if(suscrito===undefined){
      Cookies.set('Suscrito', 'N', { expires: 90 });
    }else{
      if(suscrito=='S'){
        setSuscrito(true)
      }
    }
    
  })

  try {
    return (
      <div>
        {!todosComponentesMontados && <Loader2 />}
        {todosComponentesMontados && (
          <ScrollContext.Provider value={{ $scroll, dispatchScroll }}>
            <Header />
            <Main />
            <Anuncio tipo={"horizontal"}/>
            <MainInferior />
            <Anuncio tipo={"horizontal"}/>
            {!suscrito && <Suscripcion />}
            <Footer />
          </ScrollContext.Provider>
        )}
      </div>
    );
  } catch (error) {
    <div>
      Error
    </div>
  }
}

export default Inicio;
