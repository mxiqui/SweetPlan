import React, { useEffect, useState } from 'react';
import '../../../assets/styles/EscapadasFinDeSemana.css';
import Escapada from './Escapada';
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';


function EscapadasFinDeSemana() {
    const [ofertas, setOfertas] = useState([]);
    const [origen, setOrigen] = useState("Madrid");

    useEffect(() => {
        const escapadaService = new EscapadaFindesemanaService();
        const nuevasOfertas = escapadaService.findByOrigen(origen);
        setOfertas(nuevasOfertas);
    }, [origen]);

    const handleChange = (e) => {
        setOrigen(e.target.value);
    };

    return (
        <div className='containerPrincipalEscapadas'>
            <h2 className='tituloOferta'>Escapadas Fin de semana</h2>
            <div>
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
