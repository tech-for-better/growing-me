import React from "react";
import { useState, useCallback, useRef, useContext } from "react";
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
import NavMenu from "./components/NavMenu";
import MeTreeGarden from "./../public/assets/where_-_garden.svg";
import MeTreeCloud from "./../public/assets/where_-_cloud.svg";
import MeTreeHeart from "./../public/assets/where_-_on_a_big_love_heart.svg";
import MeTreePlanet from "./../public/assets/where_-_another_planet.svg";
import WhatColour from "./../public/assets/what_colour_is_your_tree.svg";
import WhatGrows from "./../public/assets/what_grows_on_your_tree.svg";
import WhatShape from "./../public/assets/what_shape_is_your_tree.svg";
import WhereTree from "./../public/assets/where_is_your_tree.svg";
import WhoAround from "./../public/assets/who_is_around_your_tree.svg";
import Palette from "./Palette";
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
import funnyFaces from "./../public/assets/funny_faces.svg";
import logo from "./../public/assets/Logo.svg";
import Container from "./Container";
import { toPng } from "html-to-image";
import { MeTreeContext } from "./App";

export function MeTree() {
  const { state, setState } = useContext(MeTreeContext);
  console.log("METREE: state", state);

  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [paletteOption, setPaletteOption] = useState("no option");

  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  const toggle = useCallback(
    () => setHideSourceOnDrag(!hideSourceOnDrag),
    [hideSourceOnDrag]
  );

  const ref = useRef(null);
  const saveToGallery = () => {
    // make sure the gallery row exists for this user
    if (!state.data.gallery) {
      setState({
        gallery: {
          images: [],
        },
      });
    }
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then(async (dataUrl) => {
        // @TODO
        // const link = document.createElement("a");
        // link.download = "my-me-tree.png";
        // link.href = dataUrl;
        // link.click();

        setState({
          gallery: {
            images: [...state.data.gallery.images, dataUrl],
          },
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        history.push("/gallery");
      });
  };

  if (state.status === "loading") return <h1>Initialising...</h1>;
  if (state.status === "error") return <div>Something went wrong!</div>;

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
  // @TODO: avatar url not loading
  //const url = URL.createObjectURL(state.data.profile.avatar_url);
  return (
    <>
      <div className="absolute flex metree--container">
        <div>
          <NavMenu />
        </div>
        <div>
          <Link to={"/content"}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>

        {/* @TODO: WIP- currently URL not loading
        <div className="center">
          <Link to={"/profile"}>
            <img
              // url={state.data.profile.avatar_url}
              src={url ?? funnyFaces}
              // src={state.data.profile.avatar_url ?? funnyFaces}
              className="avatar"
              alt="avatar"
            />
          </Link>
        </div> */}
        <div className="child_avatar-logo">
          <Link to={"/adult-profile"}>
            <img
              src={state.data.profile?.child_avatar ?? cuteVisitor}
              className="avatar"
              alt="avatar"
            />
          </Link>
        </div>
      </div>
      <div className="flex margin-top me-tree-container--mobile">
        <Toolkit>
          <ToolkitButton onClick={() => handleClick("WhatColour")}>
            <BtnImage src={WhatColour} alt="" />
            <ToolkitText className="mobile-hide">Change background</ToolkitText>
          </ToolkitButton>
          <ToolkitButton onClick={() => handleClick("WhatGrows")}>
            <BtnImage src={WhatGrows} alt="" />
            <ToolkitText className="mobile-hide">What's growing</ToolkitText>
          </ToolkitButton>
          <ToolkitButton onClick={() => handleClick("WhoAround")}>
            <BtnImage src={WhoAround} alt="" />
            <ToolkitText className="mobile-hide">Who is around</ToolkitText>
          </ToolkitButton>
          <ToolkitButton onClick={() => handleClick("WhereTree")}>
            <BtnImage src={WhereTree} alt="" />
            <ToolkitText className="mobile-hide">
              Where is your tree
            </ToolkitText>
          </ToolkitButton>
          <ToolkitButton onClick={() => saveToGallery()}>
            {state.status === "updating" ? (
              <ToolkitText> Saving...</ToolkitText>
            ) : (
              <ToolkitText> Save to Gallery</ToolkitText>
            )}
          </ToolkitButton>
        </Toolkit>

        <div className="flex column center text-center items-center flex-grow">
          {" "}
          <h1 className="margin-top txt-xlg">
            {state.data.profile?.adult_name
              ? "Welcome back " + state.data.profile?.adult_name
              : "Welcome back care giver"}
            {state.data.profile?.child_name
              ? " and " + state.data.profile?.child_name
              : " and young person "}
            !
          </h1>
          <h2 className="narrow rokkitt-font">
            Here’s your Me Tree from last time - it’s looking good! Would you
            like to change anything?
          </h2>
          <div className="mobile-narrow">
            <div ref={ref}>
              <MeTreeContainer className="relative">
                <Container hideSourceOnDrag={hideSourceOnDrag} />
                <MeTreeImage
                  src={state.data.tree?.tree_location ?? MeTreeGarden}
                  alt=""
                />
                <MeTreeBackground src={state.data.tree?.background} alt="" />
              </MeTreeContainer>

              {visible ? <Palette type={paletteOption} /> : ""}
            </div>
            <div className="flex row flex-end margin-top mobile-no-margin">
              <div>
                <Link to="/content">
                  <button className="button primary block">
                    Ready to play?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
