import React from "react";
import { createContext, useReducer } from "react";
import NavMenu from "../components/NavMenu";
import ContentNav from "./ContentNav";
import ContentTopBar from "./ContentTopBar";
import InnerContent from "./InnerContent";

const initialState = {
  current_section: "Your Brain is Amazing",
  current_subsection: "play",
  // unlocked: ["Great To Meet You", "Your Brain is Amazing"],
};

export const ACTIONS = {
  UPDATE_CURRENT_SECTION: "update_current_section",
  // ADD_TO_UNLOCKED: "add_to_unlocked",
  UPDATE_CURRENT_SUB_SECTION: "update_current_sub_section",
  UPDATE_FIRST_SLIDE: "update_first_slide",
  SET_MULTIPLE: "set_multiple",
};

function reducer(state, action) {
  console.log("REDUCER, STATE", state);
  console.log("REDUCER, ACTION", action);
  switch (action.type) {
    case ACTIONS.UPDATE_CURRENT_SECTION:
      // const current_section = action.new_section;
      // return { ...state, current_section };
      return { ...state, current_section: action.payload.current_section };

    // case ACTIONS.ADD_TO_UNLOCKED:
    //   const unlocked = [...state.unlocked, action.new_unlocked];
    //   return { ...state, unlocked };

    case ACTIONS.UPDATE_CURRENT_SUB_SECTION:
      // const current_subsection = action.new_sub_section;
      // console.log("CURRENT SUBsection ", current_subsection);
      // return { ...state, current_subsection };
      return {
        ...state,
        current_subsection: action.payload.current_subsection,
      };

    case ACTIONS.SET_MULTIPLE:
      console.log("HERE", action, action.type, state);
      return { ...state, ...action.payload }; // <---- HERE
    default:
      console.log("default path of content reducer");
      return state;
  }
}

export const ContentContext = createContext();

export default function Content() {
  const [contentState, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ContentContext.Provider value={{ contentState, dispatch }}>
        <div className="content--top-nav">
          <ContentTopBar />
          <ContentNav />
          <NavMenu />
        </div>
        <InnerContent />
      </ContentContext.Provider>
    </>
  );
}
