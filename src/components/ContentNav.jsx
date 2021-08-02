import React from "react";
import Menu from "react-burger-menu/lib/menus/slide";
// import "./../Layout/NavMenu.css";
import "./../Layout/ContentNav.css";

export default function ContentNav() {
  return (
    <Menu
      // noOverlay
      burgerButtonClassName={"content-burger-btn"}
      customBurgerIcon={<img src="logo.svg" />}
    >
      <a id="home" className="menu-item" href="/">
        Think Bank
      </a>
      <a id="adult-profile" className="menu-item" href="/adult-profile">
        Wonder Tree
      </a>
    </Menu>
  );
}
