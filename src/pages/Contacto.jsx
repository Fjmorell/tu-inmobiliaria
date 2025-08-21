import React from "react"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

const Contacto = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-emeraldDark font-secondary text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>

      {/* WhatsApp link directo */}
      

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/5493794085421"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emeraldDark hover:bg-gold text-white font-medium py-2 px-4 mt-4 rounded-md transition"
      >
        <FaWhatsapp className="text-white" />
        Escribinos por WhatsApp
      </a>

      <p className="mt-6 mb-4">¿Tenés una propiedad?</p>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/inmobiliaria.smar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-lg text-emeraldDark hover:text-gold transition"
      >
        <FaInstagram className="mr-2 text-emeraldDark" />
        @inmobiliaria.smar
      </a>
    </section>
  )
}

export default Contacto
