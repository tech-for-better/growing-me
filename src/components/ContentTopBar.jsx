import React from "react";
import { useContext } from "react";
// import "./../Layout/NavMenu.css";
// import MakeNav from "./../../assets/simple_make.svg";
// import PlayNav from "./../../assets/simple_play_1.svg";
// import WonderNav from "./../../assets/simple_wonder.svg";
// import ThinkNav from "./../../assets/simple_think.svg";
import MakeNav2 from "./../../assets/make_table.svg";
import PlayNav2 from "./../../assets/play_den_button.svg";
import WonderNav2 from "./../../assets/wonder_time.svg";
import ThinkNav2 from "./../../assets/think_story.svg";
import MeTreeNav from "./../../assets/me_tree.svg";
import "./../Layout/ContentNav.css";
import { ContentContext } from "../Content";
import { ACTIONS } from "../Content";

export default function ContentTopBar() {
  const { state, dispatch } = useContext(ContentContext);
  return (
    <div className="flex flex-center space-between narrow center mobile-low mobile-wide content-nav">
      <a className="opaque" href="/">
        <img className="top-bar-btn" src={MeTreeNav} />
      </a>
      <a
        className={`${state.current_subsection === "play" ? "" : "opaque"}`}
        href="#"
        onClick={() =>
          dispatch({
            type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
            new_sub_section: "play",
          })
        }
      >
        <img className="top-bar-btn" src={PlayNav2} />
      </a>
      <a
        className={`${state.current_subsection === "think" ? "" : "opaque"}`}
        href="#"
        onClick={() =>
          dispatch({
            type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
            new_sub_section: "think",
          })
        }
      >
        <img className="top-bar-btn" src={ThinkNav2} />
      </a>
      <a
        className={`${state.current_subsection === "make" ? "" : "opaque"}`}
        href="#"
        onClick={() =>
          dispatch({
            type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
            new_sub_section: "make",
          })
        }
      >
        <img className="top-bar-btn" src={MakeNav2} />
      </a>
      <a
        className={`${state.current_subsection === "wonder" ? "" : "opaque"}`}
        href="#"
        onClick={() =>
          dispatch({
            type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
            new_sub_section: "wonder",
          })
        }
      >
        <img className="top-bar-btn" src={WonderNav2} />
      </a>
    </div>
  );
}
