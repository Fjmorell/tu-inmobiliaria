import React, { useState } from 'react'
import videoSrc from '../assets/casachica.mp4'

const Publicar = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    ubicacion: '',
    operacion: '',
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Lead recibido:', formData)
    setEnviado(true)
    setFormData({
      nombre: '',
      contacto: '',
      ubicacion: '',
      operacion: '',
    })
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-120px)] bg-white">

      {/* 🎥 HERO VIDEO - pantalla completa */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Texto encima del video */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">¿Tenés una propiedad?</h1>
          <p className="text-lg md:text-xl">Contactanos por WhatsApp o dejanos tus datos</p>
        </div>
      </div>

      {/* CONTENIDO: Formulario + botón */}
      <main className="flex-grow px-4 py-2">
        <div className="w-full max-w-2xl mx-auto text-center">

          
          

          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/5493794085421?text=Hola,%20quiero%20publicar%20mi%20propiedad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition mb-8"
          >
            📲 Charlemos
          </a>

          {/* Mensaje de éxito */}
          {enviado && (
            <div className="bg-green-100 text-green-800 p-4 mb-6 rounded text-left max-w-md mx-auto">
              ✅ ¡Gracias! Te vamos a contactar pronto.
            </div>
          )}

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-50 p-6 rounded shadow text-left text-black max-w-md mx-auto"
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
        </div>
      </main>
    </div>
  )
}

export default Publicar
