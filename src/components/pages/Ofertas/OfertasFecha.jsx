import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OfertaService } from './OfertaService';
import '../../../assets/styles/OfertaFechas.css';
import { FaCalendarAlt } from 'react-icons/fa'; // para íconos de calendario

function OfertasFechas({ destino, origen, fechaActual, personas }) {
  const ofertaService = new OfertaService();
  const [ofertas, setOfertas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOfertas = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await ofertaService.findByDestinoAndOrigen(destino, origen, personas);
        const filtradas = data.filter(oferta => oferta._fechaInicio !== fechaActual);
        setOfertas(filtradas);
      } catch (err) {
        setError('Error al cargar ofertas');
      } finally {
        setIsLoading(false);
      }
    };

    if (destino && origen) {
      fetchOfertas();
    }
  }, [destino, origen, fechaActual]);

  const formatearFecha = (fechaStr, largo = false) => {
    const fecha = new Date(fechaStr);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'short',
      year: largo ? 'numeric' : '2-digit',
    }).format(fecha);
  };

  if (isLoading) return <p className="estado">Cargando otras fechas...</p>;
  if (error) return <p className="estado error">{error}</p>;
  if (ofertas.length === 0) return <p className="estado">No hay otras fechas disponibles.</p>;

  return (
    <div className="ofertas-fechas">
      <h3 className="titulo-fechas">🎯 Otras fechas disponibles para este destino</h3>
      <ul className="lista-ofertas">
        {ofertas.map(oferta => (
          <li key={oferta._id} className="oferta-item">
            <Link to={`/escapadaFin/${oferta._id}`} className="oferta-link">
              <div className="oferta-fechas">
                <FaCalendarAlt className="icono-calendario" />
                <span className="fecha">
                  {formatearFecha(oferta._fechaInicio)} → {formatearFecha(oferta._fechafin)}
                </span>
                <span className="duracion">{oferta._noches} noches</span>
              </div>
              <div className="precio">
                {oferta._precioPersona ? `$${oferta._precioPersona}` : '--'}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfertasFechas;
