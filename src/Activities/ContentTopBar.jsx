import React from "react";
import { useContext } from "react";
import {
  MakeNav2,
  PlayNav2,
  WonderNav2,
  ThinkNav2,
  MeTreeNav,
} from "../images/Navigation";

import "./../Layout/ContentNav.css";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { ContentData } from "./ContentData";

("./../../public/assets/Logo.svg");

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
        onClick={() => {
          dispatch({
            type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
            new_sub_section: "play",
          });
          // dispatch({
          //   type: ACTIONS.UPDATE_first_slide,
          //   // new_slide: "1",
          //   new_slide:
          //     ContentData[state.current_section][state.current_subsection][1],
          // });
          //setting two disptach causes delay - here attempted to combine.
          // dispatch({
          //   type: ACTIONS.SET_MULTIPLE,
          //   payload: {
          //     current_subsection: "play",
          //     // first_slide: ContentData[state.current_section]["play"][1]
          //     // first_slide: "1",
          //   },
          // });
        }}
      >
        <img className="top-bar-btn" src={PlayNav2} />
      </a>
      <a
        className={`${state.current_subsection === "think" ? "" : "opaque"}`}
        href="#"
        onClick={() => {
          dispatch({
            type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
            new_sub_section: "think",
          });
          // dispatch({
          //   type: ACTIONS.UPDATE_first_slide,
          //   // new_slide: "1",
          //   new_slide:
          //     ContentData[state.current_section][state.current_subsection][1],
          // });
          // dispatch({
          //   type: ACTIONS.SET_MULTIPLE,
          //   payload: {
          //     current_subsection: "think",
          //     // first_slide: ContentData[state.current_section]["think"][1]
          //     // first_slide: "1",
          //   },
          // });
        }}
      >
        <img className="top-bar-btn" src={ThinkNav2} />
      </a>
      <a
        className={`${state.current_subsection === "make" ? "" : "opaque"}`}
        href="#"
        onClick={() => {
          dispatch({
            type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
            new_sub_section: "make",
          });
          // dispatch({
          //   type: ACTIONS.UPDATE_first_slide,
          //   //
          //   new_slide:
          //     ContentData[state.current_section][state.current_subsection][1],
          // });
          //  dispatch({
          //    type: ACTIONS.SET_MULTIPLE,
          //    payload: {
          //      current_subsection: "make",
          //       // first_slide:
          //       //   ContentData[state.current_section][
          //       //     "make"
          //       //   ][1],
          //     //  first_slide: "1",
          //    },
          //  });
        }}
      >
        <img className="top-bar-btn" src={MakeNav2} />
      </a>
      <a
        className={`${state.current_subsection === "wonder" ? "" : "opaque"}`}
        href="#"
        onClick={() => {
          dispatch({
            type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
            new_sub_section: "wonder",
          });
          // dispatch({
          //   type: ACTIONS.UPDATE_first_slide,
          //   // new_slide: "1",
          //   new_slide:
          //     ContentData[state.current_section][state.current_subsection][1],
          // });
          //  dispatch({
          //    type: ACTIONS.SET_MULTIPLE,
          //    payload: {
          //      current_subsection: "wonder",
          //       // first_slide:
          //       //   ContentData[state.current_section][
          //       //     "wonder"
          //       //   ][1],
          //     //  first_slide: "1",
          //    },
          //  });
        }}
      >
        <img className="top-bar-btn" src={WonderNav2} />
      </a>
    </div>
  );
}
