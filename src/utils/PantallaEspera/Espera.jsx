import React from 'react'
import '../../assets/styles/Espera.css'
import AvionComponent from '../components/AvionComponent'

function Espera({destino}) {
  return (
    <div className='containerEsperaPrincipal'>
        <div className="containerEspera">
            <div className="containerEsperaInterior">
                <p>Mientras planificamos tu viaje, dejanos mostrarte un pequeño anuncio.</p>
                {/* <AvionComponent/> */}
          
                <div className='containerAnuncioCuadrado'>
                    <div className="anuncioCuadrado"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Espera