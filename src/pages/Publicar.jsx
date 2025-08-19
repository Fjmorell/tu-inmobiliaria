import React, { useState } from 'react'

const Publicar = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    ubicacion: '',
    tipo: '',
    operacion: '',
    precio: '',
    imagen: '',
    nombre: '',
    contacto: '',
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
    console.log('Propiedad enviada:', formData)
    setEnviado(true)
    setFormData({
      titulo: '',
      ubicacion: '',
      tipo: '',
      operacion: '',
      precio: '',
      imagen: '',
      nombre: '',
      contacto: '',
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-emeraldDark font-sans text-center mb-6">
  Publicar Propiedad
</h1>


      {enviado && (
        <div className="bg-green-100 text-green-800 p-4 mb-6 rounded">
          ✅ ¡Gracias! Tu propiedad fue enviada correctamente.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded shadow">
        <input
          type="text"
          name="titulo"
          placeholder="Título de la propiedad"
          value={formData.titulo}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <input
          type="text"
          name="ubicacion"
          placeholder="Ubicación"
          value={formData.ubicacion}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Tipo de propiedad</option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="Terreno">Terreno</option>
          </select>

          <select
            name="operacion"
            value={formData.operacion}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Operación</option>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
          </select>
        </div>

        <input
          type="number"
          name="precio"
          placeholder="Precio en USD o ARS"
          value={formData.precio}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <input
          type="text"
          name="imagen"
          placeholder="URL de imagen principal"
          value={formData.imagen}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <input
          type="text"
          name="contacto"
          placeholder="Email o WhatsApp"
          value={formData.contacto}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-emeraldDark text-white font-semibold py-3 rounded hover:bg-emerald-800 transition"
        >
          Enviar propiedad
        </button>
      </form>
    </div>
  )
}

export default Publicar
