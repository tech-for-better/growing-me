import React from "react";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabaseClient";
import { getMeTree, getProfileData, setTreeData } from "../database/model";
import { Link, useHistory } from "react-router-dom";
// import { useHistory } from "react-router";
import { useAuth } from "./contexts/Auth";
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

//react dnd
import { Container } from "./Container";

export function MeTree() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [adult_name, setAdultName] = useState(null);
  const [child_name, setChildName] = useState(null);
  const [visible, setVisible] = useState(false);

  const [paletteOption, setPaletteOption] = useState("no option");
  const [treeLocation, setTreeLocation] = useState(null);
  const [background, setBackground] = useState(null);
  const [growing, setGrowing] = useState(null);
  const [whoAround, setWhoAround] = useState(null);

  const [growing_left, setGrowingLeft] = useState(80);
  const [growing_top, setGrowingTop] = useState(20);
  const [who_around_top, setWhoAroundTop] = useState(100);
  const [who_around_left, setWhoAroundLeft] = useState(80);
  const [boxes, setBoxes] = useState({
    a: { top: growing_top, left: growing_left, isGrowing: true },
    b: { top: who_around_top, left: who_around_left, isGrowing: false },
  });

  // Get current user and signOut function from context
  const { user, signOut } = useAuth();
  const history = useHistory();

  useEffect(() => {
    getNames();
  }, []);

  useEffect(() => {
    setGrowingLeft(boxes.a.left);
    setGrowingTop(boxes.a.top);
    setWhoAroundTop(boxes.b.top);
    setWhoAroundLeft(boxes.b.left);
    console.log("growing left in use effect", growing_left, who_around_left);
  }, [boxes]);

  // useEffect(() => {
  //   updateMeTreeInDb(
  //     background,
  //     treeLocation,
  //     whoAround,
  //     growing,
  //     growing_left,
  //     growing_top,
  //     who_around_top,
  //     who_around_left
  //   );
  // }, [growing_left, growing_top, who_around_top, who_around_left]);

  useEffect(() => {
    console.log("who_around_left in useeffect", who_around_left);
    console.log("boxes in useeffect", boxes);
    getMeTreeUpdates();
  }, [
    background,
    treeLocation,
    growing,
    whoAround,
    who_around_left,
    who_around_top,
    growing_left,
    growing_top,
  ]);

  // useEffect(() => {
  //   setBoxes({
  //     a: { top: growing_top, left: growing_left, isGrowing: true },
  //     b: { top: who_around_top, left: who_around_left, isGrowing: false },
  //   });
  // }, [growing_top, growing_left, who_around_top, who_around_left]);

  // async function updateMeTreeInDb(
  //   background,
  //   treeLocation,
  //   whoAround,
  //   growing,
  //   growing_left,
  //   growing_top,
  //   who_around_top,
  //   who_around_left
  // ) {
  //   try {
  //     setLoading(true);
  //     setTreeData(
  //       background,
  //       treeLocation,
  //       whoAround,
  //       growing,
  //       growing_left,
  //       growing_top,
  //       who_around_top,
  //       who_around_left
  //     );
  //   } catch (error) {
  //     console.log("Error: ", error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

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

  async function getMeTreeUpdates() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let data = await getMeTree();
      if (data) {
        console.log("data", data);
        let treeLocationTemp = getShortImagePath(data.tree_location);
        let backgroundTemp = getShortImagePath(data.background);
        let growingTemp = getShortImagePathFromArray(data.growing);
        let whoAroundTemp = getShortImagePathFromArray(data.who_around);

        setTreeLocation(ImgSrcToImportMappings[treeLocationTemp]);
        setBackground(ImgSrcToImportMappings[backgroundTemp]);
        setGrowing(ImgSrcToImportMappings[growingTemp]);
        setWhoAround(ImgSrcToImportMappings[whoAroundTemp]);
        setGrowingLeft(data.growing_left);
        setGrowingTop(data.growing_top);
        setWhoAroundLeft(data.who_around_left);
        setWhoAroundTop(data.who_around_top);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function getNames() {
    try {
      setLoading(true);
      let data = await getProfileData();

      if (data) {
        console.log("profiledata", data);
        setAdultName(data.adult_name);
        setChildName(data.child_name);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    // Ends user session
    await signOut();
    // Redirects the user to Login page
    history.push("/");
  }

  // react dnd
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  const toggle = useCallback(
    () => setHideSourceOnDrag(!hideSourceOnDrag),
    [hideSourceOnDrag]
  );

  return (
    <>
      <div className="flex space-between padding-sides">
        <Link to="/adult-profile">
          <img src={arrow} alt="back-arrow" />
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSignOut();
          }}
          disabled={loading}
        >
          {loading ? <span>Loading</span> : <span>Logout</span>}
        </button>
      </div>

      <div className="flex">
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
          <ToolkitButton>
            <ToolkitText>Save to Gallery</ToolkitText>
          </ToolkitButton>
        </Toolkit>

        <div className="flex column center text-center items-center">
          <h2>
            {adult_name
              ? "Welcome back " + adult_name + " and "
              : "Welcome back "}
            {child_name ?? "friend"}!
          </h2>
          <p className="narrow">
            Here’s your Me Tree from last time - it’s looking good! Would you
            like to change anything?
          </p>

          <div>
            <MeTreeContainer className="relative">
              <Container
                hideSourceOnDrag={hideSourceOnDrag}
                growing={growing}
                whoAround={whoAround}
                boxes={boxes}
                setBoxes={setBoxes}
              />
              <MeTreeImage src={treeLocation ?? MeTreeGarden} alt="" />
              <MeTreeBackground src={background} alt="" />
            </MeTreeContainer>

            {visible ? (
              <Palette
                type={paletteOption}
                treeLocation={treeLocation}
                setTreeLocation={setTreeLocation}
                background={background}
                setBackground={setBackground}
                growing={growing}
                setGrowing={setGrowing}
                whoAround={whoAround}
                setWhoAround={setWhoAround}
                growing_left={growing_left}
                growing_top={growing_top}
                who_around_top={who_around_top}
                who_around_left={who_around_left}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
