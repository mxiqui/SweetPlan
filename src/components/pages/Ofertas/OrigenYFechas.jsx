import React from 'react'
import OfertasFechas from './OfertasFecha'
import OfertasOrigen from './OfertasOrigen'

function OrigenYFechas({data}) {
    return (
        <div className='containerOpcionesFechaYOrigen'>
                <OfertasFechas 
                destino={data.destino} 
                origen={data.origen} 
                personas={data.personas}
                fechaActual={data.fechaInicio}
                id={data.id}/>

            <OfertasOrigen
            destino={data.destino} 
                origenActual={data.origen} 
                personas={data.personas}
                fechaActual={data.fechaInicio}
                id={data.id}/>
            </div>
    )
}

export default OrigenYFechas