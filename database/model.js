import { supabase } from "./../src/supabaseClient";

export async function getMeTree() {
  console.log("model.getMeTree");
  const user = supabase.auth.user();

  let { data, error, status } = await supabase
    .from("me_tree")
    .select(
      `background, tree_location, who_around, growing, growing_left, growing_top, who_around_top, who_around_left,boxes`
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
  whoAround_coords,
  boxes
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

export async function setProfileData({ single_data }) {
  const user = supabase.auth.user();

  const updates = {
    id: user.id,
    single_data,
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

// export async function setGrowingData(growing) {
//   console.log("set growing data", growing);
//   const user = supabase.auth.user();
//   const updates = {
//     id: user.id,
//     growing: [growing],
//   };

//   let { error } = await supabase.from("me_tree").upsert(updates, {
//     returning: "minimal", // Don't return the value after inserting
//   });

//   if (error) {
//     throw error;
//   }
// }

export async function setGrowingLeftData(growing_left) {
  console.log("set growing left data", growing_left);
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    growing_left,
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setGrowingTopData(growing_top) {
  console.log("set growing top data", growing_top);
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    growing_top
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
   boxes
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

// export async function setWhoAroundCoordsData(whoAround_coords) {
//   const user = supabase.auth.user();
//   const updates = {
//     id: user.id,
//     who_around_top: whoAround_coords.top,
//     who_around_left: whoAround_coords.left,
//   };

//   let { error } = await supabase.from("me_tree").upsert(updates, {
//     returning: "minimal", // Don't return the value after inserting
//   });

//   if (error) {
//     throw error;
//   }
// }

export async function setWhoAroundLeftData(who_around_left) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    who_around_left
  };

  let { error } = await supabase.from("me_tree").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) {
    throw error;
  }
}

export async function setWhoAroundTopData(who_around_top) {
  const user = supabase.auth.user();
  const updates = {
    id: user.id,
    who_around_top

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

  return await Promise.all([treeData, galleryData, profileData])
    .then((dataArray) => {
      const treeData = { tree: dataArray[0] };
      const galleryData = { gallery: dataArray[1] };
      const profileData = { profile: dataArray[2] };
      console.log("dataArray", dataArray);
      // this is an array of objects
      let allData = Object.assign(treeData, galleryData, profileData);
      console.log("allData", allData);
      return allData;
    })
    .catch((error) => {
      console.error("error!!", error, error.message);
    });
}

// export async function setAllData(data) {
//   console.log("setAllData - data", data);
//   const treeDataSaved = setTreeData(
//     data.tree.background,
//     data.tree.treeLocation,
//     data.tree.whoAround,
//     data.tree.growing,
//     data.tree.growing_coords,
//     data.tree.whoAround_coords
//   );
//   const galleryDataSaved = setGalleryData(data.gallery.images);
//   const profileDataSaved = setProfileData(
//     data.profile.adult_name,
//     data.profile.avatar_url,
//     data.profile.child_name,
//     data.profile.child_avatar
//   );

//   return;
//   await Promise.all([treeDataSaved, galleryDataSaved, profileDataSaved])
//   .catch((error) => {
//     console.error("error!!", error, error.message);
//   });
// }

export async function setData(data) {
  console.log("setData - data", data);

  if (data.tree.treeLocation) {
    setTreeLocationData(data.tree.treeLocation);
  }
  if (data.tree.growing) {
    setGrowingData(data.tree.growing);
  }
  if (data.tree.whoAround) {
    setWhoAroundData(data.tree.whoAround);
  }
  if (data.tree.background) {
    console.log("if statemenmt for background in model");
    setBackgroundData(data.tree.background);
  }
  // if (data.tree.growing_coords) {
  //   setGrowingCoordsData(data.tree.growing_coords);
  // }
  if (data.tree.growing_left) {
    setGrowingLeftData(data.tree.growing_left);
  }
  if (data.tree.growing_top) {
    setGrowingTopData(data.tree.growing_top);
  }
  // if (data.tree.whoAround_coords) {
  //   setWhoAroundCoordsData(data.tree.whoAround_coords);
  // }
  if (data.tree.who_around_left) {
    setWhoAroundLeftData(data.tree.who_around_left);
  }
  if (data.tree.who_around_top) {
    setWhoAroundTopData(data.tree.who_around_top);
  }
  if (data.tree.boxes) {
    setBoxesData(data.tree.boxes);
  }
  if (data.gallery.images) {
    console.log("if statemenmt for background in model");
    setGalleryData(images);
  }
  if (data.profile.adult_name) {
    setProfileData(data.profile.adult_name);
  }
  if (data.profile.avatar_url) {
    setProfileData(data.profile.avatar_url);
  }
  if (data.profile.child_name) {
    setProfileData(data.profile.child_name);
  }
  if (data.profile.child_avatar) {
    setProfileData(data.profile.child_avatar);
  }

  // const treeDataSaved = setTreeData(
  //   data.tree.background,
  //   data.tree.treeLocation,
  //   data.tree.whoAround,
  //   data.tree.growing,
  //   data.tree.growing_coords,
  //   data.tree.whoAround_coords
  // );
  // const galleryDataSaved = setGalleryData(data.gallery.images);
  // const profileDataSaved = setProfileData(
  //   data.profile.adult_name,
  //   data.profile.avatar_url,
  //   data.profile.child_name,
  //   data.profile.child_avatar
  // );

  // return
  // await Promise.all([treeDataSaved, galleryDataSaved, profileDataSaved]).catch(
  //   (error) => {
  //     console.error("error!!", error, error.message);
  //   }
  // );
}
