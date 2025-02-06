import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import logo from '../../../images/icon/logo2SinFondo.png'
import '../../../assets/styles/SomosIndex.css'

function SomosIndex() {
    return (
        <>
<Header />
<main className="mainWho">
    <div className="containerCentralWho">
        <h2>¿Quiénes Somos?</h2>
        <img src={logo} alt="Logo" />
        <p>Somos una plataforma dedicada a facilitar la planificación de viajes de manera rápida y sencilla. Nuestra misión es permitir a los usuarios ahorrar tiempo y dinero al organizar sus viajes, proporcionando herramientas que encuentran los mejores vuelos y alojamientos a precios increíbles. Nos enorgullece ofrecer un servicio eficiente y accesible, ayudando a los viajeros a disfrutar de sus experiencias sin las complicaciones de la planificación.</p>
        <h4>Con Quiénes Trabajamos</h4>
        <p>Colaboramos con una variedad de compañías líderes en el sector de viajes para asegurar que nuestros usuarios tengan acceso a las mejores ofertas disponibles. Gracias a estas asociaciones, podemos ofrecer una amplia gama de opciones de vuelos y alojamientos que se adaptan a las necesidades y presupuestos de todos nuestros usuarios.</p>
        <ul>
            <li><a href="https://www.skyscanner.es/">Sky Scanner</a>: Plataforma global de búsqueda de vuelos, comparando precios entre múltiples aerolíneas y agencias de viajes.</li>
            <li><a href="https://www.airbnb.es/">Airbnb</a>: Proveedor de alojamientos únicos y experiencias locales en miles de destinos alrededor del mundo.</li>
            <li><a href="https://www.booking.com/">Booking</a>: Ofrece una amplia gama de alojamientos, desde hoteles de lujo hasta opciones económicas en cualquier rincón del planeta.</li>
        </ul>
    </div>
</main>
<Footer />


        </>
    )
}

export default SomosIndex