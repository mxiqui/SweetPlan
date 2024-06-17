import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/styles/CalendarioDoble.css';
import { CalendarioContext } from '../../components/Header/Header';

const CalendarioDoble = () => {
  const { dispatchCalendario } = useContext(CalendarioContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!document.querySelector('.containerCalendarioDoble').contains(event.target)) {
        dispatchCalendario({ type: 'CERRAR_CALENDARIO' });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatchCalendario]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start) {
      document.getElementById("input_ida_buscador").value = start.toISOString().split('T')[0];
    }
    if (end) {
      document.getElementById("input_vuelta_buscador").value = end.toISOString().split('T')[0];
      dispatchCalendario({ type: 'CERRAR_CALENDARIO' });
    }
  };

  return (
    <div className="containerCalendarioDoble">
      <div className="calendarioDoble">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          monthsShown={2}
          isClearable={true}
          dateFormat="yyyy-MM-dd"
        />
      </div>
    </div>
  );
};

export default CalendarioDoble;
