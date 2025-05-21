// src/components/OfertasOrigen.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OfertaService } from './OfertaService';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../../assets/styles/OfertasOrigen.css';

function OfertasOrigen({ origenActual, destino, fechaActual, personas, id }) {
  const ofertaService = new OfertaService();
  const [origenesDisponibles, setOrigenesDisponibles] = useState([]);
  const [origenSeleccionado, setOrigenSeleccionado] = useState(origenActual);
  const [ofertas, setOfertas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatearFecha = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'short',
    }).format(fecha);
  };

  useEffect(() => {
    // Simula obtener todos los orígenes posibles para el destino actual
    const fetchOrigenes = async () => {
      try {
        const data = await ofertaService.findOrigenesByDestino(destino, origenActual); // este método debes implementarlo en tu servicio
        setOrigenesDisponibles(data);
      } catch (e) {
        console.error('Error cargando orígenes');
      }
    };
    fetchOrigenes();
  }, [destino]);

  useEffect(() => {
    const fetchOfertas = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await ofertaService.findOrigenesByDestino(destino);
        const filtradas = data.filter(o => o._id !== id && o._origen!== origenActual  && o._fechaInicio === fechaActual);
        setOfertas(filtradas);
      } catch (err) {
        setError('No se pudieron cargar las ofertas');
      } finally {
        setLoading(false);
      }
    };

    if (destino && origenSeleccionado) {
      fetchOfertas();
    }
  }, [destino, origenSeleccionado]);

  return (
    <div className="ofertas-origen-container">
      <h3 className="ofertas-titulo">🌍 Otras ofertas desde diferentes orígenes</h3>
      {loading && <p className="estado">Cargando ofertas...</p>}
      {error && <p className="estado error">{error}</p>}

    {!loading && ofertas.length === 0 && (
        <></>
    )}
      {!loading && ofertas.length > 0 && (
        <ul className="lista-ofertas-origen">
          {ofertas.map((oferta) => (
            <li key={oferta._id} className="oferta-card">
              <Link to={`/escapadaFin/${oferta._id}`} className="link-oferta">
                <div className="info-fechas">
                  <FaMapMarkerAlt className="icono-mapa" />
                  <span>
                    {/* {formatearFecha(oferta._fechaInicio)} → {formatearFecha(oferta._fechafin)} */}
                    {oferta._origen}
                  </span>
                </div>
                <div className="precio">
                  {oferta._precioPersona.toFixed(0)}€
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!loading && ofertas.length === 0 && (
        <></>
      )}
    </div>
  );
}

export default OfertasOrigen;
