import React from "react";
import { useContext } from "react";
import {
  PaletteContainer,
  PaletteImg,
  PaletteBtn,
} from "../Layout/Palette.styled";
import {
  MeTreeGarden,
  MeTreeCloud,
  MeTreeHeart,
  MeTreePlanet,
  cuteVisitor,
  pricklyVisitor,
  fluffyVisitor,
  creepyCrawlyVisitor, worm,
apple,
banana,
batwings,
cherries,
chocolate,
pizza,
mountainBlob,
spikeyBlob,
minecraftBlob,
jellyBlob,
 heartBlob,
cloudyBlob,
ovalBlob,
} from "../Images/MeTreeImages";

import { MeTreeContext } from "../App";

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
    console.log("HANDLE CLICK STATE.TREE.BOXES", state.data.tree.boxes)

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

        let newGrowingId = `growing${Object.keys(state.data.tree.boxes).length + 1}`;
        let growingObj = {};
        growingObj[newGrowingId] = {
          top: 0,
          left: 2,
          isGrowing: true,
          src: src,
        };

        setState({
          tree: {
            boxes: {
              ...state.data.tree.boxes,
              ...growingObj,
            },
          },
        });
        break;

      case cuteVisitor:
      case pricklyVisitor:
      case fluffyVisitor:
      case creepyCrawlyVisitor:
      case worm:

        let newWhoId = `who${Object.keys(state.data.tree.boxes).length + 1}`;
        let whoObj = {};
        whoObj[newWhoId] = { top: 0, left: 2, isGrowing: false, src: src };

        setState({
          tree: {
            boxes: {
              ...state.data.tree.boxes,
              ...whoObj,
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
