import {React, useRef, useContext} from 'react'
import '../../../assets/styles/SeleccionarOrigen.css'
import { aeropuertos } from '../../../resources/Aeropuertos'

import { opcionesContext, datosContext } from './OpcionesMasVisitados'


function SeleccionarOrigen() {

    const { dispatch } = useContext(opcionesContext);
    const { dispatchDatos } = useContext(datosContext);
    const aeropuertoRef = useRef(null);
    const handleClick=()=>{
        //Validacion de que hat un origen
            dispatchDatos({ type: 'RELLENAR_ORIGEN', payload:aeropuertoRef.current.value});
            dispatch({ type: 'ABRIR_FECHAS'});
    }

    return (
        <div className='containerSeleccionarOrigen'>
            <div className="SeleccionarOrigen">
                <h3>Selecciona desde donde quieres viajar</h3>
                <div className="containerInputsSeleccionarOrigen">
                    <input required type="text" list="opcionesOrigen" ref={aeropuertoRef} />
                    <datalist id="opcionesOrigen">
                            {aeropuertos.map((aeropuerto, index) => (
                            <option key={index} value={aeropuerto} />
                            ))}
                        </datalist>
                    <input type="submit" value="Buscar" onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default SeleccionarOrigen