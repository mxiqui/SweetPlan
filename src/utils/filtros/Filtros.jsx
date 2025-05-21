import React, { useContext, useState } from 'react';
import '../../assets/styles/FiltrosMovil.css';
import { filtrosContext } from '../../components/Main/Escapadas/EscapadasFinDeSemana'; // Ajusta la ruta según tu estructura de carpetas
import { filtrosContextRom } from '../../components/Main/Romantico/OfertasRomanticas';
import { filtrosContextOE } from '../../components/MainInferior/ContenedorMainInferior';
import { filtrosContextPlaya } from '../../components/Main/Escapadas/OfertasPorTags';

import imgFlecha from '../../images/icon/flecha.png';
import imgEstrella from '../../images/icon/estrella.png';

function Filtros({ onCloseFilters, uso }) {

    const context = uso === 'playa'
  ? filtrosContextPlaya
  : uso === 'escapadas'
    ? filtrosContext
    : uso === 'oferta'
      ? filtrosContextOE
      : filtrosContextRom;

    const { selectedFilters, setSelectedFilters } = useContext(context);

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        setSelectedFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters };
            if (checked) {
                updatedFilters[name] = [...updatedFilters[name], value];
            } else {
                updatedFilters[name] = updatedFilters[name].filter((item) => item !== value);
            }
            return updatedFilters;
        });
    };

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleClearFilters = () => {
        setSelectedFilters({
            cantidadPersonas: '',
            categoria: [],
            regimen: [],
            fecha: []
        });
        onCloseFilters();
    };

    const handleSearchFilters = () => {
        onCloseFilters();
    };

    return (
        <div className="containerFiltrosPrincipal">
            <div className='containerFiltrosMovil'>
            <div className="containerFiltrosCabecera">
                <img onClick={()=>{onCloseFilters()}} src={imgFlecha} alt="" />
                <h3>Filtros</h3>
            </div>
            <div className="containerFiltroNumeroPersonas">
                <h4>Cantidad de personas</h4>
                <div className="containerFiltroNumeroPersonasOpciones">
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                        <label key={num}>
                            <input
                                type="radio"
                                name="cantidadPersonas"
                                value={num}
                                checked={selectedFilters.cantidadPersonas === `${num}`}
                                onChange={handleRadioChange}
                            /> {num}
                        </label>
                    ))}
                </div>
            </div>
            <div className="containerFiltroCategoria">
                <h4>Categoria</h4>
                <div className="containerFiltroCategoriaOpciones">
                    {Array.from({ length: 5 }, (_, i) => i + 1).reverse().map((num) => (
                        <label key={num}>
                            <input
                                type="checkbox"
                                name="categoria"
                                value={num}
                                checked={selectedFilters.categoria.includes(`${num}`)}
                                onChange={handleCheckboxChange}
                            />
                            {Array.from({ length: num }).map((_, j) => (
                                <img key={j} src={imgEstrella} alt="estrella" />
                            ))}
                        </label>
                    ))}
                </div>
            </div>

            <div className="containerFiltroRegimen">
                <h4>Comida</h4>
                <div className="containerFiltroRegimenOpciones">
                    {['Todo incluido', 'Solo alojamiento y vuelo', 'Solo Desayuno', 'Media pensión', 'Pensión completa'].map((regimen) => (
                        <label key={regimen}>
                            <input
                                type="checkbox"
                                name="regimen"
                                value={regimen}
                                checked={selectedFilters.regimen.includes(regimen)}
                                onChange={handleCheckboxChange}
                            /> {regimen}
                        </label>
                    ))}
                </div>
            </div>

            <div className="containerFiltroFecha">
                <h4>Fechas</h4>
                <div className="containerFiltroFechaOpciones">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map((mes) => (
                        <label key={mes}>
                            <input
                                type="checkbox"
                                name="fecha"
                                value={mes}
                                checked={selectedFilters.fecha.includes(mes)}
                                onChange={handleCheckboxChange}
                            /> {new Date(0, mes - 1).toLocaleString('es', { month: 'long' })}
                        </label>
                    ))}
                </div>
            </div>

            <div className="containerFiltroBotones">
                <button onClick={handleClearFilters}>Limpiar</button>
                <button id='btnBuscarFiltros' onClick={handleSearchFilters}>Buscar</button>
            </div>
        </div>
        </div>
    );
}

export default Filtros;
