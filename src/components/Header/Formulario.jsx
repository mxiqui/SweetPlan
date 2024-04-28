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

import { CalendarioContext } from './Header'
import { useContext, useState } from 'react'
import Espera from '../../utils/PantallaEspera/Espera'
import { server } from '../../utils/Constantes'


function Formulario(){



    //Llamamos a las funciones del hook useForm
    const {register, handleSubmit} = useForm();
    const {dispatchCalendario}=useContext(CalendarioContext)
    const [abrirEspera, setAbrirEspera]=useState(false)



    //función para manejar el evento del formulario
    const handleForm = async(data) => {
        setAbrirEspera(true)
        console.log("Datos del formulario:", data);

        const response = await fetch(`${server}/findPlan`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                origen:data.origen.split('(')[0].trim(),
                destino: data.destino.split('(')[0].trim(),
                fecha_ida: data.ida,
                fecha_vuelta: data.vuelta,
                personas:data.personas
            })
        });
    
        if (!response.ok) {
            throw new Error('Error al enviar datos');
        }

        const data2 = await response.json();
        sessionStorage.setItem('plan', JSON.stringify(data2));
        window.location.href = "/viajePlanificado";
    }

    const openCalendar=()=>{
        dispatchCalendario({ type: 'ABRIR_CALENDARIO'});
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
                <div className="inputIda" id='inputIda' onClick={openCalendar}>
                    <div className='containerImagen'>
                        <img src={imgCalendario} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Ida</label>
                        <input  autoComplete='false' placeholder='01/01/2024'  id='input_ida_buscador' type="text" {...register("ida",{required:true})}/>
                    </div>
                </div>


                {/* Contenedor Fecha de vuelta */}
                <div className="inputVuelta" id='inputVuelta' onClick={openCalendar}>
                    <div className='containerImagen'>
                        <img src={imgCalendario} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Vuelta</label>
                        <input  autoComplete='false' placeholder='01/01/2024' onClick={openCalendar} id='input_vuelta_buscador' type="text" {...register("vuelta",{required:true})}/>
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
                {abrirEspera && <Espera/>}
            </form>
            
    )
}

export default Formulario
