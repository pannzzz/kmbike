import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-image">
      <img src="path_to_image" alt="Imagen del footer" />
    </div>

    <div className="footer-content">
      <div className="footer-links">
        <h2>Términos y Condiciones</h2>
        <h2>Política de Privacidad</h2>
        <h2>Contacto</h2>
      </div>
      <p>&copy; 2024 KMBIKE. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
