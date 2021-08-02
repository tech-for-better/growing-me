import React from "react";
// import "./../Layout/NavMenu.css";
import MakeNav from "./../../assets/simple_make.svg";
import PlayNav from "./../../assets/simple_play_1.svg";
import WonderNav from "./../../assets/simple_wonder.svg";
import ThinkNav from "./../../assets/simple_think.svg";
import "./../Layout/ContentNav.css";

export default function ContentTopBar() {
  return (
    <div className="flex flex-center space-between narrow center">
      <a id="home" className="menu-item" href="/">
        <img className="top-bar-btn" src={PlayNav} />
      </a>
      <a id="home" href="/">
        <img className="top-bar-btn" src={ThinkNav} />
      </a>
      <a id="home" href="/">
        <img className="top-bar-btn" src={MakeNav} />
      </a>
      <a id="home" href="/">
        <img className="top-bar-btn" src={WonderNav} />
      </a>
    </div>
  );
}
