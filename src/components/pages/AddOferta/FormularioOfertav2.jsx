import React, { useState } from 'react';
import axios from 'axios';
import '../../../assets/styles/FormularioOfertav2.css';
import { server } from '../../../utils/Constantes';

const FormularioOferta = () => {
  const [alojamiento, setAlojamiento] = useState({
    nombre: '',
    estrellas: '',
    puntuacion: '',
    direccion: '',
    precio: '',
    url: '',
    fecha: '',
    galeria: '',
    company: '',
    idCompany: ''
  });

  const [vueloIda, setVueloIda] = useState({
    aerolinea: '',
    aeropuertoIda: '',
    aeropuertoVuelta: '',
    precio: '',
    horaSalida: '',
    horaLlegada: '',
    fecha: '',
    url: '',
    imagenAerolinea: ''
  });

  const [vueloVuelta, setVueloVuelta] = useState({
    aerolinea: '',
    aeropuertoIda: '',
    aeropuertoVuelta: '',
    precio: '',
    horaSalida: '',
    horaLlegada: '',
    fecha: '',
    url: '',
    imagenAerolinea: ''
  });

  const [oferta, setOferta] = useState({
    origen: '',
    destino: '',
    fechaInicio: '',
    fechaFin: '',
    imagen: '',
    galeria: '',
    tipo: '',
    descripcion: '',
    personas: '',
    noches: '',
    regimen: ''
  });

  const handleInputChange = (e, setFunction) => {
    const { name, value } = e.target;
    setFunction(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      alojamiento,
      vuelo: vueloIda,
      vuelo2: vueloVuelta,
      oferta
    };

    try {
      const response = await axios.post(`${server}/addOferta/V2`, payload);
      console.log(response.data);
      alert('Oferta guardada con éxito');
    } catch (error) {
      console.error(error);
      alert('Error guardando la oferta');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading">Alojamiento</h2>
      {Object.keys(alojamiento).map(key => (
        <div key={key} className="form-group">
          <label className="form-label">{key}</label>
          <input
            type="text"
            name={key}
            value={alojamiento[key]}
            onChange={(e) => handleInputChange(e, setAlojamiento)}
            className="form-input"
          />
        </div>
      ))}
      <h2 className="form-heading">Vuelo Ida</h2>
      {Object.keys(vueloIda).map(key => (
        <div key={key} className="form-group">
          <label className="form-label">{key}</label>
          <input
            type="text"
            name={key}
            value={vueloIda[key]}
            onChange={(e) => handleInputChange(e, setVueloIda)}
            className="form-input"
          />
        </div>
      ))}
      <h2 className="form-heading">Vuelo Vuelta</h2>
      {Object.keys(vueloVuelta).map(key => (
        <div key={key} className="form-group">
          <label className="form-label">{key}</label>
          <input
            type="text"
            name={key}
            value={vueloVuelta[key]}
            onChange={(e) => handleInputChange(e, setVueloVuelta)}
            className="form-input"
          />
        </div>
      ))}
      <h2 className="form-heading">Oferta</h2>
      {Object.keys(oferta).map(key => (
        <div key={key} className="form-group">
          <label className="form-label">{key}</label>
          <input
            type="text"
            name={key}
            value={oferta[key]}
            onChange={(e) => handleInputChange(e, setOferta)}
            className="form-input"
          />
        </div>
      ))}
      <button type="submit" className="form-button">Guardar Oferta</button>
    </form>
  );
};

export default FormularioOferta;
