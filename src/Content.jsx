import React from "react";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
// import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import ContentNav from "./components/ContentNav";
import ContentTopBar from "./components/ContentTopBar";

const initialState = {
  current_section: "your brain is amazing",
  current_subsection: "play",
  unlocked: ["great to meet you", "your brain is amazing"],
};
console.log("initial state content", initialState);

export const ACTIONS = {
  UPDATE_CURRENT_SECTION: "update_current_section",
  ADD_TO_UNLOCKED: "add_to_unlocked",
  UPDATE_CURRENT_SUB_SECTION: "update_current_sub_section",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_CURRENT_SECTION:
      const current_section = action.new_section;
      return { ...state, current_section };
    case ACTIONS.ADD_TO_UNLOCKED:
      const unlocked = [...state.unlocked, action.new_unlocked];
      return { ...state, unlocked };
    case ACTIONS.UPDATE_CURRENT_SUB_SECTION:
      console.log("updating subsection");
      const current_subsection = action.new_sub_section;
      console.log(current_subsection);
      return { ...state, current_subsection };
    default:
      return state;
  }
}

export const ContentContext = createContext();

export default function Content() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("content top bar state: ", state);
  }, [state]);

  return (
    <>
      <ContentContext.Provider value={{ state, dispatch }}>
        <div className="content--top-nav">
          <ContentTopBar />
          <ContentNav />
          <NavMenu />
        </div>
        <div>{/* <p>Content here</p> */}</div>
      </ContentContext.Provider>
    </>
  );
}
