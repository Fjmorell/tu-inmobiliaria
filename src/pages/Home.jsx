import React from 'react'
import PropertyCard from '../components/PropertyCard'
import properties from '../data/mockData'
import videoFondo from '../assets/fondo-video.mp4' // 👈 agregá tu video en /src/assets

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner con video */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoFondo} type="video/mp4" />
          Tu navegador no soporta video en HTML5.
        </video>

        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido sobre el video */}
        <div className="relative z-10 w-full max-w-4xl px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white font-sans mb-2">
              Encontrá tu próxima propiedad
            </h1>
            <p className="text-gray-200 font-questrial">
              Venta y alquiler en un solo lugar
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/90 p-6 rounded-lg shadow">
            <input
              type="text"
              placeholder="Ubicación"
              className="border border-gray-300 p-2 rounded"
            />

            <select className="border border-gray-300 p-2 rounded">
              <option value="">Tipo de propiedad</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="terreno">Terreno</option>
            </select>

            <select className="border border-gray-300 p-2 rounded">
              <option value="">Operación</option>
              <option value="venta">Venta</option>
              <option value="alquiler">Alquiler</option>
            </select>

            <button
              type="submit"
              className="md:col-span-3 bg-emeraldDark text-white py-2 rounded hover:bg-emerald-800 transition"
            >
              Buscar propiedades
            </button>
          </form>
        </div>
      </section>

      {/* Resto del contenido con fondo blanco */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Propiedades destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Tenés una propiedad para vender o alquilar?
          </h2>
          <p className="text-gray-600 mb-6">
            Publicala y comenzá a recibir consultas hoy mismo.
          </p>
          <a
            href="/publicar"
            className="inline-block bg-gold text-white font-semibold px-6 py-3 rounded shadow hover:bg-yellow-600 transition"
          >
            Publicar propiedad
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
