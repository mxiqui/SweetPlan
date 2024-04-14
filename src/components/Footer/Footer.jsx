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
          <li>Contacto</li>
          <li>FaQs</li>
        </ul>
        <ul>
          <li onClick={handleClick}>Terminos de uso</li>
          <li>Política de seguridad</li>
        </ul>
        <p className='derechosReservados'>&copy; 2024 SweetPlan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
