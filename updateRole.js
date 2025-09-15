import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // ⚠️ NO usar en frontend
);

async function updateRole(userId, newRole) {
  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
    user_metadata: { role: newRole },
  });

  if (error) {
    console.error("❌ Error:", error.message);
  } else {
    console.log("✅ Usuario actualizado:", data.user.email, "→", newRole);
  }
}

// 👉 Reemplazá con el UUID del usuario y el rol deseado
updateRole("6462c508-906d-4613-be45-0d3769deb0e6", "admin");
