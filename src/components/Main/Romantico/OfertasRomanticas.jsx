import React, { createContext, useEffect, useReducer, useState } from "react";
import "../../../assets/styles/OfertasRomanticas.css";
import RomanticoNacional from "./RomanticoNacional";
import RomanticoInternacional from "./RomanticoInternacional";
import { OfertaRomanticaService } from "../../../services/OfertasRomanticasService";
import Interruptor from "../../../utils/components/Interruptor";
import Filtros from "../../../utils/filtros/Filtros";
import FiltrosSeleccionados from "../../../utils/filtros/FiltrosSeleccionados";
import imgFiltros from '../../../images/icon/filtrar.png';
import { OfertaService } from "../../pages/Ofertas/OfertaService";


export const TipoOfertaRomanticaContext = createContext();
export const filtrosContextRom = createContext();


function OfertasRomanticas() {

    //**************** DECLARACIONES ****************
    const ofertaService = new OfertaService();
    const [origen, setOrigen] = useState("Madrid");
    const [ofertas, setOfertas] = useState([]);
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
                const nuevasOfertas = await ofertaService.findByOrigen(origen, "Romantica");
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

    

    const tipoOfertaReducer = (state, action) => {
        switch (action.type) {
            case "INTERNACIONAL":
                return "INTERNACIONAL";
            case "NACIONAL":
                return "NACIONAL";
            default:
                return state;
        }
    };

    const [tipoOferta, dispatch] = useReducer(tipoOfertaReducer, "INTERNACIONAL");

    return (
        <filtrosContextRom.Provider value={{ selectedFilters: filtros, setSelectedFilters: setFiltros }}>
            <div className="containerPrincipalOfertasRomanticas">
            {/* <TipoOfertaRomanticaContext.Provider value={{ tipoOferta, dispatch }}>
                <Interruptor />
            </TipoOfertaRomanticaContext.Provider> */}
            
            <h2 className='tituloOferta'>Ofertas en Pareja</h2>
            <div className="containerSeleccionarOrigenes">
                <select onChange={handleChange}>
                    <option value="Madrid">Madrid</option>
                    <option value="Malaga">Málaga</option>
                    <option value="Barcelona">Barcelona</option>
                </select>
                <FiltrosSeleccionados filtros={filtros} eliminarFiltro={eliminarFiltro} />
                <img onClick={abrirFiltros} className='iconoFiltros' src={imgFiltros} alt="Filtros" />
            </div>
            {openFiltros && (
                    <div className='filtrosModal'>
                        <Filtros onCloseFilters={handleCloseFilters} />
                    </div>
                )}

            <div className="containerOfertasRomanticas">
                {/* Mostrar "Cargando ofertas" si aún se están cargando las ofertas */}
                {cargando && <p>Cargando ofertas...</p>}
                {/* Mostrar las ofertas si no están vacías */}
                {!cargando && ofertasFiltradas.length > 0 && ofertasFiltradas.map((oferta) => (
                    <RomanticoInternacional key={oferta.getId()} oferta={oferta} />
                ))}
                {/* Mostrar un mensaje si no hay ofertas disponibles */}
                {!cargando && ofertasFiltradas.length === 0 && <p>No hay ofertas disponibles.</p>}
            </div>
        </div>
        </filtrosContextRom.Provider>
    );
}

export default OfertasRomanticas;
