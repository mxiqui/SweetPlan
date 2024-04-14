import React, { useContext, useState } from 'react';
import '../../assets/styles/CalendarioMesesFlexibles.css';

import {datosContext} from '../../components/pages/MasVisitado/OpcionesMasVisitados'



function CalendarioMesesFlexibles() {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth(); 
    const yearActual = fechaActual.getFullYear(); 

    const { dispatchDatos } = useContext(datosContext);


    const obtenerNombreMes = (numeroMes) => {
        const meses = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        return meses[numeroMes];
    };

    const generarMesesSiguientes = () => {
        const mesesSiguientes = [];
        let mes = mesActual;
        let year = yearActual;
        for (let i = 0; i < 9; i++) {
            if (mes > 11) {
                mes = 0;
                year++;
            }
            mesesSiguientes.push({
                mes: obtenerNombreMes(mes),
                year: year
            });
            mes++;
        }
        return mesesSiguientes;
    };

    const [meses, setMeses] = useState(generarMesesSiguientes());
    const [mesSeleccionado, setMesSeleccionado] = useState(null);

    const handleClick = (mes) => {
        setMesSeleccionado(mes);
        dispatchDatos({ type: 'RELLENAR_FECHAS', payload:`${mes.mes}+ ${mes.year}`});
        console.log("Seleccionaste:", mes.mes, mes.year);
    };

    return (
        <div className='containerCalendarioMesesFlexibles'>
            {meses.map((mes, index) => (
                <div 
                    className={`mesCalendario ${mes === mesSeleccionado ? 'seleccionado' : ''}`} 
                    key={index} 
                    onClick={() => handleClick(mes)}
                >
                    <h3>{mes.mes}</h3>
                    <h4>{mes.year}</h4>
                </div>
            ))}
        </div>
    );
}

export default CalendarioMesesFlexibles;
