import React, { createContext, useEffect, useReducer, useState } from "react";
import "../../../assets/styles/OfertasRomanticas.css";
import RomanticoNacional from "./RomanticoNacional";
import RomanticoInternacional from "./RomanticoInternacional";
import { OfertaRomanticaService } from "../../../services/OfertasRomanticasService";
import Interruptor from "../../../utils/components/Interruptor";

export const TipoOfertaRomanticaContext = createContext();

function OfertasRomanticas() {
    const ofertaRomanticaService = new OfertaRomanticaService();
    const [origen, setOrigen] = useState("Madrid");
    const [ofertasInternacionales, setOfertasInternacionales] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerOfertas = async () => {
            try {
                const nuevasOfertas = await ofertaRomanticaService.findByOrigen(origen);
                if (nuevasOfertas !== undefined) {
                    setOfertasInternacionales(nuevasOfertas);
                }
                setCargando(false);
            } catch (error) {
                console.error('Error al obtener las ofertas:', error);
                setCargando(false);
            }
        };
    
        obtenerOfertas();
    }, [origen]);



    const handleChange = (e) => {
        setOrigen(e.target.value);
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
            </div>

            <div className="containerOfertasRomanticas">
                {/* Mostrar "Cargando ofertas" si aún se están cargando las ofertas */}
                {cargando && <p>Cargando ofertas...</p>}
                {/* Mostrar las ofertas si no están vacías */}
                {!cargando && ofertasInternacionales.length > 0 && ofertasInternacionales.map((oferta) => (
                    <RomanticoInternacional key={oferta.getId()} oferta={oferta} />
                ))}
                {/* Mostrar un mensaje si no hay ofertas disponibles */}
                {!cargando && ofertasInternacionales.length === 0 && <p>No hay ofertas disponibles.</p>}
            </div>
        </div>
    );
}

export default OfertasRomanticas;
