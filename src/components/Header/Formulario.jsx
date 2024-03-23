//Importamos los hooks que necesitemos
//import { useState } from 'react'

//Importar el use-form
import {useForm} from 'react-hook-form'

//Importamos el css
import '../../assets/styles/Formulario.css'

//Iconos del formulario
import imgUbicacion from '../../images/icon/ubicacion.png'
import imgDestino from '../../images/icon/airplan.png'
import imgCalendario from '../../images/icon/calendario.png'
import imgPersona from '../../images/icon/user.png'
import imgEuro from '../../images/euro.png'

//Lista de todos los aeropuertos disponibles
import { aeropuertos } from '../../resources/Aeropuertos'


function Formulario(){

    //Llamamos a las funciones del hook useForm
    const {register, handleSubmit} = useForm();


    //función para manejar el evento del formulario
    const handleForm = (data) => {
        console.log("Datos del formulario:", data);
    }


    return (
        <form onSubmit={handleSubmit(handleForm)}>

            {/* Contenedor input Desde */}
            <div className="inputOrigen" id='inputOrigen'>
                <div className='containerImagen'>
                    <img src={imgUbicacion} alt="" />
                </div>

                <div className='containerInput'>
                    <label htmlFor="De">Desde</label>
                    <input
                        type="text"
                        placeholder='Ingrese tu ubicación'
                        {...register("origen", { required: true })}
                        list="opcionesOrigen" // Vincula este input a la lista de opciones
                    />
                    <datalist id="opcionesOrigen">
                        {aeropuertos.map((aeropuerto, index) => (
                        <option key={index} value={aeropuerto} />
                        ))}
                    </datalist>
                </div>
            </div>

                {/* Contenedor input Destino */}
                <div className="inputDestino" id='inputDestino'>
                    <div className='containerImagen'>
                        <img src={imgDestino} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Hacia</label>
                        <input type="text" placeholder='A donde quieres ir' {...register("destino",{required:true})}
                        list="opcionesOrigen" // Vincula este input a la lista de opciones
                        />
                        <datalist id="opcionesOrigen">
                            {aeropuertos.map((aeropuerto, index) => (
                            <option key={index} value={aeropuerto} />
                            ))}
                        </datalist>
                    </div>
                </div>

                {/* Contenedor Fecha de ida */}
                <div className="inputIda" id='inputIda'>
                    <div className='containerImagen'>
                        <img src={imgCalendario} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Ida</label>
                        <input type="date" {...register("ida",{required:true})}/>
                    </div>
                </div>


                {/* Contenedor Fecha de vuelta */}
                <div className="inputVuelta" id='inputVuelta'>
                    <div className='containerImagen'>
                        <img src={imgCalendario} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Vuelta</label>
                        <input  type="date" {...register("vuelta",{required:true})}/>
                    </div>
                </div>


                {/* Contenedor Numero de personas */}
                <div className="inputNumPersonas" id='inputNumPersonas'>
                    <div className='containerImagen'>
                        <img src={imgPersona} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Personas</label>
                        <input  type="number" placeholder='2' {...register("personas",{required:true})}
                        defaultValue={2}/>
                    </div>
                </div>


                {/* Contenedor de Presupuesto */}
                <div className="inputPresupuesto" id='inputPresupuesto'>
                    <div className='containerImagen'>
                        <img src={imgEuro} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Presupuesto</label>
                        <input type="number" placeholder='Por Persona'/>
                    </div>
                </div>

                {/* Boton envio formulario */}
                <button className='buttonForm'>Planear</button>
            </form>
            
    )
}

export default Formulario
