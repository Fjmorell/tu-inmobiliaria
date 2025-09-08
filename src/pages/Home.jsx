<<<<<<< HEAD
import React from 'react'
import PropertyCard from '../components/PropertyCard'
import properties from '../data/mockData'
import videoFondo from '../assets/fondo-video1.mp4' // 👈 agregá tu video en /src/assets

const Home = () => {
=======
// src/pages/Home.jsx
import React, { useMemo, useState } from 'react'
import PropertyCard from '../components/PropertyCard'
import properties from '../data/mockData'
import videoFondo from '../assets/fondo-video1.mp4'

const getField = (obj, keys = []) =>
  keys.reduce((acc, k) => (acc ?? obj?.[k]), undefined)

const normalize = (v) => (v ?? '').toString().trim().toLowerCase()

const Home = () => {
  // Filtros controlados
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    operation: '',
  })
  // Resultado visible
  const [results, setResults] = useState(properties)

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setResults(applyFilters(properties, filters))
  }

  const handleReset = () => {
    setFilters({ location: '', type: '', operation: '' })
    setResults(properties)
  }

  // Lógica de filtrado (tolerante a nombres de campos)
  const applyFilters = (list, f) => {
    const loc = normalize(f.location)
    const typ = normalize(f.type)
    const op  = normalize(f.operation)

    return list.filter((p) => {
      const pLocation  = normalize(getField(p, ['location', 'ubicacion']))
      const pType      = normalize(getField(p, ['type', 'tipo']))
      const pOperation = normalize(getField(p, ['operation', 'operacion', 'deal', 'status']))

      // Ubicación: incluye parcial
      const okLoc = !loc || pLocation.includes(loc)
      // Tipo: match exacto por valor
      const okType = !typ || pType === typ
      // Operación: match exacto por valor
      const okOp = !op || pOperation === op

      return okLoc && okType && okOp
    })
  }

  // (Opcional) contador memoizado
  const total = useMemo(() => results.length, [results])

>>>>>>> 4bb2112 (Mejorar filtro)
  return (
    <div className="bg-white min-h-screen">
      {/* Banner con video */}
      <section className="relative h-[60vh] flex items-center justify-center">
<<<<<<< HEAD
        {/* Video de fondo */}
=======
>>>>>>> 4bb2112 (Mejorar filtro)
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

<<<<<<< HEAD
        {/* Overlay oscuro para contraste */}
=======
>>>>>>> 4bb2112 (Mejorar filtro)
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

<<<<<<< HEAD
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

=======
          {/* FORM FILTROS */}
          {/* FORM FILTROS — layout como imagen 1 */}
<form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white/95 p-5 rounded-lg shadow-lg"
>
  <input
    type="text"
    name="location"
    placeholder="Ubicación"
    value={filters.location}
    onChange={handleChange}
    className="h-12 rounded-md border border-gray-200 px-3 placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emeraldDark"
  />

  <select
    name="type"
    value={filters.type}
    onChange={handleChange}
    className="h-12 rounded-md border border-gray-200 px-3
               focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emeraldDark"
  >
    <option value="">Tipo de propiedad</option>
    <option value="casa">Casa</option>
    <option value="departamento">Departamento</option>
    <option value="terreno">Terreno</option>
  </select>

  <select
    name="operation"
    value={filters.operation}
    onChange={handleChange}
    className="h-12 rounded-md border border-gray-200 px-3
               focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emeraldDark"
  >
    <option value="">Operación</option>
    <option value="venta">Venta</option>
    <option value="alquiler">Alquiler</option>
  </select>

  {/* Botón grande abajo, ocupando toda la fila */}
  <button
    type="submit"
    className="md:col-span-3 h-12 w-full bg-emeraldDark text-white rounded-md
               hover:bg-emerald-800 transition shadow"
  >
    Buscar propiedades
  </button>

  {/* Link para limpiar, pequeño a la derecha */}
  <div className="md:col-span-3 flex justify-end">
    <button
      type="button"
      onClick={handleReset}
      className="text-sm text-gray-600 hover:text-gray-800 underline"
    >
      Limpiar
    </button>
  </div>
</form>

        </div>
      </section>

      {/* Resultados */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Propiedades destacadas
          </h2>
          <span className="text-sm text-gray-500">
            {total} resultado{total === 1 ? '' : 's'}
          </span>
        </div>

        {total === 0 ? (
          <div className="text-center text-gray-600 py-12">
            No encontramos propiedades con esos filtros.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

>>>>>>> 4bb2112 (Mejorar filtro)
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
