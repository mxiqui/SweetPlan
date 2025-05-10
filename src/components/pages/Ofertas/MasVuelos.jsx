import React, { useEffect, useState } from 'react';
import '../../../assets/styles/MasVuelos.css'


const MasVuelos = () => {
  const [vuelos, setVuelos] = useState([]);
  const [vueloSeleccionado, setVueloSeleccionado] = useState(null);
  const [precioBase, setPrecioBase] = useState(null);

  useEffect(() => {
    const storedPlan = sessionStorage.getItem('plan');
    if (storedPlan) {
      const parsedPlan = JSON.parse(storedPlan);
      if (parsedPlan.vuelos && parsedPlan.vuelos.length > 1) {
        setVuelos(parsedPlan.vuelos.slice(1)); // Ignorar el primero
        setPrecioBase(parsedPlan.vuelos[0].precioTotal); // Guardar precio base
      }
    }
  }, []);

  const seleccionarVuelo = (vuelo, index) => {
    setVueloSeleccionado(index);
    console.log('Vuelo de ida:', vuelo.vueloIda);
    console.log('Vuelo de vuelta:', vuelo.vueloVulta);
  };

  const formatoDiferencia = (precio) => {
    const diff = precio - precioBase;
    const signo = diff >= 0 ? '+' : '-';
    return `${signo}€${Math.abs(diff).toFixed(2)}`;
  };

  return (
    <div className="plan-vuelos-container">
      <h1 className="titulo">Selecciona un Vuelo (comparado con el más barato)</h1>
      <div className="vuelos-grid">
        {vuelos.map((vuelo, index) => {
          const seleccionado = index === vueloSeleccionado;
          return (
            <div
              key={index}
              className={`tarjeta-vuelo ${seleccionado ? 'seleccionado' : ''}`}
              onClick={() => seleccionarVuelo(vuelo, index)}
            >
              <h2 className="subtitulo">Opción {index + 2}</h2> {/* +2 para mantener número real */}
              <div className="info-vuelo">
                <img src={vuelo.vueloIda.urlImagen} alt="Logo aerolínea" className="logo" />
                <div>
                  <p><strong>Ida:</strong> {vuelo.vueloIda.origen} ➝ {vuelo.vueloIda.destino}</p>
                  <p className="fecha">{new Date(vuelo.vueloIda.horaSalida).toLocaleString()} - {new Date(vuelo.vueloIda.horaLLegada).toLocaleString()}</p>
                </div>
              </div>
              <div className="info-vuelo">
                <img src={vuelo.vueloVulta.urlImagen} alt="Logo aerolínea" className="logo" />
                <div>
                  <p><strong>Vuelta:</strong> {vuelo.vueloVulta.origen} ➝ {vuelo.vueloVulta.destino}</p>
                  <p className="fecha">{new Date(vuelo.vueloVulta.horaSalida).toLocaleString()} - {new Date(vuelo.vueloVulta.horaLLegada).toLocaleString()}</p>
                </div>
              </div>
              <p className="precio-diferencia">Diferencia: {formatoDiferencia(vuelo.precioTotal)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MasVuelos;
