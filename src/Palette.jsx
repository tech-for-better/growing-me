import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import { PaletteContainer, PaletteImg } from "./Layout/Palette.styled";
import MeTreeGarden from "./../assets/where_-_garden.svg";
import MeTreeCloud from "./../assets/where_-_cloud.svg";
import MeTreeHeart from "./../assets/where_-_on_a_big_love_heart.svg";
import MeTreePlanet from "./../assets/where_-_another_planet.svg";
import cuteVisitor from "./../assets/cute_visitors.svg";
import pricklyVisitor from "../assets/prickly_visitors.svg";
import fluffyVisitor from "./../assets/fluffy_visitors.svg";
import creepyCrawlyVisitor from "./../assets/creepy_crawly_visitors.svg";
import worm from "./../assets/home_for_worms.svg";
import apple from "./../assets/growing_apples.svg";
import banana from "./../assets/growing_bananas.svg";
import batwings from "./../assets/growing_batwings.svg";
import cherries from "./../assets/growing_cherries.svg";
import chocolate from "./../assets/growing_chocolate.svg";
import pizza from "./../assets/growing_pizza.svg";
import mountainBlob from "./../assets/mountain_blob.svg";
import spikeyBlob from "./../assets/spikey_blob.svg";
import minecraftBlob from "./../assets/minecraft_blob.svg";
import jellyBlob from "./../assets/jelly_blob.svg";
import heartBlob from "./../assets/heart_blob.svg";
import cloudyBlob from "./../assets/cloudy_blob.svg";
import ovalBlob from "./../assets/oval_blob.svg";

export default function Palette(props) {
  let option = props.type;
  let paletteOptions = {
    WhatColour: [mountainBlob, spikeyBlob,minecraftBlob, jellyBlob, heartBlob, cloudyBlob],
    WhatGrows: [apple, banana, batwings, cherries, chocolate, pizza],
    WhoAround: [
      cuteVisitor,
      pricklyVisitor,
      fluffyVisitor,
      creepyCrawlyVisitor,
      worm,
    ],
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
