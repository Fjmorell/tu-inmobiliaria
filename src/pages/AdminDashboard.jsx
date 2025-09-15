import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [isAdmin, setIsAdmin] = useState(false);

  // Campos para crear usuario
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");

  useEffect(() => {
    const checkRole = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const role = session.user?.app_metadata?.role || "user";
        setIsAdmin(role === "admin");
        console.log("👤 Usuario logueado:", session.user.email, "Rol:", role);
      }
    };
    checkRole();
  }, []);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Subí una imagen antes de guardar");
      return;
    }

    try {
      // 1. Subir imagen al bucket
      const fileName = `${Date.now()}-${image.name}`;
      console.log("📤 Subiendo imagen al bucket:", fileName);

      const { error: uploadError } = await supabase.storage
        .from("properties")
        .upload(fileName, image);

      if (uploadError) {
        console.error("❌ Error al subir imagen:", uploadError.message);
        throw uploadError;
      }
      console.log("✅ Imagen subida correctamente");

      // 2. Obtener URL pública
      const { data } = supabase.storage.from("properties").getPublicUrl(fileName);
      const imageUrl = data.publicUrl;

      // 3. Insertar en tabla
      const { error: insertError } = await supabase.from("properties").insert([
        {
          title,
          price,
          description,
          image_url: imageUrl,
        },
      ]);

      if (insertError) {
        console.error("❌ Error en insert:", insertError.message);
        throw insertError;
      }

      alert("Propiedad guardada con éxito 🚀");
      setTitle("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error("❌ Error al guardar propiedad:", err.message);
      alert("Hubo un error al guardar la propiedad.");
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.admin.createUser({
        email: newUserEmail,
        password: newUserPassword,
        email_confirm: true, // 👈 opcional: marca email como verificado
        user_metadata: { role: "user" },
      });

      if (error) {
        console.error("❌ Error al crear usuario:", error.message);
        throw error;
      }

      console.log("✅ Usuario creado:", data);
      alert(`Usuario ${newUserEmail} creado con éxito 🚀`);
      setNewUserEmail("");
      setNewUserPassword("");
    } catch (err) {
      alert("Error al crear usuario: " + err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Panel de administración</h2>

      {/* Formulario propiedades */}
      <h3 className="text-lg font-semibold mb-2">Agregar propiedad</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border w-full p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
          required
        />
        <button
          type="submit"
          className="bg-emeraldDark text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          Guardar propiedad
        </button>
      </form>

      {/* Formulario crear usuario (solo admin) */}
      {isAdmin && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Crear nuevo usuario</h3>
          <form onSubmit={handleCreateUser} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              className="border w-full p-2 rounded"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={newUserPassword}
              onChange={(e) => setNewUserPassword(e.target.value)}
              className="border w-full p-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Crear usuario
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
