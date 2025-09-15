// src/pages/Propiedades.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

function Propiedades() {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📌 Estados de filtros
  const [ubicacion, setUbicacion] = useState("");
  const [tipo, setTipo] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [dormitorios, setDormitorios] = useState("");
  const [banos, setBanos] = useState("");
  const [superficieMin, setSuperficieMin] = useState("");
  const [superficieMax, setSuperficieMax] = useState("");

  // 📌 Consultar propiedades con filtros
  const fetchPropiedades = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("properties")
        .select("id, title, price, description, image_url, location, type, bedrooms, bathrooms, size_m2, status")
        .eq("status", "public") // solo mostrar las publicadas
        .order("created_at", { ascending: false });

      if (ubicacion) query = query.eq("location", ubicacion);
      if (tipo) query = query.eq("type", tipo);
      if (precioMin) query = query.gte("price", precioMin);
      if (precioMax) query = query.lte("price", precioMax);
      if (dormitorios) query = query.gte("bedrooms", dormitorios);
      if (banos) query = query.gte("bathrooms", banos);
      if (superficieMin) query = query.gte("size_m2", superficieMin);
      if (superficieMax) query = query.lte("size_m2", superficieMax);

      const { data, error } = await query;

      if (error) throw error;
      setPropiedades(data);
    } catch (err) {
      console.error("❌ Error al traer propiedades:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Ejecutar al inicio y cuando cambian filtros
  useEffect(() => {
    fetchPropiedades();
  }, [ubicacion, tipo, precioMin, precioMax, dormitorios, banos, superficieMin, superficieMax]);

  if (loading) return <p className="p-6">Cargando propiedades...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">
      {/* 📌 Sidebar de filtros */}
      <aside className="col-span-12 md:col-span-3 border-r pr-4 space-y-6">
        <h3 className="text-lg font-semibold">Filtros</h3>

        {/* Ubicación */}
        <div>
          <label className="block text-sm font-medium">Ubicación</label>
          <select
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Todas</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="GBA Norte">GBA Norte</option>
            <option value="GBA Sur">GBA Sur</option>
            <option value="Patagonia">Patagonia</option>
          </select>
        </div>

        {/* Tipo */}
        <div>
          <label className="block text-sm font-medium">Tipo de propiedad</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Todos</option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="PH">PH</option>
            <option value="Local">Local</option>
          </select>
        </div>

        {/* Precio */}
        <div>
          <label className="block text-sm font-medium">Precio (USD)</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Desde"
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
              className="w-1/2 border rounded p-2"
            />
            <input
              type="number"
              placeholder="Hasta"
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
              className="w-1/2 border rounded p-2"
            />
          </div>
        </div>

        {/* Dormitorios */}
        <div>
          <label className="block text-sm font-medium">Dormitorios</label>
          <select
            value={dormitorios}
            onChange={(e) => setDormitorios(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Cualquiera</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Baños */}
        <div>
          <label className="block text-sm font-medium">Baños</label>
          <select
            value={banos}
            onChange={(e) => setBanos(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Cualquiera</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
          </select>
        </div>

        {/* Superficie */}
        <div>
          <label className="block text-sm font-medium">Superficie (m²)</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Mín"
              value={superficieMin}
              onChange={(e) => setSuperficieMin(e.target.value)}
              className="w-1/2 border rounded p-2"
            />
            <input
              type="number"
              placeholder="Máx"
              value={superficieMax}
              onChange={(e) => setSuperficieMax(e.target.value)}
              className="w-1/2 border rounded p-2"
            />
          </div>
        </div>

        <button
          onClick={() => {
            setUbicacion("");
            setTipo("");
            setPrecioMin("");
            setPrecioMax("");
            setDormitorios("");
            setBanos("");
            setSuperficieMin("");
            setSuperficieMax("");
          }}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm"
        >
          Limpiar filtros
        </button>
      </aside>

      {/* 📌 Listado de propiedades */}
      <main className="col-span-12 md:col-span-9 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Propiedades disponibles</h2>

        {propiedades.length === 0 ? (
          <p>No hay propiedades que coincidan con los filtros.</p>
        ) : (
          propiedades.map((prop) => (
            <div
              key={prop.id}
              className="flex flex-col md:flex-row border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Imagen */}
              <img
                src={prop.image_url}
                alt={prop.title}
                className="w-full md:w-1/3 h-56 object-cover"
              />

              {/* Info */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{prop.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {prop.description?.slice(0, 120)}...
                  </p>
                  <ul className="flex flex-wrap gap-4 text-sm text-gray-700 mt-2">
                    <li>📍 {prop.location || "Ubicación no definida"}</li>
                    <li>🏠 {prop.type || "Tipo no definido"}</li>
                    <li>🛏 {prop.bedrooms || 0} Dorm.</li>
                    <li>🛁 {prop.bathrooms || 0} Baños</li>
                    <li>📐 {prop.size_m2 || 0} m²</li>
                  </ul>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-emeraldDark">
                    USD {Number(prop.price).toLocaleString("es-AR")}
                  </p>
                  <Link
                    to={`/propiedad/${prop.id}`}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                  >
                    Más detalles
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Propiedades;
