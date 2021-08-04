import { supabase } from "./../src/supabaseClient";

export async function getMeTree() {
  console.log("model.getMeTree");
  const user = supabase.auth.user();

  let { data, error, status } = await supabase
    .from("me_tree")
    .select(
      `background, tree_location, who_around, growing, growing_left, growing_top, who_around_top, who_around_left`
    )
    .eq("id", user.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }
  console.log("data from getMetree", data);
  return data;
}

export async function setTreeData(
  background,
  treeLocation,
  whoAround,
  growing,
  growing_coords,
  whoAround_coords
) {
  const user = supabase.auth.user();
  console.log("model.setTreeData");

  const updates = {
    id: user.id,
    background,
    tree_location: treeLocation,
    who_around: [whoAround],
    growing: [growing],
    growing_left: growing_coords.left,
    growing_top: growing_coords.top,
    who_around_top: whoAround_coords.top,
    who_around_left: whoAround_coords.left,
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

// set individual fields in data

export async function setBackgroundData(background) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    background,
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setTreeLocationData(treeLocation) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    tree_location: treeLocation,
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setWhoAroundData(whoAround) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    who_around: [whoAround],
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setGrowingData(growing) {
  console.log("set growing data", growing);
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    growing: [growing],
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setGrowingCoordsData(growing_coords) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    growing_left: growing_coords.left,
    growing_top: growing_coords.top,
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setWhoAroundCoordsData(whoAround_coords) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    who_around_top: whoAround_coords.top,
    who_around_left: whoAround_coords.left,
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setGalleryData(images) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    images,
  };

  let { error } = await supabase.from("gallery").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function getGalleryData() {
  const user = supabase.auth.user();

  let { data, error, status } = await supabase
    .from("gallery")
    .select(`images`)
    .eq("id", user.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }
  return data;
}

export async function getAllData() {
  const treeData = getMeTree();
  const galleryData = getGalleryData();
  const profileData = getProfileData();

  await Promise.all([treeData, galleryData, profileData])
    .then((allData) => {
      console.log("alldata", allData);
    })
    .catch((error) => {
      console.error("error!!", error);
      // response.send(`<h1>Something has gone wrong! :(</h1>`);
    });

  // const user = supabase.auth.user();

  // let { data, error, status } = await supabase
  //   .from("gallery")
  //   .select(`images`)
  //   .eq("id", user.id)
  //   .single();

  // if (error && status !== 406) {
  //   throw error;
  // }
  // return data;
}
