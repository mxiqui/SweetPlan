import React from 'react'
import OpcionesRapidas from './OpcionesRapidas'
import '../../assets/styles/Main.css'
import CarreteMasVisitado from './CarreteMasVisitado'

function Main() {
  return (
    <main className='mainSuperior'>
      <OpcionesRapidas/>
      <section>
        <CarreteMasVisitado/>
        {/* <CarreteMasVisitado/> */}
        {/* <div className="otroContenedorDeMientras">dd</div> */}
      </section>
    </main>
  )
}

export default Main