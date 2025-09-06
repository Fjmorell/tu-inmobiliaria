import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logosinfondosmart.png';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emeraldDark text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-32 mx-auto md:mx-0 mb-4" />
          
        </div>

        {/* Navegación */}
        <div>
          <ul className="space-y-2">
            <li><Link to="/propiedades" className="hover:underline">Propiedades</Link></li>
            <li><Link to="/vender" className="hover:underline">Tengo una propiedad</Link></li>
            <li><Link to="/nosotros" className="hover:underline">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Seguinos</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61579036215233" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/inmobiliaria.smar" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@inmobiliaria.smart" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
            <a href="https://www.linkedin.com/company/inmobiliaria-smart" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://wa.me/5493794085421" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
          </div>
        </div>
<p className="text-sm">&copy; {new Date().getFullYear()} Inmobiliaria Smart. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
