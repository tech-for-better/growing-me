import React from "react";
import { useContext } from "react";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";

export default function InnerContent() {
  const { state, dispatch } = useContext(ContentContext);
  return (
    <div className="flex flex-center space-between narrow center">
      <h1>{state.current_section}</h1>
      {/* <BrainAmazing></BrainAmazing> */}
    </div>
  );
}
