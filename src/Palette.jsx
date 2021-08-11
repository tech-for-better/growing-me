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
import MeTreeGarden from "./../public/assets/where_-_garden.svg";
import MeTreeCloud from "./../public/assets/where_-_cloud.svg";
import MeTreeHeart from "./../public/assets/where_-_on_a_big_love_heart.svg";
import MeTreePlanet from "./../public/assets/where_-_another_planet.svg";
import cuteVisitor from "./../public/assets/cute_visitors.svg";
import pricklyVisitor from "../public/assets/prickly_visitors.svg";
import fluffyVisitor from "./../public/assets/fluffy_visitors.svg";
import creepyCrawlyVisitor from "./../public/assets/creepy_crawly_visitors.svg";
import worm from "./../public/assets/home_for_worms.svg";
import apple from "./../public/assets/growing_apples.svg";
import banana from "./../public/assets/growing_bananas.svg";
import batwings from "./../public/assets/growing_batwings.svg";
import cherries from "./../public/assets/growing_cherries.svg";
import chocolate from "./../public/assets/growing_chocolate.svg";
import pizza from "./../public/assets/growing_pizza.svg";
import mountainBlob from "./../public/assets/mountain_blob.svg";
import spikeyBlob from "./../public/assets/spikey_blob.svg";
import minecraftBlob from "./../public/assets/minecraft_blob.svg";
import jellyBlob from "./../public/assets/jelly_blob.svg";
import heartBlob from "./../public/assets/heart_blob.svg";
import cloudyBlob from "./../public/assets/cloudy_blob.svg";
import ovalBlob from "./../public/assets/oval_blob.svg";

// import { MeTreeContext } from "./MeTree";
import { MeTreeContext } from "./App";

