import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function ChildProfile({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [username, setUsername] = useState(null);
//   // const [website, setWebsite] = useState(null);
//   const [avatar_url, setAvatarUrl] = useState(null);

//   useEffect(() => {
//     getProfile();
//   }, [session]);

//   async function getProfile() {
//     try {
//       setLoading(true);
//       const user = supabase.auth.user();

//       let { data, error, status } = await supabase
//         .from("profiles")
//         .select(`username, avatar_url`)
//         .eq("id", user.id)
//         .single();

//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         setUsername(data.username);
//         // setWebsite(data.website);
//         setAvatarUrl(data.avatar_url);
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function updateProfile({ username, avatar_url }) {
//     try {
//       setLoading(true);
//       const user = supabase.auth.user();

//       const updates = {
//         id: user.id,
//         username,
//         avatar_url,
//         updated_at: new Date(),
//       };

//       let { error } = await supabase.from("profiles").upsert(updates, {
//         returning: "minimal", // Don't return the value after inserting
//       });

//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="child_username">Name</label>
        <input
          id="child_username"
          type="text"
          placeholder="What's your name?"
          value={child_username || ""}
          onChange={(e) => setChildUsername(e.target.value)}
        />
      </div>

    {/* <p>Choose your avatar:</p>
  <div>
    <input type="radio" id="child_avatar1"
     name="child_avatar" value={child_avatar || ""} onChange={(e) => setChildAvatar(e.target.value)}>
    <label htmlFor="child_avatar1">A</label>

    <input type="radio" id="child_avatar2"
     name="child_avatar" value={child_avatar || ""} onChange={(e) => setChildAvatar(e.target.value)}>
    <label htmlFor="child_avatar2">B</label>

    <input type="radio" id="child_avatar3"
     name="child_avatar" value={child_avatar || ""} onChange={(e) => setChildAvatar(e.target.value)}>
    <label htmlFor="child_avatar3">C</label>
  </div> */}

      {/* <div>
        <label htmlFor='child_avatar'>Choose your avatar</label>
        <input
          id='child_avatar'
          type='child_avatar'
          value={child_avatar || ""}
          onChange={(e) => setChildAvatar(e.target.value)}
        />
      </div> */}

      <div>
        <button
          className="button block primary"
          onClick={() => updateProfile({ child_username, avatar_url })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
