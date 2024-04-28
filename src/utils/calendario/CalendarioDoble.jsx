import React, { useContext, useState } from 'react';
import moment from 'moment';
import '../../assets/styles/CalendarioDoble.css';
import imgIcono from '../../images/icon/flecha.png'

import 'moment/locale/es';
import { CalendarioContext } from '../../components/Header/Header';


const CalendarioDoble = () => {
    const {dispatchCalendario}= useContext(CalendarioContext)
    const [mesActual, setMesActual] = useState(moment());
    const [ida, setIda] = useState(null);
    const [vuelta, setVuelta] = useState(null);






    const irAlMesSiguiente = () => {
        setMesActual(mesActual.clone().add(1, 'month'));
    };

    const irAlMesAnterior = () => {
        setMesActual(mesActual.clone().subtract(1, 'month'));
    };






    const generarDiasDelMes = (mes) => {
        const diasEnElMes = mes.daysInMonth();
        const primerDiaDelMes = mes.clone().startOf('month').format('d');
        const dias = [];

        for (let i = 0; i < primerDiaDelMes; i++) {
            dias.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        for (let dia = 1; dia <= diasEnElMes; dia++) {
            const fecha = mes.clone().date(dia);
            const esIda = ida && fecha.isSame(ida, 'day');
            const esVuelta = vuelta && fecha.isSame(vuelta, 'day');
            const enRango = ida && vuelta && fecha.isBetween(ida, vuelta, 'day', '[]');

            dias.push(
                <div
                    key={dia}
                    className={`day ${esIda ? 'ida' : ''} ${esVuelta ? 'vuelta' : ''} ${enRango ? 'rango' : ''}`}
                    onClick={() => handleDiaClick(fecha)}>
                    {dia}
                </div>
            );
        }

        return dias;
    };





    const handleDiaClick = (fecha) => {
        // Usar format para convertir la fecha seleccionada al formato deseado
        const formattedDate = fecha.format('YYYY-MM-DD');
        if (!ida || fecha.isBefore(ida, 'day') || vuelta) {
            setIda(fecha);
            setVuelta(null);
            document.getElementById("input_ida_buscador").value = formattedDate;
        } else if (!vuelta || fecha.isAfter(ida, 'day')) {
            setVuelta(fecha);
            document.getElementById("input_vuelta_buscador").value = formattedDate;
            dispatchCalendario({ type: 'CERRAR_CALENDARIO'});
        } else {
            setIda(fecha);
            setVuelta(null);
            document.getElementById("input_ida_buscador").value = formattedDate;
        }
    };

    return (
        <div className="containerCalendarioDoble">
            <div className="calendarioDoble">
                <img className='iconoMesAnterior' onClick={irAlMesAnterior} src={imgIcono} alt="" />

                <div className="mes">
                    <h2>{mesActual.format('MMMM YYYY')}</h2>
                    <div></div>
                    <div className="calendario-grid">{generarDiasDelMes(mesActual)}</div>
                </div>
                <div className="mes">
                    <h2>{mesActual.clone().add(1, 'month').format('MMMM YYYY')}</h2>
                    <div></div>
                    <div className="calendario-grid">{generarDiasDelMes(mesActual.clone().add(1, 'month'))}</div>
                </div>
                <img className='iconoSiguienteMes' onClick={irAlMesSiguiente} src={imgIcono} alt="" />
            </div>
        </div>
    );
};

export default CalendarioDoble;
