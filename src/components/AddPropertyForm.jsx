import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const AddPropertyForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUserId(data.session?.user?.id || null);
    });
  }, []);

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !userId) {
      alert("Falta imagen o usuario logueado");
      return;
    }

    try {
      // 1. Subir imagen
      const fileName = `${Date.now()}-${image.name}`;
      const { error: uploadError } = await supabase.storage
        .from("properties")
        .upload(fileName, image);

      if (uploadError) throw uploadError;

      // 2. URL pública
      const { data } = supabase.storage
        .from("properties")
        .getPublicUrl(fileName);

      const imageUrl = data.publicUrl;

      // 3. Insertar propiedad con user_id
      const { error: insertError } = await supabase.from("properties").insert([
        {
          user_id: userId,   // 👈 relación al usuario
          title,
          price,
          description,
          image_url: imageUrl,
        },
      ]);

      if (insertError) throw insertError;

      alert("Propiedad guardada con éxito 🚀");
      setTitle(""); setPrice(""); setDescription(""); setImage(null);

    } catch (err) {
      console.error("Error al guardar propiedad:", err.message);
      alert("Hubo un error al guardar la propiedad.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} className="border w-full p-2 rounded" required />
      <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} className="border w-full p-2 rounded" required />
      <textarea placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} className="border w-full p-2 rounded" />
      <input type="file" accept="image/*" onChange={handleFileChange} className="w-full" required />
      <button type="submit" className="bg-emeraldDark text-white px-4 py-2 rounded hover:bg-emerald-700">Guardar propiedad</button>
    </form>
  );
};

export default AddPropertyForm;
