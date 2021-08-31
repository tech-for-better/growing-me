import React from "react";
import { useContext } from "react";
import {
  PaletteContainer,
  PaletteImg,
  PaletteBtn,
} from "./Layout/Palette.styled";
import MeTreeGarden from "/assets/where_-_garden.svg";
import MeTreeCloud from "/assets/where_-_cloud.svg";
import MeTreeHeart from "/assets/where_-_on_a_big_love_heart.svg";
import MeTreePlanet from "/assets/where_-_another_planet.svg";
import cuteVisitor from "/assets/cute_visitors.svg";
import pricklyVisitor from "/assets/prickly_visitors.svg";
import fluffyVisitor from "/assets/fluffy_visitors.svg";
import creepyCrawlyVisitor from "/assets/creepy_crawly_visitors.svg";
import worm from "/assets/home_for_worms.svg";
import apple from "/assets/growing_apples.svg";
import banana from "/assets/growing_bananas.svg";
import batwings from "/assets/growing_batwings.svg";
import cherries from "/assets/growing_cherries.svg";
import chocolate from "/assets/growing_chocolate.svg";
import pizza from "/assets/growing_pizza.svg";
import mountainBlob from "/assets/mountain_blob.svg";
import spikeyBlob from "/assets/spikey_blob.svg";
import minecraftBlob from "/assets/minecraft_blob.svg";
import jellyBlob from "/assets/jelly_blob.svg";
import heartBlob from "/assets/heart_blob.svg";
import cloudyBlob from "/assets/cloudy_blob.svg";
import ovalBlob from "/assets/oval_blob.svg";

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
    console.log("HANDLE CLICK STATE.TREE.BOXES", state.data.tree.boxes);
    let newGrowingId = `growing${(Object.keys(state.data.tree.boxes).length) + 1}`;
    let newWhoAroundId = `whoAround${(Object.keys(state.data.tree.boxes).length) + 1}`;

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
            boxes: {
              ...state.data.tree.boxes,
              `${newGrowingId}`: { top: 0, left: 2, isGrowing: true, src: null },
            },
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
            boxes: {
              ...state.data.tree.boxes,
              newWhoAroundId: { top: 1, left: 3, isGrowing: false, src: src },
            },
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
