import React, { createContext, useEffect, useState } from 'react';
import '../../../assets/styles/EscapadasFinDeSemana.css';
import Escapada from './Escapada';
import imgFiltros from '../../../images/icon/icnMezcladorBlanco.png';
import Filtros from '../../../utils/filtros/Filtros';
import FiltrosSeleccionados from '../../../utils/filtros/FiltrosSeleccionados';
import { OfertaService } from '../../pages/Ofertas/OfertaService';
import Lottie from "lottie-react";
import loadingAnimation from '../../../assets/json/loader.json';

export const filtrosContextPlaya = createContext();

function OfertasPorTags() {
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
                const ofertaService = new OfertaService();
                const nuevasOfertas = await ofertaService.findByOrigenAndTags(origen, "playa");
                if (nuevasOfertas !== undefined) {
                    setOfertas(nuevasOfertas);
                }
                setCargando(false);
            } catch (error) {
                console.error('Error al obtener las ofertas por tags:', error);
                setCargando(false);
            }
        };

        obtenerOfertas();
    }, [origen]);

    useEffect(() => {
        const arrayIncludes = (array, target) => {
            if (!Array.isArray(target)) return false;
            return target.every(item => array.includes(item));
        };

        const filtradas = ofertas.filter(oferta => {
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
                const filtrosFechaNumericos = filtros.fecha.map(mes => parseInt(mes, 10));
                if (!filtrosFechaNumericos.includes(mesFechaInicio) || !filtrosFechaNumericos.includes(mesFechaFin)) {
                    return false;
                }
            }

            return true;
        });

        setOfertasFiltradas(filtradas);
    }, [filtros, ofertas]);

    const handleChange = (e) => {
        setOrigen(e.target.value);
    };

    const abrirFiltros = () => setOpenFiltros(true);
    const handleCloseFilters = () => setOpenFiltros(false);

    const eliminarFiltro = (tipo, valor) => {
        setFiltros(prev => ({
            ...prev,
            [tipo]: Array.isArray(prev[tipo]) ? prev[tipo].filter(v => v !== valor) : ''
        }));
    };

    return (
        <filtrosContextPlaya.Provider value={{ selectedFilters: filtros, setSelectedFilters: setFiltros }}>
            <div className='containerPrincipalEscapadas'>
                <div className='seleccionadorDestino'>
                    <select className='selectOrigen' onChange={handleChange} value={origen}>
                        <option value="all">Toda España</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Málaga">Málaga</option>
                        <option value="Barcelona">Barcelona</option>
                    </select>
                    <FiltrosSeleccionados filtros={filtros} eliminarFiltro={eliminarFiltro} />
                    <div onClick={abrirFiltros} className="containerIconoFiltros">
                        <p>Filtros</p>
                        <img className='iconoFiltros' src={imgFiltros} alt="Filtros" />
                    </div>
                </div>
                {openFiltros && (
                    <div className='filtrosModal'>
                        <Filtros onCloseFilters={handleCloseFilters} uso={"playas"} />
                    </div>
                )}
                <div className="containerEscapadasFinDeSemana">
                    {cargando && (
                        <div className="spinner-container">
                            <Lottie animationData={loadingAnimation} loop={true} style={{ height: 100, width: 100 }} />
                        </div>
                    )}
                    {!cargando && ofertasFiltradas.length > 0 && ofertasFiltradas.map((oferta) => (
                        <Escapada key={oferta.getId()} oferta={oferta} />
                    ))}
                    {!cargando && ofertasFiltradas.length === 0 && <p>No hay ofertas disponibles.</p>}
                </div>
            </div>
        </filtrosContextPlaya.Provider>
    );
}

export default OfertasPorTags;
