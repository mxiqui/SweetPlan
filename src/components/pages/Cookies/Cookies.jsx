import React, { useState, useEffect } from 'react';

const CookiesPolicy = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted') === 'true';
    setCookiesAccepted(accepted);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  if (cookiesAccepted) {
    return null;
  }

  return (
    <div style={styles.container}>
      <p>
        Usamos cookies para mejorar su experiencia en nuestro sitio web. Las únicas cookies que almacenamos son la del aviso de cookies y la de suscripción al boletín informativo.
      </p>
      <button onClick={handleAcceptCookies} style={styles.button}>
        Aceptar
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '10px',
    left: '10px',
    right: '10px',
    padding: '15px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CookiesPolicy;
