import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ResultadosViaje from './ResultadosViaje'
import Anuncio from '../../Anuncios/Anuncio'

function ViajePlanificadoIndex() {
  return (
    <div className='containerViajePlanificadoIndex1'>
        <Header/>
        <div className='containerViajePlanificadoIndex'>
            <ResultadosViaje />
            <Anuncio tipo={"horizontal"}/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default ViajePlanificadoIndex