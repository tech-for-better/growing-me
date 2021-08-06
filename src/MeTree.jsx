import React from "react";
import {
  useState,
  useEffect,
  useCallback,
  useReducer,
  createContext,
  createRef,
  useRef,
  useContext,
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
import logo from "./../assets/Logo.svg";
import { getShortImagePath, getShortImagePathFromArray } from "../utils/utils";
import Container from "./Container";
import Gallery from "./Gallery";
//html-t-image
import { toPng } from "html-to-image";
import { getGalleryData, getAllData, setData } from "../database/model";
import useRemoteState from "../utils/useRemoteState";
import { MeTreeContext } from "./App";

// export const MeTreeContext = createContext();

// export async function load() {
//   console.log("load - about to get all data");
//   const data = await getAllData();
//   console.log("load get all data", data);
//   return data;
// }

// export async function update(changedData) {
//   // TODO: update the right bit of the DB using the `changedData` object
//   // just has to return a promise (resolved value isn't used)

//   console.log("changedData in update fn in MeTree comp:", changedData);
//   return await setData(changedData);
// }

// MeTree Component
export function MeTree() {
  // const [state, setState] = useRemoteState({ load, update });
  const { state, setState } = useContext(MeTreeContext);
  console.log("METREE: state", state);

  const [visible, setVisible] = useState(false);
  const [paletteOption, setPaletteOption] = useState("no option");

  // react dnd
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  const toggle = useCallback(
    () => setHideSourceOnDrag(!hideSourceOnDrag),
    [hideSourceOnDrag]
  );

  //html2img
  const ref = useRef(null);
  console.log("ref variable", ref);

  const saveToGallery = () => {
    if (ref.current === null) {
      console.log("ref variable inside if statement", ref.current);
      return;
    }
    console.log("ref variable after if statement", ref);

    toPng(ref.current, { cacheBust: true })
      .then(async (dataUrl) => {
        console.log("dataUrl in saveToGallery ", dataUrl);
        const link = document.createElement("a");
        link.download = "my-me-tree.png";
        link.href = dataUrl;
        link.click();
        // await setGalleryData([...galleryImage, dataUrl]);

        setState({
          gallery: {
            images: [...state.data.gallery.images, dataUrl],
          },
        });
        // setGalleryImage((prevState) => [...prevState, dataUrl]);

        console.log(
          "state.gallery.images after setState ",
          state.data.gallery.images
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (state.status === "loading") return <div>Initialising...</div>;
  if (state.status === "error") return <div>Something went wrong!</div>;

  // export async function load() {
  //   console.log("load - about to get all data");
  //   const data = await getAllData();
  //   console.log("load get all data", data);
  //   return data;
  // }

  // export async function update(changedData) {
  //   // TODO: update the right bit of the DB using the `changedData` object
  //   // just has to return a promise (resolved value isn't used)

  //   console.log("changedData in update fn in MeTree comp:", changedData);
  //   await setData(changedData);
  //   console.log('it worked' )

  // }

  // useEffect(() => {
  //   if (state.status === "updating") {
  //     updateDataSomehow().then((data) => dispatch({ type: "success", data }));
  //   }
  //   }, [status]);

  // <button onClick={() = dispatch({ type: "load" })}>Submit</button>

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

  return (
    <>
      {/* <div className="flex space-between padding-sides">
        <NavMenu />
      </div> */}
      <div className="height">
        <div>
          <NavMenu />
        </div>
        <div className="center">
          <Link to={"/content"}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
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
          <h1 className="margin-none txt-xlg">
            {state.data.profile.adult_name
              ? "Welcome back " + state.data.profile.adult_name + " and "
              : "Welcome back "}
            {state.data.profile.child_name ?? "friend"}!
          </h1>
          <h2 className="narrow rokkitt-font">
            Here’s your Me Tree from last time - it’s looking good! Would you
            like to change anything?
          </h2>
          <div ref={ref}>
            {/* <MeTreeContext.Provider value={{ state, setState }}> */}
            <MeTreeContainer className="relative">
              <Container hideSourceOnDrag={hideSourceOnDrag} />
              <MeTreeImage
                src={state.data.tree.treeLocation ?? MeTreeGarden}
                alt=""
              />
              <MeTreeBackground src={state.data.tree.background} alt="" />
            </MeTreeContainer>

            {visible ? <Palette type={paletteOption} /> : ""}

            <div className="flex row flex-end margin-top">
              <div>
                <Link to="/content">
                  <button className="button primary block">
                    Ready to play?
                  </button>
                </Link>
              </div>
            </div>
            {/* </MeTreeContext.Provider> */}
          </div>
        </div>
      </div>

      {/* <footer className="flex flex-end padding-sides">
        <Link to="/content">
          <button className="button primary block">Ready to play?</button>
        </Link>
      </footer> */}
    </>
  );
}
