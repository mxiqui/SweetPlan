import React, { useContext, useState } from 'react'

// Importa versiones de los iconos en dos colores
import iconoPalmeraBlanca from '../../images/icon/icnPalmeraGris.png'
import iconoPlayaGris from '../../images/icon/icnPlayaGris.png'
import iconoPlayaOscuro from '../../images/icon/icnPlayaOscuro.png'
import iconoPalmeraAzul from '../../images/icon/icnPalmeraOscuro.png'
import iconoCorazonBlanco from '../../images/icon/icnCorazonGris.png'
import iconoCorazonAzul from '../../images/icon/icnCorazonOscuro.png'
import iconoTierraGris from '../../images/icon/tierra.svg'
import iconoTierraAzul from '../../images/icon/icnPalmeraOscuro.png'

import '../../assets/styles/OpcionesRapidas.css'
import { opcionesContext } from './Main'

function OpcionesRapidas() {
  const { dispatch } = useContext(opcionesContext)
  const [opcionActiva, setOpcionActiva] = useState('ESCAPADAS')

  const ABRIR_ESCAPADAS = () => {
    setOpcionActiva('ESCAPADAS')
    dispatch({ type: 'ESCAPADAS' })
  }

  const ABRIR_EXPERIENCIAS = () => {
    setOpcionActiva('ROMANTICO')
    dispatch({ type: 'ROMANTICO' })
  }

  const ABRIR_PLAYAS = () => {
    setOpcionActiva('PLAYAS')
    dispatch({ type: 'PLAYAS' })
  }

  const ABRIR_OFERTASESPECIALES = () => {
  setOpcionActiva('MAS_POPULARES');
  const element = document.getElementById('mainInferior');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <div className='containerOpcionesRapidas'>
      <div
        className={`containerOpcionRapidaEscapadas ${
          opcionActiva === 'ESCAPADAS' ? 'opcion-activa' : ''
        }`}
        onClick={ABRIR_ESCAPADAS}
      >
        <img
          src={
            opcionActiva === 'ESCAPADAS'
              ? iconoPalmeraAzul
              : iconoPalmeraBlanca
          }
          alt=""
        />
        <h3>Escapadas</h3>
      </div>

      <div
        className={`containerOpcionRapidaExperiencias ${
          opcionActiva === 'ROMANTICO' ? 'opcion-activa' : ''
        }`}
        onClick={ABRIR_EXPERIENCIAS}
      >
        <img
          src={
            opcionActiva === 'ROMANTICO'
              ? iconoCorazonAzul
              : iconoCorazonBlanco
          }
          alt=""
        />
        <h3>Románticas</h3>
      </div>

      <div
        className={`containerOpcionRapidaPlayas ${
          opcionActiva === 'PLAYAS' ? 'opcion-activa' : ''
        }`}
        onClick={ABRIR_PLAYAS}
      >
        <img
          src={
            opcionActiva === 'PLAYAS'
              ? iconoCorazonAzul
              : iconoCorazonBlanco
          }
          alt=""
        />
        <h3>Playa</h3>
      </div>


      {/* <div
        className={`containerOpcionRapidaExperiencias ${
          opcionActiva === 'MULTIPLES' ? 'opcion-activa' : ''
        }`}
        onClick={ABRIR_EXPERIENCIAS}
      >
        <img
          src={
            opcionActiva === 'MULTIPLES'
              ? iconoCorazonAzul
              : iconoCorazonBlanco
          }
          alt=""
        />
        <h3>Multiples Destinos</h3>
      </div> */}


      {/* <div
        className={`containerOpcionRapidaExperiencias ${
          opcionActiva === 'PLAYA' ? 'opcion-activa' : ''
        }`}
        onClick={ABRIR_EXPERIENCIAS}
      >
        <img
          src={
            opcionActiva === 'PLAYA'
              ? iconoPlayaOscuro
              : iconoPlayaGris
          }
          alt=""
        />
        <h3>Playa</h3>
      </div> */}
      

      <div
        className={`containerOpcionRapidaCualquierDestino ${
          opcionActiva === 'MAS_POPULARES' ? 'opcion-activa' : ''
        }`}
        onClick={ABRIR_OFERTASESPECIALES}
      >
        <img
          src={
            opcionActiva === 'MAS_POPULARES'
              ? iconoTierraAzul
              : iconoTierraGris
          }
          alt=""
        />
        <h3>Más populares</h3>
      </div>
    </div>
  )
}

export default OpcionesRapidas
