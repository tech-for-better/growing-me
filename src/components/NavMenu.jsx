import React from "react";
import { useHistory } from "react-router";
import Menu from "react-burger-menu/lib/menus/slide";
import "./../Layout/NavMenu.css";
import { useAuth } from "./../contexts/Auth";

export default function NavMenu() {
  // Get current user and signOut function from context
  const { user, signOut } = useAuth();
  const history = useHistory();
  async function handleSignOut() {
    console.log("this fn gets called when clicking logout");
    // Ends user session
    await signOut();
    // Redirects the user to Login page
    history.push("/login");
  }
  return (
    <Menu right>
      <a id="home" className="menu-item" href="/">
        Me Tree
      </a>
      <a id="adult-profile" className="menu-item" href="/adult-profile">
        Profile
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          handleSignOut();
        }}
        id="contact"
        className="menu-item"
        href="/contact"
      >
        Logout
      </a>
    </Menu>
  );
}
