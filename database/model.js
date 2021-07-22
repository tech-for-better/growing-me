import { supabase } from "./../src/supabaseClient";

export async function getMeTree() {
  const user = supabase.auth.user();

  let { data, error, status } = await supabase
    .from("me_tree")
    .select(`background, tree_location, who_around, growing`)
    .eq("id", user.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }

  return data;
}
