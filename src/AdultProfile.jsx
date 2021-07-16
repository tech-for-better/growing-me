import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import logo from "./../assets/Logo.svg";
import Avatar from "./components/Avatar";
import { Link, useHistory } from "react-router-dom";
// import ChildProfile from "./ChildProfile";
import cuteVisitor from "./../assets/cute_visitors.svg";
import pricklyVisitor from "../assets/prickly_visitors.svg";
import fluffyVisitor from "./../assets/fluffy_visitors.svg";
import creepyCrawlyVisitor from "./../assets/creepy_crawly_visitors.svg";
import { ChildAvatar } from "./Layout/ChildProfile.styled";

export default function AdultProfile({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [child_name, setChildName] = useState(null);
  const [child_avatar, setChildAvatarUrl] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, avatar_url, child_name, child_avatar`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setChildName(data.child_name);
        setAvatarUrl(data.avatar_url);
        setChildAvatarUrl(data.child_avatar);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    avatar_url,
    child_name,
    child_avatar,
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
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
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      history.push("/me-tree");
    }
  }

  return (
    <div className="form-widget">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <h1 className="header">Create your Growing Me profile</h1>
      </div>

      <p>
        Go to <Link to="/me-tree">MeTree</Link>
        <Link to="/whose-playing"> whose </Link>
        <Link to="/child-profile">child </Link>
        <Link to="/login">login </Link>
        <Link to="/adult-profile">Profile</Link>
      </p>
      <Avatar
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({
            username,
            avatar_url: url,
            child_name,
            child_avatar,
          });
        }}
      />
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Your email"
          value={session.user.email}
          disabled
        />
      </div>
      <div>
        <label htmlFor="username">Adult's Name</label>
        <input
          id="username"
          type="text"
          placeholder="The name your child calls you"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="child_username">Child's Name</label>
        <input
          id="child_username"
          type="text"
          placeholder="What's your name?"
          value={child_name || ""}
          onChange={(e) => setChildName(e.target.value)}
        />
      </div>

      <p>Choose your avatar:</p>
      <div>
        <input
          type="radio"
          id="child_avatar1"
          name="child_avatar"
          value="./../assets/cute_visitors.svg"
          onChange={(e) => setChildAvatarUrl(e.target.value)}
        />
        <label htmlFor="child_avatar1">
          <ChildAvatar src={cuteVisitor} alt="" />
        </label>

        <input
          type="radio"
          id="child_avatar2"
          name="child_avatar"
          value="./../assets/fluffy_visitors.svg"
          onChange={(e) => setChildAvatarUrl(e.target.value)}
        />
        <label htmlFor="child_avatar2">
          <ChildAvatar src={fluffyVisitor} alt="" />
        </label>

        <input
          type="radio"
          id="child_avatar3"
          name="child_avatar"
          value="./../assets/prickly_visitors.svg"
          onChange={(e) => setChildAvatarUrl(e.target.value)}
        />
        <label htmlFor="child_avatar4">
          <ChildAvatar src={pricklyVisitor} alt="" />
        </label>
        <input
          type="radio"
          id="child_avatar4"
          name="child_avatar"
          value="./../assets/creepy_crawly_visitors.svg"
          onChange={(e) => setChildAvatarUrl(e.target.value)}
        />
        <label htmlFor="child_avatar3">
          <ChildAvatar src={creepyCrawlyVisitor} alt="" />
        </label>
      </div>
      <div>
        <button
          className="button block primary"
          onClick={() =>
            updateProfile({ username, avatar_url, child_name, child_avatar })
          }
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
