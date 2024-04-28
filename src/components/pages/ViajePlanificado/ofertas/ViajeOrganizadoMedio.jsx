import React from 'react'
import imgAvion from '../../../../images/icon/avion2.png'
import '../../../../assets/styles/ViajeOrganizadoCaro.css'

function ViajeOrganizadoMedio({alojamiento, vuelo}) {


    const handleClick = () => {
        sessionStorage.setItem('vuelo', JSON.stringify(vuelo));
        sessionStorage.setItem('alojamiento', JSON.stringify(alojamiento));
    };

    return (
        <div className='containerViajeOrganizadoCaro' onClick={handleClick}>
            <div className="top" style={{backgroundImage: `url(${alojamiento.galeria[2]})`}}>

                <img className='imagenAerolinea' src={vuelo[0].urlImagen} alt="" />
                <div className="vuelo">
                    <div className="vueloIda">
                        <h3>{vuelo[0].origen}</h3>
                        <h4>{vuelo[0].aeropuertoIda}</h4>
                    </div>

                    <img width={"20px"} src={imgAvion} alt="" />

                    <div className="vueloVuelta">
                        <h3>{vuelo[0].destino}</h3>
                        <h4>{vuelo[0].aeropuertoVuelta}</h4>
                    </div>
                </div>

            </div>
            
            <div className="containerResultadoPlanificacionDiv2">

                <div className="containerViajeOrganizadoCaroFecha">
                <p className='nameAlojamiento'>
                        {alojamiento.nombre.length > 20 ? alojamiento.nombre.substring(0, 20) + '...' : alojamiento.nombre}
                        <span>({alojamiento.puntuacion * 2})</span> 
                        <br/>
                        <span>Precio vuelos y alojamiento</span>
                    </p>                    
                    <p className='precioAlojamiento'><b>{(alojamiento.precio_total + vuelo[0].precio).toFixed(2)}€</b> <br/> precio N personas</p>
                </div>

                <div className="containerViajeOrganizadoCaroAdicional">

                </div>
            </div>

            <div className="bottom">
            </div>
        </div>
    )
}

export default ViajeOrganizadoMedio