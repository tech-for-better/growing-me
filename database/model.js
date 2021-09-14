import { supabase } from "../src/authentication/supabaseClient";

// GET FUNCTIONS

export async function getMeTree() {
  console.log("model.getMeTree");
  const user = supabase.auth.user();
  if (!user) return;

  let { data, error, status } = await supabase
    .from("me_tree")
    .select(`background, tree_location, who_around, growing,boxes`)
    .eq("id", user.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }
  console.log("data from getMetree", data);
  return data;
}

export async function getProfileData() {
  const user = supabase.auth.user();
  if (!user) return;

  let { data, error, status } = await supabase
    .from("profiles")
    .select(`adult_name, avatar_url, child_name, child_avatar`)
    .eq("id", user.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }
  console.log("PROFILE DATA: ", data);
  return data;
}

export async function getGalleryData() {
  const user = supabase.auth.user();
  if (!user) return;

  let { data, error, status } = await supabase
    .from("gallery")
    .select(`me_tree_images, wonder_time_images`)
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
  const progressData = getProgressData();

  return await Promise.all([treeData, galleryData, profileData, progressData])
    .then((dataArray) => {
      const treeData = { tree: dataArray[0] };
      const galleryData = { gallery: dataArray[1] };
      const profileData = { profile: dataArray[2] };
      const progressData = { progress: dataArray[3] };
      console.log("dataArray", dataArray);
      // this is an array of objects
      let allData = Object.assign(
        treeData,
        galleryData,
        profileData,
        progressData
      );
      console.log("allData", allData);
      return allData;
    })
    .catch((error) => {
      console.error("error!!", error, error.message);
    });
}

export async function getProgressData() {
  const user = supabase.auth.user();
  if (!user) return;

  let { data, error, status } = await supabase
    .from("progress")
    .select(`unlocked`)
    .eq("id", user.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }
  return data;
}

// SET FUNCTIONS

export async function setAllProfileData({
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

export async function setChildAvatarData(child_avatar) {
  const user = supabase.auth.user();

  const updates = {
    id: user.id,
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

export async function setChildNameData(child_name) {
  const user = supabase.auth.user();

  const updates = {
    id: user.id,
    child_name,
    updated_at: new Date(),
  };

  let { error } = await supabase.from("profiles").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setAdultNameData(adult_name) {
  const user = supabase.auth.user();

  const updates = {
    id: user.id,
    adult_name,
    updated_at: new Date(),
  };

  let { error } = await supabase.from("profiles").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setAvatarUrlData(avatar_url) {
  const user = supabase.auth.user();

  const updates = {
    id: user.id,
    avatar_url,
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

export async function setTreeLocationData(tree_location) {
  console.log("set tree location data", tree_location);
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    tree_location,
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setBoxesData(boxes) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    boxes,
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setMeTreeImagesData(me_tree_images) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    me_tree_images,
  };

  let { error } = await supabase.from("gallery").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setWonderTimeImagesData(wonder_time_images) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    wonder_time_images,
  };

  let { error } = await supabase.from("gallery").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setProgressData(unlocked) {
  console.log("data in setProgressData", unlocked);
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    unlocked,
  };

  let { error } = await supabase.from("progress").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setData(data) {
  console.log("setData - data", data);

  let dataArray = Object.values(data);
  console.log("dataArray", dataArray);

  let newArr = dataArray.map((optionChange) => {
    console.log(optionChange);
    console.log("optionChange", Object.keys(optionChange));
    let changingValue = Object.keys(optionChange)[0];
    if (changingValue === "me_tree_images") {
      return setMeTreeImagesData(data.gallery.me_tree_images);
    } else if (changingValue === "tree_location") {
      return setTreeLocationData(data.tree.tree_location);
    } else if (changingValue === "wonder_time_images") {
      return setWonderTimeImagesData(data.gallery.wonder_time_images);
    } else if (changingValue === "background") {
      return setBackgroundData(data.tree.background);
    } else if (changingValue === "boxes") {
      return setBoxesData(data.tree.boxes);
    } else if (changingValue === "adult_name") {
      return setAdultNameData(data.profile.adult_name);
    } else if (changingValue === "avatar_url") {
      return setAvatarUrlData(data.profile.avatar_url);
    } else if (changingValue === "child_name") {
      console.log("about to run setProfileData with child_name", data);
      return setChildNameData(data.profile.child_name);
    } else if (changingValue === "child_avatar") {
      return setChildAvatarData(data.profile.child_avatar);
    } else if (changingValue === "unlocked") {
      return setProgressData(data.progress.unlocked);
    }
  });
}
