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
} from "../layout/MeTree.styled";
import NavMenu from "../components/NavMenu";
import MeTreeGarden from "./../images/MeTreeImages";
import { WhatColour, WhatGrows, WhereTree , WhoAround} from "../images/MeTreeImages";
import Palette from "./Palette";
import logo from "../images/Logo";
import Container from "./Container";
import { toPng } from "html-to-image";
import { MeTreeContext } from "../App";
import { Dustbin } from "./Dustbin";

export function MeTree() {
  const { state, setState } = useContext(MeTreeContext);
  console.log("METREE: state", state);

  const cuteVisitor =
    "https://vxavjjcpsaykzxkhimor.supabase.in/storage/v1/object/sign/private/palette/who_around/cute_visitors.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcml2YXRlL3BhbGV0dGUvd2hvX2Fyb3VuZC9jdXRlX3Zpc2l0b3JzLnN2ZyIsImlhdCI6MTYzMDUxMDU5MSwiZXhwIjoxOTQ1ODcwNTkxfQ.AwcfcbK8_YL5s5MY6GC4wiOhItcF1v2S4cTXEhKoRwM";
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
        // alert(
        //   "You will shortly be redirected to the gallery. Please close this alert box and wait a moment..."
        // );
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

  // @TODO: avatar url not loading
  //const url = URL.createObjectURL(state.data.profile.avatar_url);
  return (
    <>
      {/* <div className="height-100"> */}
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

      <div className="flex margin-top me-tree-container--mobile me-tree-grid me-tree-desktop">
        <div className="toolkit-area">
          <Toolkit>
            <ToolkitButton onClick={() => handleClick("WhatColour")}>
              <BtnImage src={WhatColour} alt="" />
              <ToolkitText className="mobile-hide">
                Change background
              </ToolkitText>
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
              <ToolkitText> Save to Gallery</ToolkitText>
            </ToolkitButton>
          </Toolkit>
        </div>

        <div className="flex column center text-center items-center flex-grow me-tree-area">
          {" "}
          <h1 className="txt-xlg margin-none">
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
          {/* <div className="mobile-narrow">*/}
          <div>
            <div ref={ref}>
              <MeTreeContainer className="relative">
                <Container hideSourceOnDrag={hideSourceOnDrag}></Container>
                <MeTreeImage
                  src={state.data.tree?.tree_location ?? MeTreeGarden}
                  alt=""
                />
                <MeTreeBackground src={state.data.tree?.background} alt="" />
              </MeTreeContainer>

              {visible ? <Palette type={paletteOption} /> : ""}
            </div>

            <div className="empty-area"></div>
            <div className="flex row flex-end margin-btn mobile-margin-sm">
              <Dustbin />
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
      {/* </div> */}
    </>
  );
}
