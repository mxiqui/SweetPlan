import InputCalendarios from "../Pruebas/PruebasIndex"

import imgUbicacion from '../../../images/icon/ubicacion.png'


function FormularioNewsletter(){
    return (
        <form className="formularioNewsletter" action="">

            <p>Suscribete para recibir las mejores ofertas!</p>
            <h6>Recibe todas las ofertas acerca de los viajes mas baratos desde tu aeropuerto mas cercano.</h6>

            <div className="inputOrigenNew"> 
                <label htmlFor="">Origen</label>
                <input type="text" />
            </div>

            <div className="inputOrigenNew"> 
                <label htmlFor="">Origen</label>
                <input type="text" />
            </div>


            

            {/* Boton envio formulario */}
            <button className='buttonFormNew'>Obtener Ofertas</button>

        </form>
    )
}

export default FormularioNewsletter