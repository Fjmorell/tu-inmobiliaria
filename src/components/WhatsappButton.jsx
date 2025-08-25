import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const phoneNumber = '5493794085421'; // reemplazar con tu número
  const message = 'Hola, estoy interesado en una propiedad que vi en su sitio.';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-xl z-50 transition-all duration-300 animate-bounceWhatsapp"
      aria-label="Whatsapp"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
};

export default WhatsappButton;
