import React, { useEffect, useState } from 'react';
import '../../../assets/styles/OfertasList.css'
import { EscapadaFindesemanaService } from '../../../services/EscapadaFindesemanaService';
import { server } from '../../../utils/Constantes';

// Suponiendo que el servicio es una clase exportada así:

const OfertasList = () => {
  const [ofertas, setOfertas] = useState([]);
  const service = new EscapadaFindesemanaService();

  useEffect(() => {
    const fetchOfertas = async () => {
      const data = await service.findAll2();
      setOfertas(data);
    };

    fetchOfertas();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${server}/deleteOferta/${id}`, {
                          method: 'GET',
                          
                          // body: JSON.stringify({ tipo: "escapadas"})
                      });
      setOfertas((prevOfertas) => prevOfertas.filter((oferta) => oferta.getId() !== id));
    } catch (error) {
      console.error('Error eliminando la oferta:', error);
    }
  };

  return (
    <div>
      <h2>Ofertas de Escapadas</h2>
      {ofertas.length === 0 ? (
        <p>No hay ofertas disponibles.</p>
      ) : (
        <div className="ofertas-grid">
          {ofertas.map((oferta) => (
            <div key={oferta.getId()} className="oferta-card">
              <img src={oferta.getImagen()} alt={`Imagen de ${oferta.getDestino()}`} width="200" />
              <h3>{oferta.getOrigen()} → {oferta.getDestino()}</h3>
              <p><strong>Fechas:</strong> {oferta.getFechas()}</p>
              <p><strong>Precio:</strong> {oferta.getPrecio()}€</p>
              <button onClick={() => handleDelete(oferta.getId())}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfertasList;
