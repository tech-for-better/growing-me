import React from "react";
import { useContext } from "react";
import {
  PaletteContainer,
  PaletteImg,
  PaletteBtn,
} from "./Layout/Palette.styled";
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

import { MeTreeContext } from "./App";

export default function Palette({ type }) {
  const { state, setState } = useContext(MeTreeContext);

  let option = type;

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

  async function handleClick(event, update, src) {
    console.log("clicked a palette button", event, update, src);
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
