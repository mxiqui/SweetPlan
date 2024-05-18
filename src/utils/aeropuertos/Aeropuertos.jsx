import React, { useState } from 'react';
import airportsData from '../../utils/aeropuertos/Aeropuertos.json';

function Aeropuertos() {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleSelectAirport = (airport) => {
        setSelectedAirport(airport);
        console.log('Selected airport ID:', airport.id);
        setShowOptions(false);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setShowOptions(true); // Mostrar las opciones cuando se está escribiendo
    };

    // Filtrar los aeropuertos basados en el término de búsqueda
    const filteredAirports = airportsData.data.filter((airport) =>
        airport.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Select an airport"
                onClick={toggleOptions}
                value={selectedAirport ? selectedAirport.name : searchTerm}
                onChange={handleInputChange}
                readOnly={!showOptions} // Deshabilitar la edición directa cuando se muestran las opciones
            />
            {showOptions && (
                <ul className='contenedorAeropuertosDisponibles'>
                    {filteredAirports.map((airport) => (
                        <li key={airport.iata} onClick={() => handleSelectAirport(airport)}>
                            {airport.name} - {airport.location}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Aeropuertos;
