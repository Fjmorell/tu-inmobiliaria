import React from "react"
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa"

const Contacto = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-emeraldDark font-secondary text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>

      {/* Publicar propiedad */}
      <p className="text-lg mb-2">
        📤 ¿Querés publicar una propiedad?
      </p>
      <p className="text-xl font-semibold mb-4">
        <a
          href="https://wa.me/5493794085421"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emeraldDark hover:bg-gold text-white font-medium py-2 px-4 mt-4 rounded-md transition"
      >
        <FaWhatsapp className="text-white" />
          +54 9 3794 08-5421
        </a>
      </p>

      {/* Comprar o alquilar */}
      <p className="text-lg mb-2">
        🏡 ¿Estás interesado en comprar o alquilar una propiedad?
      </p>
      <p className="text-xl font-semibold mb-4">
        <a
          href="https://wa.me/5493794059642"
         target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emeraldDark hover:bg-gold text-white font-medium py-2 px-4 mt-4 rounded-md transition"
      >
        <FaWhatsapp className="text-white" />
          +54 9 3794 05-9642
        </a>
      </p>

     

      {/* Redes sociales */}
      <div className="mt-10">
        <p className="text-lg mb-4">Seguinos en nuestras redes</p>
        <div className="flex justify-center gap-6 text-2xl text-emeraldDark">
          <a
            href="https://www.instagram.com/inmobiliaria.smar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/inmobiliaria.smart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@inmobiliaria.smart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.linkedin.com/company/inmobiliaria-smart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto
