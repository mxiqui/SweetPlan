import React, { useContext, useState, useEffect, createContext, useReducer } from 'react';
import '../../../assets/styles/Detalles.css';
import CalendarioSimple from '../../../utils/calendario/CalendarioSImple';
import { pantallaEsperaContext } from './MasVisitadoIndex';
import { datosContext } from './OpcionesMasVisitados';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Importa Yup para las validaciones
import { aeropuertos } from '../../../resources/Aeropuertos'
import { server } from '../../../utils/Constantes'
export const DetallesFechaContext= createContext();





function Detalles() {
  const { dispatchPantalla } = useContext(pantallaEsperaContext);
  const { datos, dispatchDatos } = useContext(datosContext);
  const [abrirCalendario, setAbrirCalendario] = useState(false);


  const DetallesFechaReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_IDA':
                return {
                    ...state,
                    ida:action.payload,
                    vuelta:null
                }
            case 'ADD_VUELTA':
                return {
                    ...state,
                    vuelta:action.payload
                }
            default:
                return state;
        }
    };

    const [fechasDetalle, dispatchDetallesFechaReducer]=useReducer(DetallesFechaReducer, {ida:null, vuelta:null});



  const openCalendar = () => {
    setAbrirCalendario(true);
  };

  const abrirPantallaEspera = async (values, { setSubmitting }) => {

    

    try {
      dispatchPantalla({ type: 'ABRIR' });
      const response = await fetch(`${server}/findPlan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values,
          destino: datos.destino,
          fecha_ida: fechasDetalle.ida,
          fecha_vuelta: fechasDetalle.vuelta
        })
      });

      if (!response.ok) {
        throw new Error('Error al enviar datos');
      }

      const data = await response.json();
      console.log(data); // Aquí puedes manejar la respuesta del servidor
      sessionStorage.setItem('plan', JSON.stringify(data));

      dispatchPantalla({ type: 'CERRAR' }); // Ocultar pantalla de espera
      window.location.href = "/viajePlanificado";
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    document.getElementById('inputDestino').value = datos.destino || '';
  }, [datos.destino]);

  return (
    <DetallesFechaContext.Provider value={{fechasDetalle, dispatchDetallesFechaReducer}}>
        <div className="containerDetalles">
      <div className="detalles">
        <div className="formularioDetalles">
          <h2 className="titulo">Detalles del Viaje</h2>
          <Formik
            initialValues={{ origen: '', personas: '', ida: '', vuelta: '' }}
            validationSchema={Yup.object().shape({
              origen: Yup.string().required('El origen es requerido'),
              personas: Yup.number()
                .required('El número de personas es requerido')
                .positive('El número de personas debe ser mayor que cero')
                .integer('El número de personas debe ser un número entero'),
            })}
            onSubmit={abrirPantallaEspera}
          >
            {({ isSubmitting }) => (
              <Form>
                <input type="hidden" id="inputDestino" name="destino" />
                <div className="input-container">
                  <label htmlFor="inputOrigen" className="input-label">
                    Origen:
                  </label>
                  <Field
                    type="text"
                    id="inputOrigen"
                    name="origen"
                    className="bottom-border-input"
                    placeholder="Ingrese el origen"
                    list="opcionesOrigen"
                  />
                  <datalist id="opcionesDestino">
                    {aeropuertos.map((aeropuerto, index) => (
                      <option key={index} value={aeropuerto} />
                    ))}
                  </datalist>
                  <ErrorMessage
                    name="origen"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="inputPersons" className="input-label">
                    N. Personas:
                  </label>
                  <Field
                    type="text"
                    id="inputPersons"
                    name="personas"
                    className="bottom-border-input"
                    placeholder="Ingrese el número de personas"
                  />
                  <ErrorMessage
                    name="personas"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="input-container" onClick={openCalendar}>
                  <label htmlFor="inputIdaDetalles" className="input-label">
                    Ida:
                  </label>
                  <Field
                    type="text"
                    id="inputIdaDetalles"
                    name="ida"
                    className="bottom-border-input"
                    placeholder="Ingrese la fecha de ida"
                    autoComplete="off"
                  />
                </div>

                <div className="input-container" onClick={openCalendar}>
                  <label htmlFor="inputVueltaDetalles" className="input-label">
                    Vuelta:
                  </label>
                  <Field
                    type="text"
                    id="inputVueltaDetalles"
                    name="vuelta"
                    className="bottom-border-input"
                    placeholder="Ingrese la fecha de vuelta"
                    autoComplete="off"
                  />
                </div>

                {abrirCalendario && <CalendarioSimple/>}

                <p>Sin fechas exactas</p>

                <button
                  type="submit"
                  className="btn"
                  disabled={isSubmitting}
                >
                  Reservar
                </button>

                <PantallaEspera /> {/* Mostrar pantalla de espera cuando sea necesario */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </DetallesFechaContext.Provider>
  );
}

function PantallaEspera() {
  const { pantallaEspera } = useContext(pantallaEsperaContext);

  return pantallaEspera ? (
    <div className="pantalla-espera">
      <p>Cargando...</p>
    </div>
  ) : null;
}

export default Detalles;
