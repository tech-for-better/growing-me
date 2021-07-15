import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";

export default function WhosePlaying({ session }) {
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

  return <div className="form-widget">
    <p>
        Go to <Link to="/me-tree">MeTree</Link>
        <Link to="/whose-playing"> whose </Link>
        <Link to="/child-profile">child </Link>
        <Link to="/login">login </Link>
        <Link to="/">adult </Link>
      </p>
  </div>;
}
