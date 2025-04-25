import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import '../../../assets/styles/NewsLetter.css'
import Newsletter from './NewsLetter'
import img1 from '../../../images/paradax/Oferta2.png'
import img2 from '../../../images/paradax/Vuelo.png'
import img3 from '../../../images/paradax/Alojamiento1.png'
import FormularioNewsletter from './FormularioNewsletter'
import HeaderNewsletter from '../../Header/HeaderNewsletter'

function NewsLetter() {
    return (
        <>
            <HeaderNewsletter />
            <main className="containerPrincipalParadax">
                <Newsletter imagen={img1} titulo={"🌍 ¡Ofertas Especiales!"} descripcion={"Los mejores paquetes de viaje con vuelos y alojamiento incluidos."} />
                <Newsletter imagen={img2} titulo={"🌍 ¡Vuelos y alojamientos!"} descripcion={"Los mejores paquetes de viaje con vuelos y alojamiento incluidos."} />
                <Newsletter imagen={img3} titulo={"🌍 ¡Ahorra tiempo!"} descripcion={"Los mejores paquetes de viaje con vuelos y alojamiento incluidos. Desc"} />
            </main>
            <Footer />
        </>
    )
}

export default NewsLetter

