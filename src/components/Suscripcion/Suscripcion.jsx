import React, { useState } from 'react';
import '../../assets/styles/Suscripcion.css';
import { server } from '../../utils/Constantes';
import Cookies from 'js-cookie';


const Suscripcion = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  

  const handleSubscribe = async () => {
    try {
      const response = await fetch(`${server}/saveEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
  
      if (response.ok) {
        console.log(`Se ha suscrito con éxito: ${email}`);
        Cookies.set('Suscrito', 'S', { expires: 90 });
      } else {
        console.error('Error al suscribirse:', response.status);
      }
    } catch (error) {
      console.error('Error al suscribirse:', error);
    }
  };
  

  return (
    <div className="container">
      <h2 className="title">¡Suscríbete para recibir nuestras mejores ofertas!</h2>
      <p className="description">
        Mantente informado sobre las últimas ofertas, destinos y consejos de viaje.
      </p>
      <form className="formContainer">
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={handleInputChange}
          className="input"
          required
        />
        <button onClick={handleSubscribe} className="subscribeButton">
          Suscribirse
        </button>
      </form>
    </div>
  );
};

export default Suscripcion;
