import React, { useState, useEffect, useRef, useContext } from 'react';
import './PruebasIndex.css';
import { datosRutaContext } from '../../Header/Formulario';
import { aeropuertos } from '../../../resources/Aeropuertos';
import Aeropuerto from '../../../utils/aeropuertos/Aeropuerto';

function InputCalendarios({ type }) {
    const { dispatchRuta } = useContext(datosRutaContext);

    const [showOptions, setShowOptions] = useState(false);
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleSelectAirport = (airport) => {
        if (type === "ida") {
            dispatchRuta({ type: 'GUARDAR_IDA', payload: airport.split("(")[0] });
        } else {
            dispatchRuta({ type: 'GUARDAR_VUELTA', payload: airport.split("(")[0] });
        }
        setSelectedAirport(airport);
        setSearchTerm(airport.split(",")[0]); // Establece el término de búsqueda como el nombre del aeropuerto seleccionado
        setShowOptions(false);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setSelectedAirport(null); // Reinicia el aeropuerto seleccionado cuando se modifica el término de búsqueda
        setShowOptions(value !== '');
    };

    const filteredAirports = aeropuertos.filter((airport) =>
        airport.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 25); // Limitar la lista a los primeros 25 aeropuertos coincidentes

    return (
        <div ref={containerRef}>
            <input
                type="text"
                placeholder="Select an airport"
                onClick={toggleOptions}
                onFocus={toggleOptions}
                value={searchTerm}
                onChange={handleInputChange}
            />
            {showOptions && searchTerm && (
                <ul className='contenedorAeropuertosDisponibles'>
                    {filteredAirports.map((airport, index) => {
                        const [fullLocation, iata] = airport.split(","); // Separar la ubicación completa y la IATA
                        const [ciudad, pais] = fullLocation.split(" ("); // Separar la ciudad y el país
                        return (
                            <li key={index} onClick={() => handleSelectAirport(airport)}>
                                {/* Manejar el caso en el que no hay IATA */}
                                <Aeropuerto ciudad={ciudad} pais={pais ? pais.slice(0, -1) : ''} iata={iata ? iata.trim() : ''} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default InputCalendarios;
