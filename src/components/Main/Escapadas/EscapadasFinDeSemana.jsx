import React, { useEffect, useState } from 'react';
import '../../../assets/styles/EscapadasFinDeSemana.css';
import Escapada from './Escapada';
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';

function EscapadasFinDeSemana() {
    const [ofertas, setOfertas] = useState([]);
    const [origen, setOrigen] = useState("Madrid");
    const [cargando, setCargando] = useState(true);

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

    const handleChange = (e) => {
        setOrigen(e.target.value);
    };

    return (
        <div className='containerPrincipalEscapadas'>
            <h2 className='tituloOferta'>Escapadas Fin de semana</h2>
            <div className='seleccionadorDestino'>
                <select onChange={handleChange} value={origen}>
                    <option value="Madrid">Madrid</option>
                    <option value="Malaga">Málaga</option>
                    <option value="Barcelona">Barcelona</option>
                </select>
            </div>
            <div className="containerEscapadasFinDeSemana">
                {/* Mostrar "Cargando ofertas" si aún se están cargando las ofertas */}
                {cargando && <p>Cargando ofertas...</p>}
                {/* Mostrar las ofertas si no están vacías */}
                {!cargando && ofertas.length > 0 && ofertas.map((oferta) => (
                    <Escapada
                        key={oferta.getId()}
                        oferta={oferta}
                    />
                ))}
                {/* Mostrar un mensaje si no hay ofertas disponibles */}
                {!cargando && ofertas.length === 0 && <p>No hay ofertas disponibles.</p>}
            </div>
        </div>
    );
}

export default EscapadasFinDeSemana;
