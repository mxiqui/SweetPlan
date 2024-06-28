import React, { useContext } from 'react'
import '../../assets/styles/Aviso.css'

import imgSalir from '../../images/cerrar.png'
import { AvisoContext } from '../../components/Header/Header'

function Aviso() {

    const { dispatchAviso } = useContext(AvisoContext);

    const cerrarAviso = () => {
        dispatchAviso({ type: "CERRAR_AVISO" });
    };


    return (
        <div className='containerAvisoBusqueda'>
            <div>
                <img className='iconoSalirAviso' src={imgSalir} alt="" />
                <p>Disculpe las molestias</p>
                <p>Esta funcionalidad aun no esta disponible...</p>
            </div>
        </div>
    )
}

export default Aviso