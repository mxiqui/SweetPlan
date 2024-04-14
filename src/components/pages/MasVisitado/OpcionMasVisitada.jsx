import { useContext } from 'react';
import imgPrueba from '../../../images/bali/bali1.jpg'
import '../../../assets/styles/OpcionMasVisitada.css'

import { opcionesContext, datosContext } from './OpcionesMasVisitados'


function OpcionMasVisitada({opcion}) {
    const { dispatch } = useContext(opcionesContext);
    const { dispatchDatos } = useContext(datosContext);

    const handleClick=(e)=>{
        setTimeout(()=>{
            dispatchDatos({ type: 'RELLENAR_DESTINO', payload:opcion.nombre});
            dispatch({ type: 'ABRIR_ORIGEN'});
        }, 500)
    }

    return (
        <div className='containerOpcionMasVisitada' onClick={handleClick}>
            <img src={imgPrueba}  />
                <div className='overlay'>
                    <div className='destino'>{opcion.nombre}</div>
                    <div className='precio'>{opcion.precio} €</div>
                </div>
        </div>

    )
}

export default OpcionMasVisitada