import React, { useState, useEffect, createContext } from 'react';
import OfertaEspecial from './OfertaEspecial';
import { OfertaEspecialService } from '../../services/OfertaEspecialService';
import FiltrosSeleccionados from '../../utils/filtros/FiltrosSeleccionados';
import imgFiltros from '../../images/icon/filtrar.png'
import Filtros from '../../utils/filtros/Filtros';

export const filtrosContextOE = createContext();

function ContenedorMainInferior() {
    const ofertaEspecialService = new OfertaEspecialService();
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
                const nuevasOfertas = await ofertaEspecialService.findAll(origen);
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
            console.log(filtros.cantidadPersonas+ " "+oferta.personas)
            if (filtros.cantidadPersonas && parseFloat(oferta.personas) !== parseFloat(filtros.cantidadPersonas)) {
                return false;
            }
            if (filtros.categoria.length > 0 && !arrayIncludes(filtros.categoria, [oferta.alojamientoV1.estrellas])) {
                return false;
            }
            if (filtros.regimen.length > 0 && !arrayIncludes(filtros.regimen, [oferta.regimen])) {
                return false;
            }
    
            const fechaInicio = new Date(oferta.fechaInicio);
            const mesFechaInicio = fechaInicio.getMonth() + 1;
            const fechaFin = new Date(oferta.fechaFin);
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
                   <img onClick={abrirFiltros}  className='iconoFiltros' src={imgFiltros} alt="Filtros" />
                </div>
                {openFiltros && (
                    <div className='filtrosModal'>
                        <Filtros onCloseFilters={handleCloseFilters} uso={"oferta"} />
                    </div>
                )}
            <div className='containerOfertasEspeciales'>
                {!cargando && ofertasFiltradas.length > 0 && ofertasFiltradas.map((oferta) => (
                        <OfertaEspecial
                        key={oferta.id}
                        oferta={oferta}
                    />
                    ))}
                {/* {ofertas.map((oferta) => (
                    <OfertaEspecial
                        key={oferta.id}
                        oferta={oferta}
                    />
                ))}  */}
            </div>
        </div>
        </filtrosContextOE.Provider>
    );
}

export default ContenedorMainInferior;
