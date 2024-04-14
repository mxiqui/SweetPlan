import React, { useContext, useState } from 'react';
import '../../assets/styles/CalendarMostVisited.css';



const CalendarMostVisited = () => {
const [selectedDate, setSelectedDate] = useState(null);
const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

const meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


const [fechas, setFechas]=useState({
    ida:null,
    vuelta:null
})



const handleDateClick = (date) => {
    let fechaSeleccionada=`${date}/${currentMonth + 1}/${currentYear}`

    if(fechas.ida==null){
        fechas.ida=fechaSeleccionada;
        document.getElementById("inputIda").value=fechaSeleccionada;
    }else if(fechas.vuelta==null){
        fechas.vuelta=fechaSeleccionada
        document.getElementById("inputVuelta").value=fechaSeleccionada;
    }else if(fechas.ida!=null && fechas.vuelta!=null){
        fechas.ida=fechaSeleccionada
        document.getElementById("inputIda").value=fechaSeleccionada;
        fechas.vuelta=null
    }

    setSelectedDate(date);
};


const handlePrevMonth = () => {
    if (currentMonth === 0) {
    setCurrentMonth(11);
    setCurrentYear(currentYear - 1);
    } else {
    setCurrentMonth(currentMonth - 1);
    }
};

const handleNextMonth = () => {
    if (currentMonth === 11) {
    setCurrentMonth(0);
    setCurrentYear(currentYear + 1);
    } else {
    setCurrentMonth(currentMonth + 1);
    }
};

// Función para obtener los días de un mes en particular
const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

// Obtiene el número del día de la semana del primer día del mes
const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
};

const daysInMonth = getDaysInMonth(currentMonth, currentYear);
const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

const days = [];
for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
}

return (
    <div className='containerCalendario2'>
        <div className="calendario">
    <div className="month-header">
        <button onClick={handlePrevMonth}>{'<'}</button>
        <h2>{`${meses[currentMonth]} ${currentYear}`}</h2>
        <button onClick={handleNextMonth}>{'>'}</button>
    </div>
    <div className="days">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
        {Array(firstDayOfMonth)
        .fill(null)
        .map((_, index) => (
            <div key={index} className="empty-day"></div>
        ))}
        {days.map((day) => (
        <div
            key={day}
            className={`calendar-day ${selectedDate === day ? 'selected' : ''}`}
            onClick={() => handleDateClick(day)}
        >
            {day}
        </div>
        ))}
    </div>
    </div>
    </div>
);
};

export default CalendarMostVisited;
