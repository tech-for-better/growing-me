import React from "react";
import Menu from "react-burger-menu/lib/menus/slide";
// import "./../Layout/NavMenu.css";
import "./../Layout/ContentNav.css";
import Collapsible from "react-collapsible";

export default function ContentNav() {
  return (
    <Menu
      // noOverlay
      burgerButtonClassName={"content-burger-btn"}
      customBurgerIcon={<img src="logo.svg" />}
      itemListClassName={"content-item-list"}
      itemClassName={"content-item"}
    >
      <Collapsible trigger="Great to meet you">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="Your brain is amazing">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="Your feelings matter">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You're not alone">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You're safe">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You're unique">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You're brave">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You belong here">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="The future is bright">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
      <Collapsible trigger="You are a wonder">
        <a id="home" className="menu-item" href="#">
          Play Den
        </a>
        <a id="home" className="menu-item" href="#">
          Think Bank
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Make Station
        </a>
        <a id="adult-profile" className="menu-item" href="#">
          Wonder Tree
        </a>
      </Collapsible>
    </Menu>
  );
}
