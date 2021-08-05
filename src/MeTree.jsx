import React from "react";
import {
  useState,
  useEffect,
  useCallback,
  useReducer,
  createContext,
  createRef,
  useRef,
} from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Toolkit,
  ToolkitButton,
  MeTreeImage,
  MeTreeBackground,
  MeTreeContainer,
  BtnImage,
  ToolkitText,
} from "./Layout/MeTree.styled";
import { DndContainer } from "./Layout/DndContainer.styled";
import NavMenu from "./components/NavMenu";
import arrow from "./../assets/arrow.svg";
import MeTreeGarden from "./../assets/where_-_garden.svg";
import MeTreeCloud from "./../assets/where_-_cloud.svg";
import MeTreeHeart from "./../assets/where_-_on_a_big_love_heart.svg";
import MeTreePlanet from "./../assets/where_-_another_planet.svg";
import WhatColour from "./../assets/what_colour_is_your_tree.svg";
import WhatGrows from "./../assets/what_grows_on_your_tree.svg";
import WhatShape from "./../assets/what_shape_is_your_tree.svg";
import WhereTree from "./../assets/where_is_your_tree.svg";
import WhoAround from "./../assets/who_is_around_your_tree.svg";
import Palette from "./Palette";
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
import { getShortImagePath, getShortImagePathFromArray } from "../utils/utils";
import Container from "./Container";
import Gallery from "./Gallery";
//html-t-image
import { toPng } from "html-to-image";
import { getGalleryData, getAllData , setAllData} from "../database/model";
import useRemoteState from "../utils/useRemoteState";

export const MeTreeContext = createContext();

// MeTree Component
export function MeTree({ setGalleryImage, galleryImage }) {

  const [state, setState] = useRemoteState({ load, update });
  console.log("METREE: state", state);

  const [visible, setVisible] = useState(false);
  const [paletteOption, setPaletteOption] = useState("no option");

  if (state.status === "loading") return <div>Initialising...</div>;
  if (state.status === "error") return <div>Something went wrong!</div>;

  async function load() {
    console.log("load - about to get all data");
    const data = await getAllData();
    console.log("load get all data", data);
    return data;
  }

  async function update(changedData) {
    // TODO: update the right bit of the DB using the `changedData` object
    // just has to return a promise (resolved value isn't used)

    console.log("update fn changedData in MeTree comp", changedData);
    const updatedData = await setAllData(changedData);
    console.log('update fn updatedDara', updatedData)
    return updatedData;
  }

  function handleClick(paletteType) {
    if (paletteType == paletteOption) {
      setVisible((visible) => !visible);
    } else {
      if (!visible) {
        setVisible((visible) => !visible);
      }
      setPaletteOption(paletteType);
    }
  }

  const ImgSrcToImportMappings = {
    "where_-_cloud.svg": MeTreeCloud,
    "where_-_garden.svg": MeTreeGarden,
    "where_-_on_a_big_love_heart.svg": MeTreeHeart,
    "where_-_another_planet.svg": MeTreePlanet,
    "cute_visitors.svg": cuteVisitor,
    "prickly_visitors.svg": pricklyVisitor,
    "fluffy_visitors.svg": fluffyVisitor,
    "creepy_crawly_visitors.svg": creepyCrawlyVisitor,
    "home_for_worms.svg": worm,
    "growing_apples.svg": apple,
    "growing_bananas.svg": banana,
    "growing_batwings.svg": batwings,
    "growing_cherries.svg": cherries,
    "growing_chocolate.svg": chocolate,
    "growing_pizza.svg": pizza,
    "mountain_blob.svg": mountainBlob,
    "spikey_blob.svg": spikeyBlob,
    "minecraft_blob.svg": minecraftBlob,
    "jelly_blob.svg": jellyBlob,
    "heart_blob.svg": heartBlob,
    "cloudy_blob.svg": cloudyBlob,
    "oval_blob.svg": ovalBlob,
  };

  // react dnd
  // const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  // const toggle = useCallback(
  //   () => setHideSourceOnDrag(!hideSourceOnDrag),
  //   [hideSourceOnDrag]
  // );

  // html2img
  // const ref = useRef(null);
  // const saveToGallery = useCallback(() => {
  //   if (ref.current === null) {
  //     return;
  //   }

  //   toPng(ref.current, { cacheBust: true })
  //     .then(async (dataUrl) => {
  //       console.log("galleryImage in metree bwfore ", galleryImage);
  //       const link = document.createElement("a");
  //       link.download = "my-me-tree.png";
  //       link.href = dataUrl;
  //       link.click();
  //       await setGalleryData([...galleryImage, dataUrl]);

  //       setGalleryImage((prevState) => [...prevState, dataUrl]);
  //       console.log("data url", typeof dataUrl, dataUrl);
  //       console.log("galleryImage in metree after ", galleryImage);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [ref]);

  return (
    <>
      <div className="flex space-between padding-sides">
        <NavMenu />
      </div>

      <div className="flex margin-top">
        <Toolkit>
          <ToolkitButton onClick={() => handleClick("WhatColour")}>
            <BtnImage src={WhatColour} alt="" />
            <ToolkitText>Change background</ToolkitText>
          </ToolkitButton>
          <ToolkitButton onClick={() => handleClick("WhatGrows")}>
            <BtnImage src={WhatGrows} alt="" />
            <ToolkitText>What's growing</ToolkitText>
          </ToolkitButton>
          <ToolkitButton onClick={() => handleClick("WhoAround")}>
            <BtnImage src={WhoAround} alt="" />
            <ToolkitText>Who is around</ToolkitText>
          </ToolkitButton>
          <ToolkitButton onClick={() => handleClick("WhereTree")}>
            <BtnImage src={WhereTree} alt="" />
            <ToolkitText>Where is your tree</ToolkitText>
          </ToolkitButton>
          <ToolkitButton onClick={() => saveToGallery()}>
            <ToolkitText> Save to Gallery</ToolkitText>
          </ToolkitButton>
        </Toolkit>
        {/* <Gallery galleryImage={galleryImage} /> */}

        <div className="flex column center text-center items-center flex-grow">
          {" "}
          <h1 className="margin-none">
            {state.data.profile.adult_name
              ? "Welcome back " + state.data.profile.adult_name + " and "
              : "Welcome back "}
            {state.data.profile.child_name ?? "friend"}!
          </h1>
          <h2 className="narrow">
            Here’s your Me Tree from last time - it’s looking good! Would you
            like to change anything?
          </h2>
          {/* <div ref={ref}> */}

          <MeTreeContext.Provider value={{ state, setState }}>
            <MeTreeContainer className="relative">
              {/* <Container hideSourceOnDrag={hideSourceOnDrag} /> */}
              <Container />
              <MeTreeImage
                src={state.data.tree.treeLocation ?? MeTreeGarden}
                alt=""
              />
              <MeTreeBackground src={state.data.tree.background} alt="" />
            </MeTreeContainer>

            {visible ? <Palette type={paletteOption} /> : ""}
          </MeTreeContext.Provider>
          {/* </div> */}
        </div>
      </div>

      <footer className="flex flex-end padding-sides">
        <Link to="/content">
          <button className="button primary block">Ready to play?</button>
        </Link>
      </footer>
    </>
  );
}
