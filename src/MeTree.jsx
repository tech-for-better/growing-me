import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import {
  Toolkit,
  ToolkitButton,
  MeTreeImage,
  BtnImage,
  ToolkitText,
} from "./Layout/MeTree.styled";
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

export default function MeTree() {
  const [visible, setVisible] = useState(false);
  const [paletteOption, setPaletteOption] = useState("no option");

  function handleClick(paletteType) {
    setPaletteOption(paletteType);
    setVisible((visible) => !visible);
  }

  return (
    <>
      <div className="form-widget">
        <p>
          Go to <Link to="/me-tree">MeTree</Link>
          <Link to="/whose-playing"> whose </Link>
          <Link to="/child-profile">child </Link>
          <Link to="/login">login </Link>
          <Link to="/">adult </Link>
        </p>
      </div>

      <div className="flex">
        <Toolkit>
          <ToolkitButton>
            <ToolkitText>Add photo</ToolkitText>
          </ToolkitButton>
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
            <ToolkitText>Print</ToolkitText>
          </ToolkitButton>
        </Toolkit>

        <div className="flex column center text-center items-center">
          <h2>Welcome back Nicky and Ben!</h2>
          <p className="narrow">
            Here’s your Me Tree from last time - it’s looking good! Would you
            like to change anything?
          </p>

          <MeTreeImage src={MeTreeGarden} alt="" />
          {/* <MeTreeImage src={MeTreePlanet} alt="" />
          <MeTreeImage src={MeTreeHeart} alt="" />
          <MeTreeImage src={MeTreeCloud} alt="" /> */}
        </div>

        {visible ? <Palette type={paletteOption} /> : ""}
      </div>
    </>
  );
}
