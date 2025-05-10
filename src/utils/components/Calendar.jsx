import React, { useContext, useEffect, useState } from 'react';
import './Calendar.css';
import { CalendarioContext } from '../../components/Header/Header';

const priceData = {
  '2025-5-3': { price: 80 },
  '2025-5-15': { price: 26, cheapest: true },
  '2025-6-4': { price: 25, cheapest: true },
  '2025-6-30': { price: 101 },
};

const Calendar = () => {
    const { dispatchCalendario } = useContext(CalendarioContext);
  const [currentMonth, setCurrentMonth] = useState(4); // Mayo
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [selectedTo, setSelectedTo] = useState(null);
  

  const changeMonth = (delta) => {
    let newMonth = currentMonth + delta;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const isSameDate = (a, b) => a?.getTime() === b?.getTime();

  const isInRange = (date) => {
    return selectedFrom && selectedTo && date > selectedFrom && date < selectedTo;
  };

  const [tipo, setTipo] = useState('Ida');

  // Dentro de Calendar.jsx

const handleDateClick = (year, month, day) => {
    const clickedDate = new Date(year, month, day);
  
    if (!selectedFrom || (selectedFrom && selectedTo)) {
      // Si no hay selección o ya hay ida y vuelta, reiniciar
      setSelectedFrom(clickedDate);
      setSelectedTo(null);
      const year = clickedDate.getFullYear();
      const month = String(clickedDate.getMonth() + 1).padStart(2, '0');
      const day = String(clickedDate.getDate()).padStart(2, '0');
      document.getElementById("input_ida_buscador").value = `${year}-${month}-${day}`;
      setTipo("Vuelta")
          } else if (clickedDate > selectedFrom) {
      // Fecha posterior a la ida -> guardar como vuelta
      setSelectedTo(clickedDate);
      dispatchCalendario({ type: 'CERRAR_CALENDARIO' });
      const year = clickedDate.getFullYear();
      const month = String(clickedDate.getMonth() + 1).padStart(2, '0');
      const day = String(clickedDate.getDate()).padStart(2, '0');
      document.getElementById("input_vuelta_buscador").value = `${year}-${month}-${day}`;
      // NUEVO: Formatear en formato '12 Jul - 16 Jul' para el input_buscador_fecha
      const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const fromDay = String(selectedFrom.getDate()).padStart(2, '0');
      const fromMonth = monthsShort[selectedFrom.getMonth()];
      const toDay = String(clickedDate.getDate()).padStart(2, '0');
      const toMonth = monthsShort[clickedDate.getMonth()];

      const formattedRange = `${fromDay} ${fromMonth} - ${toDay} ${toMonth}`;
      document.getElementById("input_buscador_fecha").value = formattedRange;
      setTipo("Ida")      
    } else {
      // Fecha igual o anterior -> reiniciar ida
      setSelectedFrom(clickedDate);
      setSelectedTo(null);
      const year = clickedDate.getFullYear();
      const month = String(clickedDate.getMonth() + 1).padStart(2, '0');
      const day = String(clickedDate.getDate()).padStart(2, '0');
      document.getElementById("input_ida_buscador").value = `${year}-${month}-${day}`;
      setTipo("Vuelta")
    }
  };

  useEffect(() => {
      const handleClickOutside = (event) => {
        if (!document.querySelector('.calendar-wrapper').contains(event.target)) {
          dispatchCalendario({ type: 'CERRAR_CALENDARIO' });
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dispatchCalendario]);
  

  const renderMonth = (monthOffset) => {
    const displayMonth = (currentMonth + monthOffset) % 12;
    const yearOffset = Math.floor((currentMonth + monthOffset) / 12);
    const year = currentYear + yearOffset;

    const firstDay = new Date(year, displayMonth, 1);
    const lastDay = new Date(year, displayMonth + 1, 0);
    const startDay = (firstDay.getDay() + 6) % 7;

    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${monthOffset}-${i}`} className="empty"></div>);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, displayMonth, day);
      const key = `${year}-${displayMonth + 1}-${day}`;
      const info = priceData[key] || {};
      const classNames = ['day'];

      if (isSameDate(date, selectedFrom) || isSameDate(date, selectedTo) || isInRange(date)) {
        classNames.push('selected');
      }

      let price = info.price ? `${info.price} €` : '';
      if (info.cheapest) price = <span className="cheapest">{price} ●</span>;

      days.push(
        <div key={key} className={classNames.join(' ')} onClick={() => handleDateClick(year, displayMonth, day)}>
          <div>{day}</div>
          {/* <div className="price">{price}</div> */}
        </div>
      );
    }

    const monthLabel = new Date(year, displayMonth).toLocaleString('es-ES', {
      month: 'long',
      year: 'numeric',
    });

    return (
      <div className="calendar-month" key={displayMonth}>
        <div className="calendar-title">{monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1)}</div>
        <div className="calendar-days">
          <div>LUN</div><div>MAR</div><div>MIÉ</div><div>JUE</div><div>VIE</div><div>SÁB</div><div>DOM</div>
        </div>
        <div className="calendar-grid">{days}</div>
      </div>
    );
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-nav">
        <button onClick={() => changeMonth(-1)}>❮</button>
        <p id='showType'>{tipo}</p>
        <button onClick={() => changeMonth(1)}>❯</button>
      </div>
      <div className="calendar-double">
        {renderMonth(0)}
        {renderMonth(1)}
      </div>
      
    </div>
  );
};

export default Calendar;
