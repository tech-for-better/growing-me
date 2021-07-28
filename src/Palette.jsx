import React from "react";
import { useState, useEffect, useContext } from "react";
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

import { MeTreeContext } from "./MeTree";

export default function Palette({ type }) {
  const { state, dispatch } = useContext(MeTreeContext);
  const [loading, setLoading] = useState(true);

  let option = type;
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

  const imgToDispatchTypeMapping = {
    "where_-_cloud.svg": "update_treeLocation",
    "where_-_garden.svg": "update_treeLocation",
    "where_-_on_a_big_love_heart.svg": "update_treeLocation",
    "where_-_another_planet.svg": "update_treeLocation",
    "cute_visitors.svg": "update_whoAround",
    "prickly_visitors.svg": "update_whoAround",
    "fluffy_visitors.svg": "update_whoAround",
    "creepy_crawly_visitors.svg": "update_whoAround",
    "home_for_worms.svg": "update_whoAround",
    "growing_apples.svg": "update_growing",
    "growing_bananas.svg": "update_growing",
    "growing_batwings.svg": "update_growing",
    "growing_chocolate.svg": "update_growing",
    "growing_cherries.svg": "update_growing",
    "growing_pizza.svg": "update_growing",
    "mountain_blob.svg": "update_background",
    "spikey_blob.svg": "update_background",
    "minecraft_blob.svg": "update_background",
    "jelly_blob.svg": "update_background",
    "heart_blob.svg": "update_background",
    "cloudy_blob.svg": "update_background",
    "oval_blob.svg": "update_background",
  };

  async function handleClick(event, image) {
    console.log("handle click");
    let imageFileName = getShortImagePath(image);
    let dispatchType = imgToDispatchTypeMapping[imageFileName];
    console.log("dispatch type", dispatchType);
    switch (dispatchType) {
      case "update_treeLocation":
        console.log("tree location dispatch sent");
        await dispatch({
          type: dispatchType,
          newTreeLocation: event.target.src,
        });
        break;
      case "update_background":
        console.log("background dispatch sent");
        await dispatch({
          type: dispatchType,
          newBackground: event.target.src,
        });
        break;
      case "update_growing":
        await dispatch({
          type: dispatchType,
          newGrowingItem: event.target.src,
        });
        break;
      case "update_whoAround":
        await dispatch({
          type: dispatchType,
          newWhoAround: event.target.src,
        });
        break;
    }
    // console.log(
    //   "state in palette.handleClick",
    //   state.treeLocation,
    //   state.background,
    //   state.whoAround,
    //   state.growing,
    //   state.growing_coords,
    //   state.whoAround_coords
    // );
  }

  // useEffect(() => {
  //   updateMeTreeInDb(
  //     state.background,
  //     state.treeLocation,
  //     state.whoAround,
  //     state.growing,
  //     state.growing_coords,
  //     state.whoAround_coords
  //   );
  //   // getTreeData();
  // }, [
  //   state.background,
  //   state.treeLocation,
  //   state.whoAround,
  //   state.growing_coords,
  //   state.whoAround_coords,
  // ]);

  async function getTreeData() {
    try {
      setLoading(true);
      let data = await getMeTree();
      if (data) {
        dispatch({
          type: "update_treeLocation",
          newTreeLocation: data.tree_location,
        });
        dispatch({
          type: "update_background",
          newBackground: data.background,
        });
        dispatch({
          type: "update_growing",
          newGrowingItem: data.growing,
        });
        dispatch({
          type: "update_whoAround",
          newWhoAround: data.who_around,
        });
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateMeTreeInDb(
    background,
    treeLocation,
    whoAround,
    growing,
    growing_coords,
    who_around_coords
  ) {
    try {
      setLoading(true);
      setTreeData(
        background,
        treeLocation,
        whoAround,
        growing,
        growing_coords,
        who_around_coords
      );
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
