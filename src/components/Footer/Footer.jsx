import React from 'react';
import '../../assets/styles/Footer.css';
import RedesSociales from './RedesSociales';

const Footer = () => {

  const handleClick=(e)=>{
    console.log(e.target.innerText)
    switch (e.target.innerText) {
      case 'Terminos de uso':
          window.location.href = `/termsOfUse`;
        break;

      case 'Contacto':
        window.location.href = `/contacto`;
      break;

      case 'Política de Cookies':
        window.location.href = `/privacy-policy`;
      break;

      case 'Sobre Nosotros':
        window.location.href = `/quienSomos`;
      break;
    
      default:
        break;
    }
  }
  return (
    <footer className="footer">
      <RedesSociales/>
      <div className="footerContent">
        <ul>
          <li onClick={handleClick}>Sobre Nosotros</li>
          <li onClick={handleClick}>Contacto</li>
        </ul>
        <ul>
          <li onClick={handleClick}>Terminos de uso</li>
          <li onClick={handleClick}>Política de Cookies</li>
        </ul>
        <h1>SweetPlan</h1>
        <p className='derechosReservados'>&copy; 2024 SweetPlan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
