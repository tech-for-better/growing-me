import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";

export default function Palette(props) {
  {
    let paletteOptions = {
      whatColour: [],
      whatGrows: [],
      whoAround: [],
      whereTree: [],
    };
  }

  return (
    <>
      <div className="button">
        <p style={{ color: "white" }}>Hi I'm a palette + {props.type}</p>
      </div>
    </>
  );
}
