import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import '../../assets/styles/CalendarioSimple.css';
import imgIcono from '../../images/icon/flecha.png'
import 'moment/locale/es';
import { DetallesFechaContext } from '../../components/pages/MasVisitado/Detalles';


const CalendarioSimple = () => {

    const { fechasDetalle, dispatchDetallesFechaReducer } = useContext(DetallesFechaContext);


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
        if (!ida || fecha.isBefore(ida, 'day') || vuelta) {
            setIda(fecha);
            setVuelta(null);
            document.getElementById("inputIdaDetalles").value=fecha.toDate()
            dispatchDetallesFechaReducer({ type: "ADD_IDA", payload:fecha.toDate()});
        } else if (!vuelta || fecha.isAfter(vuelta, 'day')) {
            setVuelta(fecha);
            document.getElementById("inputVueltaDetalles").value=fecha.toDate()
            dispatchDetallesFechaReducer({ type: "ADD_VUELTA", payload:fecha.toDate()});
        } else {
            setIda(fecha);
            dispatchDetallesFechaReducer({ type: "ADD_IDA", payload:fecha.toDate()});
            setVuelta(null);
        }
    };

    return (
        <div className="calendario3">
            <div className="containerCalendario3">
                <img className='iconoMesAnterior' onClick={irAlMesAnterior} src={imgIcono} alt="" />

                <div className="mes">
                    <h2>{mesActual.format('MMMM YYYY')}</h2>
                    <div></div>
                    <div className="calendario-grid">{generarDiasDelMes(mesActual)}</div>
                </div>
                <img className='iconoSiguienteMes' onClick={irAlMesSiguiente} src={imgIcono} alt="" />
            </div>
        </div>
    );
};

export default CalendarioSimple;
