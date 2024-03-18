import React from 'react';
import '../../assets/styles/Footer.css';
import RedesSociales from './RedesSociales';

const Footer = () => {
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
          <li>Terminos de uso</li>
          <li>Política de seguridad</li>
        </ul>
        <p className='derechosReservados'>&copy; 2024 SweetPlan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
