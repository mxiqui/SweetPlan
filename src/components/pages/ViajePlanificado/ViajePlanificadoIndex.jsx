import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ResultadosViaje from './ResultadosViaje'

function ViajePlanificadoIndex() {
  return (
    <div>
        <Header/>
        <div className='containerViajePlanificadoIndex'>
            <ResultadosViaje />
        </div>
        <Footer/>
    </div>
    
  )
}

export default ViajePlanificadoIndex