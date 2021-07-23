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

export async function setTreeData(
  background,
  treeLocation,
  whoAround,
  growing
) {
  const user = supabase.auth.user();

  const updates = {
    id: user.id,
    background,
    tree_location: treeLocation,
    who_around: [whoAround],
    growing: [growing],
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function getProfileData() {
  const user = supabase.auth.user();

  let { data, error, status } = await supabase
    .from("profiles")
    .select(`adult_name, avatar_url, child_name, child_avatar`)
    .eq("id", user.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }
  return data;
}

export async function setProfileData({
  adult_name,
  avatar_url,
  child_name,
  child_avatar,
}) {
  const user = supabase.auth.user();

  const updates = {
    id: user.id,
    adult_name,
    avatar_url,
    child_name,
    child_avatar,
    updated_at: new Date(),
  };

  let { error } = await supabase.from("profiles").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}
