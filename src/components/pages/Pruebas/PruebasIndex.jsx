import React, { useState } from 'react';
import './PruebasIndex.css';
import airportsData from '../../../utils/aeropuertos/Aeropuertos.json';

function PruebasIndex() {
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
        setShowOptions(value !== '');
    };

    const filteredAirports = airportsData.data.filter((airport) =>
        airport.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='contenedorPruebas'>
            <input
                type="text"
                placeholder="Select an airport"
                onClick={toggleOptions}
                value={selectedAirport ? selectedAirport.name : searchTerm}
                onChange={handleInputChange}
                readOnly={!showOptions}
            />
            {showOptions && searchTerm && ( // Solo mostrar la lista si showOptions es verdadero y hay un término de búsqueda
                <ul className='listaAeropuertos'>
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

export default PruebasIndex;
