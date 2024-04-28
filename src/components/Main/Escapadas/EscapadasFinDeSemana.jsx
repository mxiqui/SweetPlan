import React, { useEffect, useState } from 'react';
import '../../../assets/styles/EscapadasFinDeSemana.css';
import Escapada from './Escapada';
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';


function EscapadasFinDeSemana() {
    const [ofertas, setOfertas] = useState([]);
    const [origen, setOrigen] = useState("Madrid");

    useEffect(() => {
        const obtenerOfertas = async () => {
            try {
                const escapadaService = new EscapadaFindesemanaService();
                const nuevasOfertas = await escapadaService.findByOrigen(origen);
                setOfertas(nuevasOfertas);
            } catch (error) {
                console.error('Error al obtener las ofertas:', error);
            }
        }

        obtenerOfertas()
        
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
                {ofertas.map((oferta) => (
                    <Escapada
                        key={oferta.getId()}
                        oferta={oferta}
                    />
                ))}
            </div>
        </div>
    );
}

export default EscapadasFinDeSemana;
