import React from 'react'
import Contacto from './Contacto'
import '../../../assets/styles/Contacto.css'
import Footer from '../../Footer/Footer'
import Anuncio from '../../Anuncios/Anuncio'

import logo from '../../../images/icon/logo2SinFondo.png'

function ContactoIndex() {

    const open = ()=>{
        window.location.href='/';
    }

    return (
        <>
            <div className='containerContactoIndex'>
            <a href="/">
                <img className='logoContacto' src={logo} alt="" />
            </a>
            <div className='containerIzquierdaContacto'>
                <div>
                    <h1>SweetPlan</h1>
                    <h2>Planifica tus viajes</h2>
                </div>
                <div>
                    <button onClick={open}>Planificar</button>
                </div>
            </div>
            <div className='containerContacto'>
                <Contacto/>
            </div>
            </div>
            <Anuncio tipo={'horizontal'}/>
            <Footer/>
        </>
    )
}

export default ContactoIndex