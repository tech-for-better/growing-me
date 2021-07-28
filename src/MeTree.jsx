import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { getMeTree, getProfileData } from "../database/model";
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
import { getShortImagePath } from "../utils/utils";

export default function MeTree() {
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

  // Get current user and signOut function from context
  const { user, signOut } = useAuth();
  const history = useHistory();

  useEffect(() => {
    // getMeTreeUpdates();
    getNames();
  }, []);

  useEffect(() => {
    console.log("treeLocation in useeffect", treeLocation);
    getMeTreeUpdates();
  }, [treeLocation]);

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
  };

  async function getMeTreeUpdates() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let data = await getMeTree();
      if (data) {
        console.log("data", data);
        let treeLocationTemp = getShortImagePath(data.tree_location);
        // let backgroundTemp = getShortImagePath(data.background);
        // let growingTemp = getShortImagePath(data.growing);
        // let whoAroundTemp = getShortImagePath(data.who_around);

        setTreeLocation(ImgSrcToImportMappings[treeLocationTemp]);
        // setBackground(ImgSrcToImportMappings[backgroundTemp]);
        // setGrowing(ImgSrcToImportMappings[growingTemp]);
        // setWhoAround(ImgSrcToImportMappings[whoAroundTemp]);
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

  return (
    <>
      <div className="flex space-between padding-sm">
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
          <MeTreeContainer className="relative">
            <MeTreeImage src={treeLocation ?? MeTreeGarden} alt="" />
            <MeTreeBackground src={background} alt="" />
          </MeTreeContainer>
        </div>

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
          />
        ) : (
          ""
        )}
      </div>
      <footer className="flex flex-end padding-sides">
        <Link to="/content">
          <button>Ready to play?</button>
        </Link>
      </footer>
    </>
  );
}
