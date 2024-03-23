import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Anuncio from '../Anuncios/Anuncio'
import MainInferior from '../MainInferior/MainInferior'
import Suscripcion from '../Suscripcion/Suscripcion'
import Footer from '../Footer/Footer'

function Inicio() {
  return (
    <div>
        <Header/>
        <Main/>
        <Anuncio/>
        <MainInferior/>
        <Suscripcion/>
        <Footer/>
    </div>
  )
}

export default Inicio