import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const MisPropiedades = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // ID de la propiedad en edición
  const [form, setForm] = useState({ title: "", price: "", description: "" });
  const [newImage, setNewImage] = useState(null); // Nueva imagen seleccionada
  const [preview, setPreview] = useState(null); // Preview de la nueva imagen

  useEffect(() => {
    const fetchProperties = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("user_id", session.user.id);

      if (error) console.error("Error cargando propiedades:", error.message);
      else setProperties(data);

      setLoading(false);
    };

    fetchProperties();
  }, []);

  // 📝 Abrir modal de edición
  const handleEdit = (prop) => {
    setEditing(prop.id);
    setForm({
      title: prop.title,
      price: prop.price,
      description: prop.description,
    });
    setNewImage(null);
    setPreview(null);
  };

  // Guardar cambios
  const handleUpdate = async (e) => {
    e.preventDefault();
    let imageUrl = null;

    try {
      // Si hay nueva imagen, subirla
      if (newImage) {
        const fileName = `${Date.now()}-${newImage.name}`;
        const { error: uploadError } = await supabase.storage
          .from("properties")
          .upload(fileName, newImage, { upsert: true });

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("properties")
          .getPublicUrl(fileName);

        imageUrl = data.publicUrl;
      }

      // Actualizar en DB
      const { error } = await supabase
        .from("properties")
        .update({
          title: form.title,
          price: form.price,
          description: form.description,
          ...(imageUrl && { image_url: imageUrl }),
        })
        .eq("id", editing);

      if (error) throw error;

      alert("✅ Propiedad actualizada");

      // Actualizar en el estado local
      setProperties(
        properties.map((p) =>
          p.id === editing
            ? { ...p, ...form, ...(imageUrl && { image_url: imageUrl }) }
            : p
        )
      );

      setEditing(null);
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  // 🗑️ Eliminar propiedad completa
  const handleDelete = async (prop) => {
    if (!confirm("¿Seguro que querés eliminar esta propiedad?")) return;

    try {
      // 1. Obtener nombre de archivo desde URL
      const urlParts = prop.image_url?.split("/");
      const fileName = urlParts ? urlParts[urlParts.length - 1] : null;

      // 2. Eliminar imagen de Storage
      if (fileName) {
        await supabase.storage.from("properties").remove([fileName]);
      }

      // 3. Eliminar de la tabla
      const { error: dbError } = await supabase
        .from("properties")
        .delete()
        .eq("id", prop.id);

      if (dbError) throw dbError;

      alert("🗑️ Propiedad eliminada con éxito");
      setProperties(properties.filter((p) => p.id !== prop.id));
    } catch (err) {
      alert("❌ Error eliminando: " + err.message);
    }
  };

  // 📷 Manejar nueva imagen y preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setPreview(URL.createObjectURL(file)); // Preview local
    }
  };

  // ❌ Eliminar solo la imagen
  const handleRemoveImage = async () => {
    try {
      const prop = properties.find((p) => p.id === editing);
      if (!prop?.image_url) {
        alert("Esta propiedad no tiene imagen.");
        return;
      }

      const urlParts = prop.image_url.split("/");
      const fileName = urlParts[urlParts.length - 1];

      // Borrar del Storage
      const { error: storageError } = await supabase.storage
        .from("properties")
        .remove([fileName]);

      if (storageError) throw storageError;

      // Actualizar DB
      const { error: dbError } = await supabase
        .from("properties")
        .update({ image_url: null })
        .eq("id", editing);

      if (dbError) throw dbError;

      alert("🖼️ Imagen eliminada con éxito");

      // Actualizar estado local
      setProperties(
        properties.map((p) =>
          p.id === editing ? { ...p, image_url: null } : p
        )
      );
    } catch (err) {
      alert("❌ Error eliminando imagen: " + err.message);
    }
  };

  if (loading) return <p className="p-6">Cargando...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mis propiedades</h1>
      {properties.length === 0 ? (
        <p>No tenés propiedades cargadas aún.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((prop) => (
            <div
              key={prop.id}
              className="border rounded-lg shadow-md overflow-hidden"
            >
              {prop.image_url ? (
                <img
                  src={prop.image_url}
                  alt={prop.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Sin imagen</span>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
                <p className="text-emeraldDark font-semibold mt-2">
                  ${prop.price.toLocaleString("es-AR")}
                </p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(prop)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(prop)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de edición */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Editar propiedad</h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="border w-full p-2 rounded"
                required
              />
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="border w-full p-2 rounded"
                required
              />
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="border w-full p-2 rounded"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full"
              />

              {/* Preview de la nueva imagen */}
              {preview && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-1">Vista previa:</p>
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded"
                  />
                </div>
              )}

              {/* Botón para eliminar solo la imagen */}
              <button
                type="button"
                onClick={handleRemoveImage}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mt-2"
              >
                Eliminar imagen
              </button>

              <div className="flex gap-2 mt-4">
                <button
                  type="submit"
                  className="bg-emeraldDark text-white px-3 py-1 rounded hover:bg-emerald-800"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MisPropiedades;
