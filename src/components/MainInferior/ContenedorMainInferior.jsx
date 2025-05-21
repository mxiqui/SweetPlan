import React, { useState, useEffect, createContext } from 'react';
import OfertaEspecial from './OfertaEspecial';
import FiltrosSeleccionados from '../../utils/filtros/FiltrosSeleccionados';
import imgFiltros from '../../images/icon/icnMezcladorBlanco.png';
import Filtros from '../../utils/filtros/Filtros';
import { OfertaService } from '../pages/Ofertas/OfertaService';

// Lottie loader
import Lottie from "lottie-react";
import loadingAnimation from '../../assets/json/loader.json'; // Ajusta si la ruta es diferente

export const filtrosContextOE = createContext();

function ContenedorMainInferior() {
    const ofertaService = new OfertaService();
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

    useEffect(() => {
        const obtenerOfertas = async () => {
            try {
                const nuevasOfertas = await ofertaService.findByOrigenAndTipo(origen, "OfertaEspecial");
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
                return false;
            }
            return target.every(item => array.includes(item));
        };

        const ofertasFiltradas = ofertas.filter(oferta => {
            if (filtros.cantidadPersonas && parseFloat(oferta.personas) !== parseFloat(filtros.cantidadPersonas)) {
                return false;
            }
            if (filtros.categoria.length > 0 && !arrayIncludes(filtros.categoria, [oferta._alojamiento._estrellas])) {
                return false;
            }
            if (filtros.regimen.length > 0 && !arrayIncludes(filtros.regimen, [oferta._regimen])) {
                return false;
            }

            const fechaInicio = new Date(oferta._fechaInicio);
            const mesFechaInicio = fechaInicio.getMonth() + 1;
            const fechaFin = new Date(oferta._fechaFin);
            const mesFechaFin = fechaFin.getMonth() + 1;

            if (filtros.fecha.length > 0) {
                const filtrosFechaNumericos = filtros.fecha.map(mes => parseInt(mes, 10));
                if (!filtrosFechaNumericos.includes(mesFechaInicio) || !filtrosFechaNumericos.includes(mesFechaFin)) {
                    return false;
                }
            }

            return true;
        });

        setOfertasFiltradas(ofertasFiltradas);
    }, [filtros, ofertas]);

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

    return (
        <filtrosContextOE.Provider value={{ selectedFilters: filtros, setSelectedFilters: setFiltros }}>
            <div className='containerContenedorMainInferior' id='containerContenedorMainInferior'>
                <h2>OFERTAS ESPECIALES</h2>
                <p className='containerContenedorMainInferior-p'>¡Visita destinos a precios increíbles!</p>
                
                <div className='seleccionadorDestino'>
                    <select onChange={handleChange} value={origen}>
                        <option value="Madrid">Madrid</option>
                        <option value="Malaga">Málaga</option>
                        <option value="Barcelona">Barcelona</option>
                    </select>
                    <FiltrosSeleccionados filtros={filtros} eliminarFiltro={eliminarFiltro} />
                    <div className="containerIconoFiltros">
                        <h5>Filtros</h5>
                        <img onClick={abrirFiltros} className='iconoFiltros' src={imgFiltros} alt="Filtros" />
                    </div>
                </div>

                {openFiltros && (
                    <div className='filtrosModal'>
                        <Filtros onCloseFilters={handleCloseFilters} uso={"oferta"} />
                    </div>
                )}

                <div className='containerOfertasEspeciales'>
                    {cargando && (
                        <div className="spinner-container">
                            <Lottie animationData={loadingAnimation} loop={true} style={{ height: 100, width: 100 }} />
                        </div>
                    )}

                    {!cargando && ofertasFiltradas.length > 0 && ofertasFiltradas.map((oferta) => (
                        <OfertaEspecial
                            key={oferta.id}
                            oferta={oferta}
                        />
                    ))}

                    {!cargando && ofertasFiltradas.length === 0 && <p>No hay ofertas disponibles.</p>}
                </div>
            </div>
        </filtrosContextOE.Provider>
    );
}

export default ContenedorMainInferior;
