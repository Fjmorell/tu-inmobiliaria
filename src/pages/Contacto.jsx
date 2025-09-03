import React from "react"
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa"


const Contacto = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 font-secondary text-emeraldDark">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-3">
        ¿Cómo querés avanzar?
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Elegí una opción para continuar. Los botones abren una conversación directa.
      </p>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Propietario */}
        <article className="bg-white border border-gray-200 rounded-[18px] shadow-md p-6 flex flex-col justify-between min-h-[240px] hover:shadow-lg transition">
          <div>
            <div className="w-12 h-12 bg-[#e9f3f1] text-2xl rounded-xl flex items-center justify-center mb-3">
              🏠
            </div>
            <h3 className="text-xl font-bold mb-1">Soy propietario</h3>
            <p className="text-gray-600 text-sm">
              Publicamos en 48 hs con fotos de calidad, tour virtual 360 y campañas digitales. Gestión rápida y transparente.
            </p>
          </div>
          <a
            href="https://wa.me/5493794085421?text=Hola,%20quiero%20publicar%20mi%20propiedad"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-emeraldDark hover:bg-gold text-white py-3 px-6 rounded-lg font-semibold transition"
          >
            <FaWhatsapp />
            Charlemos
          </a>
        </article>

        {/* Interesados */}
        <article className="bg-white border border-gray-200 rounded-[18px] shadow-md p-6 flex flex-col justify-between min-h-[240px] hover:shadow-lg transition">
          <div>
            <div className="w-12 h-12 bg-[#e9f3f1] text-2xl rounded-xl flex items-center justify-center mb-3">
              🔑
            </div>
            <h3 className="text-xl font-bold mb-1">Quiero comprar o alquilar</h3>
            <p className="text-gray-600 text-sm">
              Accedé a propiedades verificadas y oportunidades de inversión en Corrientes.
            </p>
          </div>
          <a
            href="https://wa.me/5493794059642?text=Hola,%20estoy%20interesado%20en%20comprar%20o%20alquilar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-emeraldDark hover:bg-gold text-white py-3 px-6 rounded-lg font-semibold transition"
          >
            <FaWhatsapp />
            Charlemos
          </a>
        </article>
      </section>

      {/* Comunidad y redes con íconos reales */}
<section className="bg-emeraldDark text-white rounded-[16px] py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
  <p className="text-center md:text-left">
    Súmate a nuestra comunidad para no perderte nuevas oportunidades.
  </p>
  <div className="flex gap-4 text-lg">
    <a
      href="https://www.instagram.com/inmobiliaria.smar"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-gold transition"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=61579036215233"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-gold transition"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.tiktok.com/@inmobiliaria.smart"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="hover:text-gold transition"
    >
      <FaTiktok />
    </a>
    <a
      href="https://www.linkedin.com/company/inmobiliaria-smart"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:text-gold transition"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://wa.me/5493794085421"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Whatsapp"
      className="hover:text-gold transition"
    >
      <FaWhatsapp />
    </a>
  </div>
</section>

    </main>
  )
}

export default Contacto
