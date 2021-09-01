import React from "react";
import { createContext, useReducer } from "react";
import NavMenu from "./components/NavMenu";
import ContentNav from "./components/ContentNav";
import ContentTopBar from "./components/ContentTopBar";
import InnerContent from "./InnerContent";

const initialState = {
  current_section: "Your Brain is Amazing",
  current_subsection: "play",
  unlocked: ["great to meet you", "your brain is amazing"],
  // first_slide: {
  //   img: "https://vxavjjcpsaykzxkhimor.supabase.in/storage/v1/object/sign/private/navigation/content_top_nav/PLAY_DEN.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcml2YXRlL25hdmlnYXRpb24vY29udGVudF90b3BfbmF2L1BMQVlfREVOLnN2ZyIsImlhdCI6MTYyODYwNzE2NCwiZXhwIjoxOTQzOTY3MTY0fQ.BFVhdsdXMj-C1Hw6YqXzojOulErg7P9i2RSBWpNf5ZM",

  //   txt: "Welcome back to the Play den! We'll start, like we always start Growing Me time with a fun and relaxing activity together. Let's go!",
  // },
};

export const ACTIONS = {
  UPDATE_CURRENT_SECTION: "update_current_section",
  ADD_TO_UNLOCKED: "add_to_unlocked",
  UPDATE_CURRENT_SUB_SECTION: "update_current_sub_section",
  UPDATE_FIRST_SLIDE: "update_first_slide",
  // SET_MULTIPLE: "set_multiple",
};

function reducer(state, action) {

  console.log("REDUCER, STATE", state);
  console.log("REDUCER, ACTION", action);
  switch (action.type) {
    case ACTIONS.UPDATE_CURRENT_SECTION:
    const current_section = action.new_section;
    return { ...state, current_section };
      // return { ...state, current_section: action.payload.current_section };

    case ACTIONS.ADD_TO_UNLOCKED:
      const unlocked = [...state.unlocked, action.new_unlocked];
      return { ...state, unlocked };

    case ACTIONS.UPDATE_CURRENT_SUB_SECTION:
      const current_subsection = action.new_sub_section;
      // console.log("CURRENT SUBsection ", current_subsection);
      return { ...state, current_subsection };
      // return { ...state, current_subsection: action.payload.current_subsection };

    // case ACTIONS.UPDATE_FIRST_SLIDE:
    //   console.log("NEW_SLIDE", new_slide);
    //   console.log("ACTION.NEW_SLIDE", action.new_slide);
    //   const first_slide = action.new_slide;
    //   console.log("CURRENT slide ", first_slide);
    //   return { ...state, first_slide };
    //   // return { ...state, first_slide: action.payload.first_slide };

    // case ACTIONS.SET_MULTIPLE:
    //   return { ...state, ...action.payload }; // <---- HERE
    default:
      return state;
  }
}

export const ContentContext = createContext();

export default function Content() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ContentContext.Provider value={{ state, dispatch }}>
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
