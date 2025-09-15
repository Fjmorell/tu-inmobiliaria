// src/pages/FichaPropiedad.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

function FichaPropiedad() {
  const { id } = useParams();
  const [propiedad, setPropiedad] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropiedad = async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("id, title, price, description, image_url, location, type, bedrooms, bathrooms, size_m2, status")
          .eq("id", id)
          .single();

        if (error) throw error;
        setPropiedad(data);
      } catch (err) {
        console.error("❌ Error al cargar propiedad:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPropiedad();
  }, [id]);

  if (loading) return <p className="p-6">Cargando propiedad...</p>;
  if (!propiedad) return <p className="p-6">Propiedad no encontrada.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Imagen principal */}
      <img
        src={propiedad.image_url}
        alt={propiedad.title}
        className="w-full h-96 object-cover rounded-lg shadow"
      />

      {/* Información */}
      <h1 className="text-3xl font-bold mt-6">{propiedad.title}</h1>
      <p className="text-emeraldDark text-2xl font-bold mt-2">
        USD {Number(propiedad.price).toLocaleString("es-AR")}
      </p>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
        <div>📍 {propiedad.location || "Ubicación no definida"}</div>
        <div>🏠 {propiedad.type || "Tipo no definido"}</div>
        <div>🛏 {propiedad.bedrooms || 0} Dormitorios</div>
        <div>🛁 {propiedad.bathrooms || 0} Baños</div>
        <div>📐 {propiedad.size_m2 || 0} m²</div>
      </div>

      {/* Descripción */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        {propiedad.description || "Sin descripción"}
      </p>

      {/* Botón de contacto */}
      <div className="mt-8">
        <a
          href={`https://wa.me/5491112345678?text=Hola, quiero información sobre la propiedad: ${propiedad.title}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-emeraldDark text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-700"
        >
          📲 Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default FichaPropiedad;
