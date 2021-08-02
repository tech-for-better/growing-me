import React from "react";
import { useState, useEffect } from "react";
// import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import ContentNav from "./components/ContentNav";
import ContentTopBar from "./components/ContentTopBar";

export default function Content() {
  return (
    <>
      <div className="content--top-nav">
        <ContentTopBar />
        <ContentNav />
        <NavMenu />
      </div>
      <div>{/* <p>Content here</p> */}</div>
    </>
  );
}
