import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import { PaletteContainer, PaletteImg } from "./Layout/Palette.styled";
import MeTreeGarden from "./../assets/where_-_garden.svg";
import MeTreeCloud from "./../assets/where_-_cloud.svg";
import MeTreeHeart from "./../assets/where_-_on_a_big_love_heart.svg";
import MeTreePlanet from "./../assets/where_-_another_planet.svg";

export default function Palette(props) {
  let option = props.type;
  let paletteOptions = {
    WhatColour: [],
    WhatGrows: [],
    WhoAround: [],
    WhereTree: [MeTreeGarden, MeTreeCloud, MeTreeHeart, MeTreePlanet],
  };

  return (
    <>
      <PaletteContainer>
        {/* <p style={{ color: "white" }}>Hi I'm a palette + {props.type}</p> */}
        {paletteOptions[option].map((image) => {
          return (
            <>
              <PaletteImg src={image} alt={image} />
            </>
          );
        })}
      </PaletteContainer>
    </>
  );
}
