import React, { useState } from 'react';
import axios from 'axios';

const PlanificadorViaje = () => {
  const [formData, setFormData] = useState({
    imagen: '',
    tipoAlojamiento: 'airbnb',
    origen: '',
    destino: '',
    fechaIda: '',
    fechaVuelta: '',
    personas: 1,
    tipoOferta: '',
    descripcion: '',
    regimen: '',             // nuevo
    conNinos: false,         // nuevo
    presupuestoMax: '',      // nuevo
    actividadesDeseadas: '', // nuevo
  });
  
      

  const [vuelos, setVuelos] = useState([]);
  const [alojamientos, setAlojamientos] = useState([]);
  const [selectedVuelo, setSelectedVuelo] = useState(null);
  const [selectedAlojamiento, setSelectedAlojamiento] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/findPlan', formData);
      setVuelos(res.data.vuelos);
      setAlojamientos([
        ...res.data.alojamientosAirbnb,
        ...res.data.alojamientoBooking,
      ]);
    } catch (err) {
      console.error('Error en la búsqueda:', err);
    }
  };

  const confirmarSeleccion = async () => {
    const resultadoFinal = {
      datosBusqueda: formData,
      vueloSeleccionado: selectedVuelo,
      alojamientoSeleccionado: selectedAlojamiento,
    };
  
    console.log('🎯 Resultado final:', resultadoFinal);
  
    try {
      const res = await axios.post('http://localhost:8080'+'/crearOferta2', resultadoFinal);
      console.log('✅ Oferta enviada correctamente:', res.data);
    } catch (error) {
      console.error('❌ Error al enviar la oferta:', error);
    }
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Planificador de Viaje</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
  <label>
    Imagen URL:
    <input
      type="text"
      value={formData.imagen}
      onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
    />
  </label>

  <label>
    Origen:
    <input
      type="text"
      value={formData.origen}
      onChange={(e) => setFormData({ ...formData, origen: e.target.value })}
    />
  </label>

  <label>
    Destino:
    <input
      type="text"
      value={formData.destino}
      onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
    />
  </label>

  <label>
    Fecha Ida:
    <input
      type="date"
      value={formData.fechaIda.slice(0, 10)}
      onChange={(e) =>
        setFormData({ ...formData, fechaIda: new Date(e.target.value).toISOString() })
      }
    />
  </label>

  <label>
    Fecha Vuelta:
    <input
      type="date"
      value={formData.fechaVuelta.slice(0, 10)}
      onChange={(e) =>
        setFormData({ ...formData, fechaVuelta: new Date(e.target.value).toISOString() })
      }
    />
  </label>

  <label>
    Personas:
    <input
      type="number"
      value={formData.personas}
      onChange={(e) => setFormData({ ...formData, personas: parseInt(e.target.value) })}
      min="1"
    />
  </label>

  <label>
    Tipo Alojamiento:
    <select
      value={formData.tipoAlojamiento}
      onChange={(e) => setFormData({ ...formData, tipoAlojamiento: e.target.value })}
    >
      <option value="airbnb">Airbnb</option>
      <option value="booking">Booking</option>
    </select>
  </label>

  <label>
    Tipo Oferta:
    <input
      type="text"
      value={formData.tipoOferta}
      onChange={(e) => setFormData({ ...formData, tipoOferta: e.target.value })}
    />
  </label>

  <label>
    Descripcion:
    <input
      type="text"
      value={formData.descripcion}
      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
    />
  </label>

  <label>
  Régimen Alimenticio:
  <select
    value={formData.regimen}
    onChange={(e) => setFormData({ ...formData, regimen: e.target.value })}
  >
    <option value="">Selecciona</option>
    <option value="soloAlojamiento">Solo alojamiento</option>
    <option value="desayuno">Desayuno incluido</option>
    <option value="mediaPension">Media pensión</option>
    <option value="pensionCompleta">Pensión completa</option>
    <option value="todoIncluido">Todo incluido</option>
  </select>
</label>

<label>
  ¿Viajas con niños?
  <input
    type="checkbox"
    checked={formData.conNinos}
    onChange={(e) => setFormData({ ...formData, conNinos: e.target.checked })}
  />
</label>

<label>
  Presupuesto máximo (€):
  <input
    type="number"
    value={formData.presupuestoMax}
    onChange={(e) => setFormData({ ...formData, presupuestoMax: e.target.value })}
    min="0"
  />
</label>

<label>
  Actividades deseadas:
  <input
    type="text"
    placeholder="Ej: senderismo, playa, museos..."
    value={formData.actividadesDeseadas}
    onChange={(e) => setFormData({ ...formData, actividadesDeseadas: e.target.value })}
  />
</label>

  <button type="submit" style={{ marginTop: '10px' }}>Buscar</button>
</form>


{Array.isArray(vuelos) && vuelos.length > 0 && (

        <>
          <h2>Vuelos disponibles</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {vuelos.map((vuelo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedVuelo(vuelo)}
                style={{
                  border: selectedVuelo === vuelo ? '3px solid green' : '1px solid gray',
                  padding: '10px',
                  cursor: 'pointer',
                  width: '300px',
                }}
              >
                <img src={vuelo.vueloIda.urlImagen} alt="aerolínea" width="30" />
                <h4>{vuelo.vueloIda.origen} → {vuelo.vueloIda.destino}</h4>
                <p>Salida: {vuelo.vueloIda.horaSalida}</p>
                <p>Vuelta: {vuelo.vueloVulta.horaSalida}</p>
                <p>Precio ida y vuelta: €{vuelo.precioTotal}</p>
              </div>
            ))}
          </div>
        </>
      )}

{Array.isArray(alojamientos) && alojamientos.length > 0 && (
        <>
          <h2>Alojamientos disponibles</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {alojamientos.map((aloj, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedAlojamiento(aloj)}
                style={{
                  border: selectedAlojamiento === aloj ? '3px solid blue' : '1px solid gray',
                  padding: '10px',
                  cursor: 'pointer',
                  width: '300px',
                }}
              >
                <img src={aloj.image || aloj.galeria?.split(',')[0]?.replace('[', '').trim()} alt="alojamiento" width="100%" />
                <h4>{aloj.name}</h4>
                <p>{aloj.address}</p>
                <p>Precio total: €{aloj.totalPrice}</p>
                <a href={aloj.url} target="_blank" rel="noopener noreferrer">Ver más</a>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedVuelo && selectedAlojamiento && (
        <button
          onClick={confirmarSeleccion}
          style={{ marginTop: '30px', padding: '10px 20px', fontSize: '16px' }}
        >
          Confirmar selección
        </button>
      )}
    </div>
  );
};

export default PlanificadorViaje;
