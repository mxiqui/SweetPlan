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
    
      default:
        break;
    }
  }
  return (
    <footer className="footer">
      <RedesSociales/>
      <div className="footerContent">
        <ul>
          <li>Info</li>
          <li onClick={handleClick}>Contacto</li>
          <li>FaQs</li>
        </ul>
        <ul>
          <li onClick={handleClick}>Terminos de uso</li>
          <li>Política de seguridad</li>
        </ul>
        <h1>SweetPlan</h1>
        <p className='derechosReservados'>&copy; 2024 SweetPlan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
