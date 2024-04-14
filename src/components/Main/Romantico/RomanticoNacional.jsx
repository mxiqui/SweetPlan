import React from 'react'
import '../../../assets/styles/RomanticoNacional.css'

function RomanticoNacional({}) {
  return (
    <div className='containerPlanRomantico tarjetaItinerario'>
        <div className="containerPlanRomanticoImagen"></div>
        <div className="containerPlanRomanticoDatos">
            <h2 className='containerPlanRomanticoDatos-destino'>Paris</h2>
            <h3 className='containerPlanRomanticoDatos-fecha'>del <span>20 Febrero a 28 Febrero</span></h3>
            <p className='containerPlanRomanticoDatos-p1'>Vuelos y alojamiento incluidos</p>
            <p className='containerPlanRomanticoDatos-p2'>Disfruta de un viaje romantico a Paris con vuelos y alojamiento incluido</p>
            <p className='containerPlanRomanticoDatos-p3'>Disfruta de un viaje romantico a Paris con vuelos y alojamiento incluido Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, laudantium ipsum dolorem sed tempore maiores vero accusamus quaerat quasi ut corporis cum. Suscipit dolores commodi veritatis eveniet! Soluta, hic exercitationem!</p>
            <h3 className='containerPlanRomanticoDatos-price'>10.99€</h3>
        </div>
    </div>
  )
}

export default RomanticoNacional