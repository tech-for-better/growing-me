import React from "react";
import { useContext } from "react";
// import "./../Layout/NavMenu.css";
// import MakeNav from "/assets/simple_make.svg";
// import PlayNav from "/assets/simple_play_1.svg";
// import WonderNav from "/assets/simple_wonder.svg";
// import ThinkNav from "/assets/simple_think.svg";
import MakeNav2 from "/assets/make_table.svg";
import PlayNav2 from "/assets/play_den_button.svg";
import WonderNav2 from "/assets/wonder_time.svg";
import ThinkNav2 from "/assets/think_story.svg";
import MeTreeNav from "/assets/me_tree.svg";
import "./../Layout/ContentNav.css";
import { ContentContext } from "../Content";
import { ACTIONS } from "../Content";
import { ContentData } from "../ContentData";

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
          // dispatch({
          //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
          //   new_sub_section: "play",
          // });
          // dispatch({
          //   type: ACTIONS.UPDATE_CURRENT_SLIDE,
          //   // new_slide: "1",
          //   new_slide:
          //     ContentData[state.current_section][state.current_subsection][1],
          // });
          //setting two disptach causes delay - here attempted to combine.
          dispatch({
            type: ACTIONS.SET_MULTIPLE,
            payload: {
              current_subsection: "play",
              current_slide: ContentData[state.current_section]["play"][1]
              // current_slide: "1",
            },
          });
        }}
      >
        <img className="top-bar-btn" src={PlayNav2} />
      </a>
      <a
        className={`${state.current_subsection === "think" ? "" : "opaque"}`}
        href="#"
        onClick={() => {
          // dispatch({
          //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
          //   new_sub_section: "think",
          // });
          // dispatch({
          //   type: ACTIONS.UPDATE_CURRENT_SLIDE,
          //   // new_slide: "1",
          //   new_slide:
          //     ContentData[state.current_section][state.current_subsection][1],
          // });
          dispatch({
            type: ACTIONS.SET_MULTIPLE,
            payload: {
              current_subsection: "think",
              current_slide: ContentData[state.current_section]["think"][1]
              // current_slide: "1",
            },
          });
        }}
      >
        <img className="top-bar-btn" src={ThinkNav2} />
      </a>
      <a
        className={`${state.current_subsection === "make" ? "" : "opaque"}`}
        href="#"
        onClick={() => {
          // dispatch({
          //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
          //   new_sub_section: "make",
          // });
          // dispatch({
          //   type: ACTIONS.UPDATE_CURRENT_SLIDE,
          //   //
          //   new_slide:
          //     ContentData[state.current_section][state.current_subsection][1],
          // });
             dispatch({
               type: ACTIONS.SET_MULTIPLE,
               payload: {
                 current_subsection: "make",
                  current_slide:
                    ContentData[state.current_section][
                      "make"
                    ][1],
                //  current_slide: "1",
               },
             });
        }}
      >
        <img className="top-bar-btn" src={MakeNav2} />
      </a>
      <a
        className={`${state.current_subsection === "wonder" ? "" : "opaque"}`}
        href="#"
        onClick={() => {
          // dispatch({
          //   type: ACTIONS.UPDATE_CURRENT_SUB_SECTION,
          //   new_sub_section: "wonder",
          // });
          // dispatch({
          //   type: ACTIONS.UPDATE_CURRENT_SLIDE,
          //   // new_slide: "1",
          //   new_slide:
          //     ContentData[state.current_section][state.current_subsection][1],
          // });
             dispatch({
               type: ACTIONS.SET_MULTIPLE,
               payload: {
                 current_subsection: "wonder",
                  current_slide:
                    ContentData[state.current_section][
                      "wonder"
                    ][1],
                //  current_slide: "1",
               },
             });
        }}
      >
        <img className="top-bar-btn" src={WonderNav2} />
      </a>
    </div>
  );
}
