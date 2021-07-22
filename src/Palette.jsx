import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import {
  PaletteContainer,
  PaletteImg,
  PaletteBtn,
} from "./Layout/Palette.styled";
import { getMeTree, setTreeData } from "../database/model";
import { getShortImagePath } from "../utils/utils";
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
  // @TODO these variables should call getTreeData and update according to what is in DB
  const [loading, setLoading] = useState(true);
  const [treeLocation, setTreeLocation] = useState(null);
  const [background, setBackground] = useState(null);
  const [growing, setGrowing] = useState(null);
  const [whoAround, setWhoAround] = useState(null);

  let option = props.type;
  let paletteOptions = {
    WhatColour: [
      mountainBlob,
      spikeyBlob,
      minecraftBlob,
      jellyBlob,
      heartBlob,
      cloudyBlob,
      ovalBlob,
    ],
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

  const imgToFunctionMapping = {
    "where_-_cloud.svg": setTreeLocation,
    "where_-_garden.svg": setTreeLocation,
    "where_-_on_a_big_love_heart.svg": setTreeLocation,
    "where_-_another_planet.svg": setTreeLocation,
    "cute_visitors.svg": setWhoAround,
    "prickly_visitors.svg": setWhoAround,
    "fluffy_visitors.svg": setWhoAround,
    "creepy_crawly_visitors.svg": setWhoAround,
    "home_for_worms.svg": setWhoAround,
    "growing_apples.svg": setGrowing,
    "growing_bananas.svg": setGrowing,
    "growing_batwings.svg": setGrowing,
    "growing_chocolate.svg": setGrowing,
    "growing_cherries.svg": setGrowing,
    "growing_pizza.svg": setGrowing,
    "mountain_blob.svg": setBackground,
    "spikey_blob.svg": setBackground,
    "minecraft_blob.svg": setBackground,
    "jelly_blob.svg": setBackground,
    "heart_blob.svg": setBackground,
    "cloudy_blob.svg": setBackground,
    "oval_blob.svg": setBackground,
  };

  async function handleClick(event, image) {
    let imageFileName = getShortImagePath(image);
    console.log("mapping", imgToFunctionMapping[imageFileName]);
    let stateFunction = imgToFunctionMapping[imageFileName];
    await stateFunction(event.target.src);

    // @TODO these console logs are one click behind, but the database updates accurately - use async/await? Or getTreeData
    console.log("treeLocation", treeLocation);
    console.log("background", background);
    console.log("growing", growing);
    console.log("whoaround", whoAround);
  }

  useEffect(() => {
    updateMeTreeInDb({
      background,
      treeLocation,
      whoAround,
      growing,
    });
    // getTreeData();
  }, [background, treeLocation, whoAround, growing]);

  async function getTreeData() {
    try {
      setLoading(true);
      let data = await getMeTree();
      if (data) {
        setTreeLocation(data.tree_location);
        setBackground(data.background);
        setGrowing(data.growing);
        setWhoAround(data.who_around);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateMeTreeInDb({
    background,
    treeLocation,
    whoAround,
    growing,
  }) {
    try {
      setLoading(true);
      setTreeData({
        background,
        treeLocation,
        whoAround,
        growing,
      });
    } catch (error) {
      console.log("Error: ", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PaletteContainer>
        {paletteOptions[option].map((image) => {
          return (
            <>
              <PaletteBtn
                image={image}
                onClick={(event) => handleClick(event, image)}
              >
                <PaletteImg key={image} src={image} alt={image} />
              </PaletteBtn>
            </>
          );
        })}
      </PaletteContainer>
    </>
  );
}
