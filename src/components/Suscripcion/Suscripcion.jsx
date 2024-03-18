import React, { useState } from 'react';
import '../../assets/styles/Suscripcion.css';

const Suscripcion = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Aquí puedes agregar la lógica para manejar la suscripción, como enviar el correo electrónico a tu servidor.
    console.log(`Se ha suscrito con éxito: ${email}`);
  };

  return (
    <div className="container">
      <h2 className="title">¡Suscríbete para recibir nuestras mejores ofertas!</h2>
      <p className="description">
        Mantente informado sobre las últimas ofertas, destinos y consejos de viaje.
      </p>
      <div className="formContainer">
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={handleSubscribe} className="subscribeButton">
          Suscribirse
        </button>
      </div>
    </div>
  );
};

export default Suscripcion;
