  import React from 'react'
  import '../../assets/styles/FormularioOferta.css'

  import imgCompartir from '../../images/icon/share.png'
import Anuncio from '../../components/Anuncios/Anuncio'

  function FormularioOferta({oferta}) {
    console.log(oferta)
    return (
      <form action="" className='formularioOfertaEspecial'>
          <div className="containerFormularioCabecera">
            <div className='containerFormularioCabeceraImagen'>
              <img src={imgCompartir} alt="" />
            </div>
            
            <div> 
              <p className='precioForm'>Desde <span>{oferta.getPrecio()} € </span> p.p</p>
              <p className='fechaForm'>{oferta.getFechas()}</p>
            </div>
            <button>Ver Oferta</button>
            <p className='containerFormularioCabeceraSalida'>Salida desde Madrid</p>
          </div>
          <div className="containerFormularioBody">
            <p>¿Deseas viajar desde otro lugar o en otras fechas?</p>
            <button disabled>Ver más opciones</button>
          </div>
          <Anuncio tipo={"horizontal"}/>

      </form>
    )
  }

  export default FormularioOferta