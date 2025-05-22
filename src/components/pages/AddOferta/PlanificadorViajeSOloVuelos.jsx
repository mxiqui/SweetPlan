import React, { useState } from 'react';
import axios from 'axios';

const PlanificadorViajeSoloVuelos = () => {
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
    urlVuelo:"",
    escalasIda:"",
    escalasVuelta:"",
    multidestino:"",
  });

    const [alojamientoData, setAlojamientoData] = useState({
        id: '',
        name: '',
        rating: '',
        address: '',
        price: '',
        totalPrice: '',
        url: '',
        galeria: '',
        image: '',
        wordRating: '',
        distance: '',
        regimen: ''
    });

  
      

  const [vuelos, setVuelos] = useState([]);
  const [alojamientos, setAlojamientos] = useState([]);
  const [selectedVuelo, setSelectedVuelo] = useState(null);
  const [selectedAlojamiento, setSelectedAlojamiento] = useState(null);
  const tagOptions = ['Escapada', 'Romantica', 'Playa', 'Montaña'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/findPlanJustFly', formData);
      setVuelos(res.data.vuelos);
      setAlojamientos([
        null,
        null
      ]);
    } catch (err) {
      console.error('Error en la búsqueda:', err);
    }
  };

  const confirmarSeleccion = async () => {
    selectedVuelo.vueloIda.url = formData.urlVuelo;
    selectedVuelo.vueloVulta.url = formData.urlVuelo;
    const resultadoFinal = {
  datosBusqueda: formData,
  vueloSeleccionado: selectedVuelo,
  alojamientoSeleccionado: alojamientoData, // nuevo estado
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
    escala Ida:
    <input
      type="text"
      value={formData.escalasIda}
      onChange={(e) => setFormData({ ...formData, escalasIda: e.target.value })}
    />
  </label>

  <label>
    escala Vuelta:
    <input
      type="text"
      value={formData.escalasVuelta}
      onChange={(e) => setFormData({ ...formData, escalasVuelta: e.target.value })}
    />
  </label>



<input type="text" placeholder='UrlVuelo' 
    onChange={(e) => setFormData({ ...formData, urlVuelo: e.target.value })}
/>

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

      <h3>Datos del Alojamiento</h3>

<label>
  ID:
  <input type="text" value={alojamientoData.id} onChange={(e) => setAlojamientoData({ ...alojamientoData, id: e.target.value })} />
</label>

<label>
  Nombre:
  <input type="text" value={alojamientoData.name} onChange={(e) => setAlojamientoData({ ...alojamientoData, name: e.target.value })} />
</label>

<label>
  Rating:
  <input type="text" value={alojamientoData.rating} onChange={(e) => setAlojamientoData({ ...alojamientoData, rating: e.target.value })} />
</label>

<label>
  Dirección:
  <input type="text" value={alojamientoData.address} onChange={(e) => setAlojamientoData({ ...alojamientoData, address: e.target.value })} />
</label>

<label>
  Precio:
  <input type="number" value={alojamientoData.price} onChange={(e) => setAlojamientoData({ ...alojamientoData, price: parseFloat(e.target.value) })} />
</label>

<label>
  Precio Total:
  <input type="number" value={alojamientoData.totalPrice} onChange={(e) => setAlojamientoData({ ...alojamientoData, totalPrice: parseFloat(e.target.value) })} />
</label>

<label>
  URL:
  <input type="text" value={alojamientoData.url} onChange={(e) => setAlojamientoData({ ...alojamientoData, url: e.target.value })} />
</label>

<label>
  Galería:
  <input type="text" value={alojamientoData.galeria} onChange={(e) => setAlojamientoData({ ...alojamientoData, galeria: e.target.value })} />
</label>

<label>
  Imagen:
  <input type="text" value={alojamientoData.image} onChange={(e) => setAlojamientoData({ ...alojamientoData, image: e.target.value })} />
</label>

<label>
  Word Rating:
  <input type="text" value={alojamientoData.wordRating} onChange={(e) => setAlojamientoData({ ...alojamientoData, wordRating: e.target.value })} />
</label>

<label>
  Distancia:
  <input type="text" value={alojamientoData.distance} onChange={(e) => setAlojamientoData({ ...alojamientoData, distance: e.target.value })} />
</label>

<label>
  Régimen:
  <select value={alojamientoData.regimen} onChange={(e) => setAlojamientoData({ ...alojamientoData, regimen: e.target.value })}>
    <option value="">Selecciona</option>
    <option value="soloAlojamiento">Solo alojamiento</option>
    <option value="desayuno">Desayuno incluido</option>
    <option value="mediaPension">Media pensión</option>
    <option value="pensionCompleta">Pensión completa</option>
    <option value="todoIncluido">Todo incluido</option>
  </select>
</label>




   

      {selectedVuelo && (
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

export default PlanificadorViajeSoloVuelos;




