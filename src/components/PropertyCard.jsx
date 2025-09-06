import React from 'react'
import { Link } from 'react-router-dom'


const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-emeraldDark font-sans">{property.title}</h3>
<p className="text-sm text-gray-600 font-questrial">{property.location}</p>
<p className="text-sm text-gray-800 mt-1 font-questrial">{property.type} - {property.operation}</p>
<p className="text-gold text-lg font-bold mt-2 font-sans">${property.price}</p>

        <Link
  to={`/propiedad/${property.id}`}
  className="mt-4 block bg-emeraldDark text-white text-center py-2 rounded hover:bg-emerald-800 transition"
>
  Ver más
</Link>
      </div>
    </div>
  )
}

export default PropertyCard
