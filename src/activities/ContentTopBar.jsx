import React from "react";
import { useContext } from "react";
import {
  MakeNav2,
  PlayNav2,
  WonderNav2,
  ThinkNav2,
  MeTreeNav,
} from "../images/Navigation";
import "./../layout/ContentNav.css";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";

export default function ContentTopBar() {
  const { contentState, dispatch } = useContext(ContentContext);
  return (
    <div className="flex flex-center space-between narrow center mobile-low mobile-wide content-nav">
      <a className="opaque" href="/">
        <img className="top-bar-btn" src={MeTreeNav} />
      </a>
      <a
        className={`${
          contentState.current_subsection === "play" ? "" : "opaque"
        }`}
        href="#"
        onClick={() => {
          dispatch({
            type: ACTIONS.SET_MULTIPLE,
            payload: {
              current_subsection: "play",
            },
          });
        }}
      >
        <img className="top-bar-btn" src={PlayNav2} />
      </a>
      <a
        className={`${
          contentState.current_subsection === "think" ? "" : "opaque"
        }`}
        href="#"
        onClick={() => {
          dispatch({
            type: ACTIONS.SET_MULTIPLE,
            payload: {
              current_subsection: "think",
            },
          });
        }}
      >
        <img className="top-bar-btn" src={ThinkNav2} />
      </a>
      <a
        className={`${
          contentState.current_subsection === "make" ? "" : "opaque"
        }`}
        href="#"
        onClick={() => {
          dispatch({
            type: ACTIONS.SET_MULTIPLE,
            payload: {
              current_subsection: "make",
            },
          });
        }}
      >
        <img className="top-bar-btn" src={MakeNav2} />
      </a>
      <a
        className={`${
          contentState.current_subsection === "wonder" ? "" : "opaque"
        }`}
        href="#"
        onClick={() => {
          dispatch({
            type: ACTIONS.SET_MULTIPLE,
            payload: {
              current_subsection: "wonder",
            },
          });
        }}
      >
        <img className="top-bar-btn" src={WonderNav2} />
      </a>
    </div>
  );
}
