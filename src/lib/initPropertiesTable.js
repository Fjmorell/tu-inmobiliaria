import { supabase } from "./supabase";

export async function initPropertiesTable() {
  const sql = `
    create table if not exists properties (
      id uuid primary key default gen_random_uuid(),
      user_id uuid references auth.users(id) on delete cascade not null,
      title text not null,
      description text,
      price numeric not null,
      image_url text,
      created_at timestamp with time zone default now(),
      updated_at timestamp with time zone default now()
    );

    alter table properties enable row level security;

    create policy if not exists "Usuarios pueden insertar sus propiedades"
    on properties for insert
    to authenticated
    with check (user_id = auth.uid());

    create policy if not exists "Usuarios pueden ver solo sus propiedades"
    on properties for select
    to authenticated
    using (user_id = auth.uid());

    create policy if not exists "Usuarios pueden editar sus propiedades"
    on properties for update
    to authenticated
    using (user_id = auth.uid())
    with check (user_id = auth.uid());

    create policy if not exists "Usuarios pueden borrar sus propiedades"
    on properties for delete
    to authenticated
    using (user_id = auth.uid());
  `;

  const { error } = await supabase.rpc("exec_sql", { query: sql });

  if (error) {
    console.error("❌ Error creando tabla o policies:", error.message);
  } else {
    console.log("✅ Tabla properties inicializada correctamente");
  }
}
