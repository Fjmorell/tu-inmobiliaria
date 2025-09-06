import React, { useState } from 'react';
import videoSrc from '../assets/casachica.mp4';
import emojiCharlemos from '../assets/emoji-charlemos.png';

const Publicar = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    ubicacion: '',
    operacion: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead recibido:', formData);
    setEnviado(true);
    setFormData({
      nombre: '',
      contacto: '',
      ubicacion: '',
      operacion: '',
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🎥 VIDEO DE FONDO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* CONTENIDO ENCIMA DEL VIDEO */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">¿Tenés una propiedad?</h1>
        <p className="text-lg md:text-xl mb-6">Contactanos por WhatsApp o dejanos tus datos</p>

        <a
          href="https://wa.me/5493794085421?text=Hola,%20quiero%20publicar%20mi%20propiedad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emeraldDark  text-white px-6 py-3 rounded shadow hover:bg-green-600 transition mb-8"
        >
          <img src={emojiCharlemos} alt="Emoji" className="w-6 h-6" />
          Charlemos
        </a>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/80 backdrop-blur-md text-black p-6 rounded shadow w-full max-w-md text-left"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre y Apellido"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="contacto"
            placeholder="Teléfono o WhatsApp"
            value={formData.contacto}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="ubicacion"
            placeholder="Dirección o barrio"
            value={formData.ubicacion}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <select
            name="operacion"
            value={formData.operacion}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Tipo de operación</option>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
          </select>

          <button
            type="submit"
            className="w-full bg-emeraldDark text-white font-semibold py-3 rounded hover:bg-emerald-800 transition"
          >
            Enviar
          </button>
        </form>

        {/* MENSAJE DE CONFIRMACIÓN */}
        {enviado && (
          <div className="bg-green-100 text-green-800 p-4 mt-4 rounded text-left w-full max-w-md">
            ✅ ¡Gracias! Te vamos a contactar pronto.
          </div>
        )}
      </div>
    </section>
  );
};

export default Publicar;
