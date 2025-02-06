import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const NotFound = () => {
  return (
    <>
        <Header/>
        <div style={styles.container}>
      <h1 style={styles.heading}>Error 404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <button style={styles.button} onClick={() => window.location.href = '/'}>
        Go to Home
      </button>
    </div>
    <Footer/>
    </>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '52px',
    color: '#ff0000'
  },
  message: {
    fontSize: '24px',
    color: '#333'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px'
  },
  image: {
    marginTop: '30px',
    maxWidth: '100%',
    height: 'auto'
  }
};

export default NotFound;
