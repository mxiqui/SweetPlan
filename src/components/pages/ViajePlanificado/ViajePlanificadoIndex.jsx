import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Anuncio from '../../Anuncios/Anuncio'
import ResultadosViajeConVuelos from './ResultadosViaje'

function ViajePlanificadoIndex() {
  return (
    <div className='containerViajePlanificadoIndex1'>
        <Header/>
        <div className='containerViajePlanificadoIndex'>
            <ResultadosViajeConVuelos />
            <Anuncio tipo={"horizontal"}/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default ViajePlanificadoIndex