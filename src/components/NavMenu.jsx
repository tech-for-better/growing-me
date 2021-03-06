import React from "react";
import { useHistory } from "react-router";
import Menu from "react-burger-menu/lib/menus/slide";
import "./../layout/NavMenu.css";
import { useAuth } from "../authentication/contexts/Auth";
import { Link } from "react-router-dom";

export default function NavMenu() {
  // Get current user and signOut function from context
  const { user, signOut } = useAuth();
  const history = useHistory();
  async function handleSignOut() {
    console.log("this fn gets called when clicking logout");
    // Ends user session
    await signOut();
    // Redirects the user to Login page
    history.push("/");
  }
  return (
    <Menu right>
      <Link className="menu-item" to={"/"}>
        Me Tree
      </Link>
      <Link className="menu-item" to="/adult-profile">
        Profile
      </Link>
      <Link className="menu-item" to="/content">
        Activities
      </Link>
      <Link className="menu-item" to="/gallery">
        Gallery
      </Link>
      <Link className="menu-item" to="/settings">
        Settings
      </Link>
      <Link
        onClick={(e) => {
          e.preventDefault();
          handleSignOut();
        }}
        className="menu-item"
        to="/"
      >
        Logout
      </Link>
    </Menu>
  );
}
