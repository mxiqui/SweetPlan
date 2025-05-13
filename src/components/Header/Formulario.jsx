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
import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import Espera from '../../utils/PantallaEspera/Espera'
import { server } from '../../utils/Constantes'
import InputCalendarios from '../pages/Pruebas/PruebasIndex'
import PopupAviso from '../Avisos/PopUpAviso'

export const datosRutaContext= createContext()
export const datosRutaReducer = (state, action) => {
    switch (action.type) {
        case 'GUARDAR_IDA':
            return {
                ...state,
                ida: action.payload,
                vuelta: null,
              };

        case 'GUARDAR_VUELTA':
            return {
                ...state,
                vuelta: action.payload,
              };

        default:
            return state;
    }
};



function Formulario(){



    //Llamamos a las funciones del hook useForm
    const {register, handleSubmit,setValue } = useForm();
    const {dispatchCalendario}=useContext(CalendarioContext)
    const [abrirEspera, setAbrirEspera]=useState(false)
    const [mostrarPopup, setMostrarPopup] = useState(false);

    
    const [rutaSeleccionada, dispatchRuta]=useReducer(datosRutaReducer, {
        ida:null,
        vuelta:null
    });

    //función para manejar el evento del formulario
    const handleForm = async (data) => {
        try {
            setAbrirEspera(true)
            document.getElementById("body").style.overflow = "hidden";
    
            const timeout = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('timeout')), 60000) // 1 minuto
            );
    
            const fetchRequest = fetch(`${server}/findPlan`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    origen: rutaSeleccionada.ida,
                    destino: rutaSeleccionada.vuelta,
                    fechaIda: document.getElementById('input_ida_buscador').value,
                    fechaVuelta: document.getElementById('input_vuelta_buscador').value,
                    personas: data.personas
                })
            });
    
            const response = await Promise.race([fetchRequest, timeout]);
    
            if (!response.ok) {
                throw new Error('Error al enviar datos');
            }
    
            const data2 = await response.json();
            sessionStorage.setItem('plan', JSON.stringify(data2));
            window.location.href = "/viajePlanificado";
    
        } catch (error) {
            // Si hay un error o timeout, recargar la página
            console.error("Error o timeout en la petición:", error);
            window.location.reload(); // fuerza recarga
        }
    }
    

    const openCalendar=()=>{
        dispatchCalendario({ type: 'ABRIR_CALENDARIO'});
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedTomorrow = tomorrow.toISOString().split('T')[0]; // 'YYYY-MM-DD'
    const [fechaIda, setFechaIda] = useState(formattedTomorrow);
    const [fechaVuelta, setFechaVuelta] = useState(formattedTomorrow);


    useEffect(() => {
        setValue("ida", fechaIda);
        console.log(fechaIda)
    }, [fechaIda]);

    useEffect(() => {
        setValue("vuelta", fechaVuelta);
    }, [fechaVuelta]);





    return (
        <datosRutaContext.Provider value={{rutaSeleccionada, dispatchRuta}}>
        <form className='formularioBus' onSubmit={handleSubmit(handleForm)}>

            {/* Contenedor input Desde */}
            <div className="inputOrigen" id='inputOrigen'>
                <div className='containerImagen'>
                    <img src={imgUbicacion} alt="" />
                </div>

                <div className='containerInput'>
                <label className='labelInputAeropuertos' htmlFor="De">Desde</label>
                    <InputCalendarios
                        type="ida"
                        setFechaIda={(fecha) => {
                            setFechaIda(fecha);
                            setValue("ida", fecha);
                        }}
                        setFechaVuelta={(fecha) => {
                            setFechaVuelta(fecha);
                            setValue("vuelta", fecha);
                        }}
                        />

                    
                </div>
            </div>

                {/* Contenedor input Destino */}
                <div className="inputDestino" id='inputDestino'>
                    <div className='containerImagen'>
                        <img src={imgDestino} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label className='labelInputAeropuertos' htmlFor="De">Hacia</label>
                        <InputCalendarios type={"vuelta"}/>
                        {/* <input type="text" placeholder='A donde quieres ir' {...register("destino",{required:true})}
                        list="opcionesOrigen" // Vincula este input a la lista de opciones
                        />
                        <datalist id="opcionesOrigen">
                            {aeropuertos.map((aeropuerto, index) => (
                            <option key={index} value={aeropuerto} />
                            ))}
                        </datalist> */}
                    </div>
                </div>


                {/* Contenedor Fecha de ida */}
                <div className="inputDestino" id='inputFechas' onClick={openCalendar}>
                    <div className='containerImagen'>
                        <img src={imgCalendario} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Ida</label>
                        <input  autoComplete={false} placeholder='Seleccione tu fecha'  id='input_buscador_fecha' type="text" />
                    </div>
                </div>

                <input  autoComplete={false} placeholder=''  id='input_ida_buscador' type="hidden" {...register("ida",{required:true})}/>
                {/* <div className="inputIda" id='inputIda'>
                    <div className='containerImagen'>
                        <img src={imgCalendario} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Ida</label>
                        <input
                            type="date"
                            id="input_ida_buscador"
                            value={fechaIda}
                            autoComplete="off"
                            {...register("ida", { required: true })}
                            onChange={(e) => {
                                setFechaIda(e.target.value);
                                setValue("ida", e.target.value);
                                setFechaVuelta(e.target.value);      // <-- sincroniza también la vuelta
                                setValue("vuelta", e.target.value);  // <-- actualiza en react-hook-form
                            }}
                        />

                    </div>
                </div> */}


                {/* Contenedor Fecha de vuelta */}
                <input autoComplete={false} placeholder='' onClick={openCalendar} id='input_vuelta_buscador' type="hidden" {...register("vuelta",{required:true})}/>
                {/* <div className="inputVuelta" id='inputVuelta'>
                    <div className='containerImagen'>
                        <img src={imgCalendario} alt="" />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="De">Vuelta</label>
                        <input
                            type="date"
                            id="input_vuelta_buscador"
                            value={fechaVuelta}
                            autoComplete="off"
                            {...register("vuelta", { required: true })}
                            onChange={(e) => {
                                setFechaVuelta(e.target.value);
                                setValue("vuelta", e.target.value);
                            }}
                        />


                    </div>
                </div> */}


                {/* Contenedor Numero de personas */}
                <div className="inputNumPersonas" id='inputNumPersonas' style={{gap:"0"}}>
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
                <button
                    className='buttonForm'
                    type="button"
                    onClick={() => setMostrarPopup(true)}
                    >
                    Planear
                    </button>

                {mostrarPopup && <PopupAviso onClose={() => setMostrarPopup(false)} />}
                {abrirEspera && <Espera/>}
            </form>
            </datosRutaContext.Provider>
            
    )
}

export default Formulario