export default function Palette({ type }) {
  const { state, setState } = useContext(MeTreeContext);

  let option = type;
  // let paletteOptions = {
  //   WhatColour: [
  //     imagesToSupabaseMapping[mountainBlob],
  //     mountainBlob,
  //     spikeyBlob,
  //     minecraftBlob,
  //     jellyBlob,
  //     heartBlob,
  //     cloudyBlob,
  //     ovalBlob,
  //   ],
  //   WhatGrows: [apple, banana, batwings, cherries, chocolate, pizza],
  //   WhoAround: [
  //     cuteVisitor,
  //     pricklyVisitor,
  //     fluffyVisitor,
  //     creepyCrawlyVisitor,
  //     worm,
  //   ],
  //   WhereTree: [MeTreeGarden, MeTreeCloud, MeTreeHeart, MeTreePlanet],
  // };

  const paletteOptions = {
    WhatColour: [
      { src: mountainBlob, update: "update_background" },
      { src: spikeyBlob, update: "update_background" },
      { src: minecraftBlob, update: "update_background" },
      { src: jellyBlob, update: "update_background" },
      { src: heartBlob, update: "update_background" },
      { src: cloudyBlob, update: "update_background" },
      { src: ovalBlob, update: "update_background" },
    ],
    WhatGrows: [
      { src: apple, update: "update_growing" },
      { src: banana, update: "update_growing" },
      { src: batwings, update: "update_growing" },
      { src: cherries, update: "update_growing" },
      { src: chocolate, update: "update_growing" },
      { src: pizza, update: "update_growing" },
    ],
    WhoAround: [
      { src: cuteVisitor, update: "update_whoAround" },
      { src: pricklyVisitor, update: "update_whoAround" },
      { src: fluffyVisitor, update: "update_whoAround" },
      { src: creepyCrawlyVisitor, update: "update_whoAround" },
      { src: worm, update: "update_whoAround" },
    ],
    WhereTree: [
      { src: MeTreeGarden, update: "update_treeLocation" },
      { src: MeTreeCloud, update: "update_treeLocation" },
      { src: MeTreeHeart, update: "update_treeLocation" },
      { src: MeTreePlanet, update: "update_treeLocation" },
    ],
  };

  console.log("palletteOptions[option]",paletteOptions[option])
  // const imgToDispatchTypeMapping = {
  //   "where_-_cloud.svg": "update_treeLocation",
  //   "where_-_garden.svg": "update_treeLocation",
  //   "where_-_on_a_big_love_heart.svg": "update_treeLocation",
  //   "where_-_another_planet.svg": "update_treeLocation",
  //   "cute_visitors.svg": "update_whoAround",
  //   "prickly_visitors.svg": "update_whoAround",
  //   "fluffy_visitors.svg": "update_whoAround",
  //   "creepy_crawly_visitors.svg": "update_whoAround",
  //   "home_for_worms.svg": "update_whoAround",
  //   "growing_apples.svg": "update_growing",
  //   "growing_bananas.svg": "update_growing",
  //   "growing_batwings.svg": "update_growing",
  //   "growing_chocolate.svg": "update_growing",
  //   "growing_cherries.svg": "update_growing",
  //   "growing_pizza.svg": "update_growing",
  //   "mountain_blob.svg": "update_background",
  //   "spikey_blob.svg": "update_background",
  //   "minecraft_blob.svg": "update_background",
  //   "jelly_blob.svg": "update_background",
  //   "heart_blob.svg": "update_background",
  //   "cloudy_blob.svg": "update_background",
  //   "oval_blob.svg": "update_background",
  // };
  // when runs it'll end up being something like
  // switch ("/assets/banana.123abc.svg") {
  //   case "/assets/apple.123abc.svg":
  //   case "/assets/banana.123abc.svg":
  //   // ...
  // }

  // async function handleClick(event, image) {
  //   console.log("clicked a palette button", event, image);
  //   let imageFileName = getShortImagePath(image);
  //   let dispatchType = imgToDispatchTypeMapping[imageFileName];

  //   switch (dispatchType) {
  //     case "update_treeLocation":
  //       setState({
  //         tree: {
  //           tree_location: event.target.src,
  //         },
  //       });
  //       break;
  //     case "update_background":
  //       setState({
  //         tree: {
  //           background: event.target.src,
  //         },
  //       });
  //       break;
  //     case "update_growing":
  //       setState({
  //         tree: {
  //           growing: event.target.src,
  //         },
  //       });
  //       break;
  //     case "update_whoAround":
  //       setState({
  //         tree: {
  //           who_around: event.target.src,
  //         },
  //       });
  //       break;
  //   }
  // }

  async function handleClick(event, update, src) {
    console.log("clicked a palette button", event, update, src)
    switch (src) {
      case MeTreeGarden:
      case MeTreeCloud:
      case MeTreeHeart:
      case MeTreePlanet:
        setState({
          tree: {
            tree_location: src,
          },
        });
        break;
      case mountainBlob:
      case spikeyBlob:
      case minecraftBlob:
      case jellyBlob:
      case heartBlob:
      case cloudyBlob:
      case ovalBlob:
        setState({
          tree: {
            background: src,
          },
        });
        break;
      case apple:
      case banana:
      case batwings:
      case cherries:
      case chocolate:
      case pizza:
        setState({
          tree: {
            growing: src,
          },
        });
        break;
        case cuteVisitor:
        case pricklyVisitor:
        case fluffyVisitor:
        case creepyCrawlyVisitor:
        case worm:
        setState({
          tree: {
            who_around: src,
          },
        });
        break;
    }
  }

  return (
    <>
      {/* <PaletteContainer>
        {paletteOptions[option].map((image) => {
          return (
            <>
              <PaletteBtn
                key={image}
                image={image}
                onClick={(event) => handleClick(event, image)}
              >
                <PaletteImg key={image} src={image} alt={image} />
              </PaletteBtn>
            </>
          );
        })}
      </PaletteContainer> */}
      <PaletteContainer>
        {paletteOptions[option].map(({ src, update }) => {
          return (
            <>
              <PaletteBtn
                key={src}
                image={src}
                onClick={(event) => handleClick(event, update, src)}
              >
                <PaletteImg key={src} src={src} alt={src} />
              </PaletteBtn>
            </>
          );
        })}
      </PaletteContainer>
    </>
  );
}
