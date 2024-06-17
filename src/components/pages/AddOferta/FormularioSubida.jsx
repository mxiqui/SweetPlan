import React, { useState } from 'react';
import { server } from '../../../utils/Constantes';

const FormularioSubida = () => {
  const [alojamiento, setAlojamiento] = useState({
    id: '',
    nombre: '',
    estrellas: '',
    puntuacion: '',
    direccion: '',
    precio: '',
    noches: '',
    precio_total: '',
    url: '',
    fecha: '',
    galeria: '',
    company: '',
    idCompany: ''
  });

  const [vuelo, setVuelo] = useState({
    id: '',
    aerolinea: '',
    aeropuertoIda: '',
    aeropuertoVuelta: '',
    precio: '',
    horaSalida: '',
    horaLlegada: '',
    fecha: '',
    url: ''
  });

  const [vuelo2, setVuelo2] = useState({
    id: '',
    aerolinea: '',
    aeropuertoIda: '',
    aeropuertoVuelta: '',
    precio: '',
    horaSalida: '',
    horaLlegada: '',
    fecha: '',
    url: ''
  });

  const [oferta, setOferta] = useState({
    id: '',
    destino: '',
    origen: '',
    fechaInicio: '',
    fechaFin: '',
    imagen: '',
    galeria: '',
    precio: '',
    tipo: ''
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'alojamiento') {
      setAlojamiento({ ...alojamiento, [name]: value });
    } else if (section === 'vuelo') {
      setVuelo({ ...vuelo, [name]: value });
    } else if (section === 'vuelo2') {
      setVuelo2({ ...vuelo2, [name]: value });
    } else if (section === 'oferta') {
      setOferta({ ...oferta, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      alojamiento,
      vuelo,
      vuelo2,
      oferta
    };

    try {
      const response = await fetch(`${server}/saveOffer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log('Respuesta del servidor:', result);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Alojamiento</h2>
      {Object.keys(alojamiento).map((key) => (
        <div key={key}>
          <label>{key}:</label>
          {key === 'galeria' ? (
            <textarea
              name={key}
              value={alojamiento[key]}
              onChange={(e) => handleChange(e, 'alojamiento')}
            />
          ) : (
            <input
              type="text"
              name={key}
              value={alojamiento[key]}
              onChange={(e) => handleChange(e, 'alojamiento')}
            />
          )}
        </div>
      ))}

      <h2>Vuelo</h2>
      {Object.keys(vuelo).map((key) => (
        <div key={key}>
          <label>{key}:</label>
          <input
            type="text"
            name={key}
            value={vuelo[key]}
            onChange={(e) => handleChange(e, 'vuelo')}
          />
        </div>
      ))}

      <h2>Vuelo 2</h2>
      {Object.keys(vuelo2).map((key) => (
        <div key={key}>
          <label>{key}:</label>
          <input
            type="text"
            name={key}
            value={vuelo2[key]}
            onChange={(e) => handleChange(e, 'vuelo2')}
          />
        </div>
      ))}

      <h2>Oferta</h2>
      {Object.keys(oferta).map((key) => (
        <div key={key}>
          <label>{key}:</label>
          {key === 'galeria' ? (
            <textarea
              name={key}
              value={oferta[key]}
              onChange={(e) => handleChange(e, 'oferta')}
            />
          ) : key === 'tipo' ? (
            <select
              name={key}
              value={oferta[key]}
              onChange={(e) => handleChange(e, 'oferta')}
            >
              <option value="ofertaEspecial">ofertaEspecial</option>
              <option value="escapada">escapada</option>
              <option value="romantico">romantico</option>
              <option value="chollo">chollo</option>
            </select>
          ) : (
            <input
              type="text"
              name={key}
              value={oferta[key]}
              onChange={(e) => handleChange(e, 'oferta')}
            />
          )}
        </div>
      ))}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioSubida;
