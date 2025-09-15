import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vkfhyblxwujsqtdhxqm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZmZ5aGJseHd1anFzdGRoeHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MTE1MzcsImV4cCI6MjA3MzE4NzUzN30.IBAS7bD1xrXpbI6U31rntQNJWw0nEB82ZmNwhmbSCLA"
);

const run = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "morellfrancisco@gmail.com",
    password: "Pancho17",
  });

  console.log("DATA:", data);
  console.log("ERROR:", error);
};

run();
