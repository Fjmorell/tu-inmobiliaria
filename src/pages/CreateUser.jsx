import { useState } from "react";
import { supabase } from "../lib/supabase";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("propietario"); // 👈 default
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role }, // 👈 se guarda el rol elegido
      },
    });

    if (error) {
      setMessage("❌ " + error.message);
    } else {
      setMessage("✅ Usuario creado con éxito: " + data.user.email);
      setEmail("");
      setPassword("");
      setRole("propietario");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Crear nuevo usuario</h2>
      {message && <p className="mb-2">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className="w-full p-2 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="propietario">Propietario</option>
          <option value="inmobiliaria">Inmobiliaria</option>
          <option value="admin">Administrador</option>
        </select>

        <button
          type="submit"
          className="w-full bg-emeraldDark text-white py-2 rounded hover:bg-emerald-800"
        >
          Crear usuario
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
