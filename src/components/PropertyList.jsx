import properties from "../data/mockData";

function PropertyList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className="border rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p className="text-sm text-gray-600">{property.location}</p>
            <p className="text-sm">
              {property.type} en {property.operation}
            </p>
            <p className="text-xl font-semibold text-emeraldDark">
              ${property.price.toLocaleString("es-AR")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
