import React, { createContext, useEffect, useState } from 'react';
import '../../../assets/styles/EscapadasFinDeSemana.css';
import Escapada from './Escapada';
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';
import imgFiltros from '../../../images/icon/filtrar.png';
import Filtros from '../../../utils/filtros/Filtros';
import FiltrosSeleccionados from '../../../utils/filtros/FiltrosSeleccionados';

export const filtrosContext = createContext();

function EscapadasFinDeSemana() {

    //**************** DECLARACIONES ****************
    const [ofertas, setOfertas] = useState([]);
    const [origen, setOrigen] = useState("Madrid");
    const [cargando, setCargando] = useState(true);
    const [ofertasFiltradas, setOfertasFiltradas] = useState([]);
    const [filtros, setFiltros] = useState({
        cantidadPersonas: '',
        categoria: [],
        regimen: [],
        fecha: []
    });
    const [openFiltros, setOpenFiltros] = useState(false);

    
    //**************** USE EFFECT ****************
    useEffect(() => {
        const obtenerOfertas = async () => {
            try {
                const escapadaService = new EscapadaFindesemanaService();
                const nuevasOfertas = await escapadaService.findByOrigen(origen);
                if (nuevasOfertas !== undefined) {
                    setOfertas(nuevasOfertas);
                }
                setCargando(false);
            } catch (error) {
                console.error('Error al obtener las ofertas:', error);
                setCargando(false);
            }
        };
    
        obtenerOfertas();
    }, [origen]);


    useEffect(() => {
        const arrayIncludes = (array, target) => {
            if (!Array.isArray(target)) {
                console.log(target);
                return false;
            }
            return target.every(item => array.includes(item));
        };
    
        const ofertasFiltradas = ofertas.filter(oferta => {
            if (filtros.cantidadPersonas && parseFloat(oferta.getPersonas()) !== parseFloat(filtros.cantidadPersonas)) {
                return false;
            }
            if (filtros.categoria.length > 0 && !arrayIncludes(filtros.categoria, [oferta.getAlojamiento().estrellas])) {
                return false;
            }
            if (filtros.regimen.length > 0 && !arrayIncludes(filtros.regimen, [oferta.getRegimen()])) {
                return false;
            }
    
            const fechaInicio = new Date(oferta.getFechaInicio());
            const mesFechaInicio = fechaInicio.getMonth() + 1;
            const fechaFin = new Date(oferta.getFechaFin());
            const mesFechaFin = fechaFin.getMonth() + 1;
    
            if (filtros.fecha.length > 0) {
                const filtrosFechaNumericos = filtros.fecha.map(mes => parseInt(mes, 10)); // Convertimos a números
                if (!filtrosFechaNumericos.includes(mesFechaInicio) || !filtrosFechaNumericos.includes(mesFechaFin)) {
                    return false;
                }
            }
    
            return true;
        });
    
        setOfertasFiltradas(ofertasFiltradas);
    }, [filtros, ofertas]);
    
    

    //****************FUNCIONES****************
    const handleChange = (e) => {
        setOrigen(e.target.value);
    };

    const abrirFiltros = () => {
        setOpenFiltros(true);
    };

    const handleCloseFilters = () => {
        setOpenFiltros(false);
    };

    const eliminarFiltro = (tipo, valor) => {
        setFiltros(prevFiltros => {
            if (Array.isArray(prevFiltros[tipo])) {
                return {
                    ...prevFiltros,
                    [tipo]: prevFiltros[tipo].filter(item => item !== valor)
                };
            } else {
                return {
                    ...prevFiltros,
                    [tipo]: ''
                };
            }
        });
    };

    //**************** RENDERIZADO ****************
    return (
        <filtrosContext.Provider value={{ selectedFilters: filtros, setSelectedFilters: setFiltros }}>
            <div className='containerPrincipalEscapadas'>
                <h2 className='tituloOferta'>Escapadas Fin de semana</h2>
                <div className='seleccionadorDestino'>
                    <select onChange={handleChange} value={origen}>
                        <option value="Madrid">Madrid</option>
                        <option value="Malaga">Málaga</option>
                        <option value="Barcelona">Barcelona</option>
                    </select>
                    <FiltrosSeleccionados filtros={filtros} eliminarFiltro={eliminarFiltro} />
                    <img onClick={abrirFiltros} className='iconoFiltros' src={imgFiltros} alt="Filtros" />
                </div>
                {openFiltros && (
                    <div className='filtrosModal'>
                        <Filtros onCloseFilters={handleCloseFilters} uso={"escapadas"} />
                    </div>
                )}
                <div className="containerEscapadasFinDeSemana">
                    {cargando && <p>Cargando ofertas...</p>}
                    {!cargando && ofertasFiltradas.length > 0 && ofertasFiltradas.map((oferta) => (
                        <Escapada key={oferta.getId()} oferta={oferta} />
                    ))}
                    {!cargando && ofertasFiltradas.length === 0 && <p>No hay ofertas disponibles.</p>}
                </div>
            </div>
        </filtrosContext.Provider>
    );
}

export default EscapadasFinDeSemana;
