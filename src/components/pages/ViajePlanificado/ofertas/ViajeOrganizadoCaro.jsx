import React from 'react'
import imgAvion from '../../../../images/icon/avion2.png'
import '../../../../assets/styles/ViajeOrganizadoCaro.css'

function ViajeOrganizadoCaro({alojamiento, vuelo, datos}) {


    const handleClick = () => {
        sessionStorage.setItem('vuelo', JSON.stringify(vuelo));
        sessionStorage.setItem('alojamiento', JSON.stringify(alojamiento));
    };

    if(vuelo!=null){
        return (
            <div className='containerViajeOrganizadoCaro' onClick={handleClick}>
                <div className="top" style={{backgroundImage: `url(${alojamiento.imagen})`}}>
    
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
                            {alojamiento.name.length > 18 ? alojamiento.name.substring(0, 18) + '...' : alojamiento.name}
                            <span>({alojamiento.rating})</span> 
                            <br/>
                            <span>Precio vuelos y alojamiento</span>
                        </p>
                        <p className='precioAlojamiento'><b>{((alojamiento.precioTotal+vuelo[0].precio)/datos.personas).toFixed(2)}€</b> <br/>  por persona</p>
                    </div>
    
                    <div className="containerViajeOrganizadoCaroAdicional">
    
                    </div>
                </div>
    
                <div className="bottom">
                </div>
            </div>
        )
    }else{
        return (
            <div className='containerViajeOrganizadoCaro' onClick={handleClick}>
                <div className="top" style={{backgroundImage: `url(${alojamiento.imagen})`}}>
    
                </div>
                
                <div className="containerResultadoPlanificacionDiv2">
    
                    <div className="containerViajeOrganizadoCaroFecha">
                        <p className='nameAlojamiento'>
                            {alojamiento.name.length > 18 ? alojamiento.name.substring(0, 18) + '...' : alojamiento.name}
                            <span>({alojamiento.rating})</span> 
                            <br/>
                            <span>Precio vuelos y alojamiento</span>
                        </p>
                        <p className='precioAlojamiento'><b>{(alojamiento.precioTotal/datos.personas).toFixed(2)}€</b> <br/>  por persona</p>
                    </div>
    
                    <div className="containerViajeOrganizadoCaroAdicional">
    
                    </div>
                </div>
    
                <div className="bottom">
                </div>
            </div>
        )
    }

    
}

export default ViajeOrganizadoCaro