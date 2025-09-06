import React from 'react'
import { useParams, Link } from 'react-router-dom'
import properties from '../data/mockData'

const FichaPropiedad = () => {
  const { id } = useParams()
  const property = properties.find((p) => p.id === parseInt(id))

  if (!property) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-red-600">Propiedad no encontrada</h1>
        <Link to="/" className="text-blue-600 underline mt-4 block">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-72 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold text-emeraldDark font-sans mb-2">
        {property.title}
      </h1>
      <p className="text-gray-600 font-questrial">{property.location}</p>
      <p className="text-lg text-gray-800 font-questrial mt-2">
        {property.type} • {property.operation}
      </p>
      <p className="text-gold text-2xl font-bold mt-4 font-sans">${property.price}</p>

      <p className="mt-6 text-gray-700 font-questrial leading-relaxed">
        Esta es una propiedad destacada en la zona. Cuenta con excelente ubicación, cercanía a servicios y gran potencial.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://wa.me/5493795073930"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emeraldDark text-white px-6 py-3 rounded hover:bg-emerald-800 transition"
        >
          Contactar por WhatsApp
        </a>
        <Link to="/" className="underline text-gray-600 hover:text-gray-800">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default FichaPropiedad
