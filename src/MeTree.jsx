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
import MeTreeGarden from "/assets/where_-_garden.svg";
import MeTreeCloud from "/assets/where_-_cloud.svg";
import MeTreeHeart from "/assets/where_-_on_a_big_love_heart.svg";
import MeTreePlanet from "/assets/where_-_another_planet.svg";
import WhatColour from "/assets/what_colour_is_your_tree.svg";
import WhatGrows from "/assets/what_grows_on_your_tree.svg";
import WhatShape from "/assets/what_shape_is_your_tree.svg";
import WhereTree from "/assets/where_is_your_tree.svg";
import WhoAround from "/assets/who_is_around_your_tree.svg";
import Palette from "./Palette";
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
import funnyFaces from "/assets/funny_faces.svg";
import bin from "/assets/icomoon-free_bin.svg";
import logo from "/assets/Logo.svg";
import Container from "./Container";
import { toPng } from "html-to-image";
import { MeTreeContext } from "./App";
import { Dustbin } from "./Dustbin";

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
  // handles the delete drop box
  function handleDrop(index, item, id) {
    console.log("HANDLE DROP EVENT", index, item, id);
    const { src } = item;

    switch (src){
      case apple:
      case banana:
      case batwings:
      case cherries:
      case chocolate:
      case pizza:

        // let newGrowingId = `growing${Object.keys(state.data.tree.boxes).length + 1}`;
        // let growingObj = {};
        // growingObj[newGrowingId] = {
        //   top: 0,
        //   left: 2,
        //   isGrowing: true,
        //   src: src,
        // };

        // setState({
        //   tree: {
        //     boxes: {
        //       ...state.data.tree.boxes,
        //       ...growingObj,
        //     },
        //   },
        // });
        break;

      case cuteVisitor:
      case pricklyVisitor:
      case fluffyVisitor:
      case creepyCrawlyVisitor:
      case worm:

        // let newWhoId = `who${Object.keys(state.data.tree.boxes).length + 1}`;
        // let whoObj = {};
        // whoObj[newWhoId] = { top: 0, left: 2, isGrowing: false, src: src };

        // setState({
        //   tree: {
        //     boxes: {
        //       ...state.data.tree.boxes,
        //       ...whoObj,
        //     },
        //   },
        // });
        break;
    }
    //   setDroppedBoxNames((prev) => [...prev, name]);
    //   // setDroppedBoxNames(
    //   //   update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
    //   // );
    //   setBoxes((prev) => prev.filter((x) => x.id !== id));
    //   // setBoxes(update(boxes, { $splice: [[item.id, 1]] }));
    //   setDustbins(
    //     update(dustbins, {
    //       [index]: {
    //         lastDroppedItem: {
    //           $set: item,
    //         },
    //       },
    //     })
    //   );
    // },
    // [droppedBoxNames, boxes, dustbins]
  };

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
                <Container hideSourceOnDrag={hideSourceOnDrag} />
                <MeTreeImage
                  src={state.data.tree?.tree_location ?? MeTreeGarden}
                  alt=""
                />
                <MeTreeBackground src={state.data.tree?.background} alt="" />
              </MeTreeContainer>

              {visible ? <Palette type={paletteOption} /> : ""}
            </div>
            <div ref={ref}>
              <Dustbin onDrop={(item) => handleDrop(index, item, id)} />
            </div>

            <div className="empty-area"></div>
            <div className="flex row flex-end margin-btn mobile-margin-sm">
              {/* <div>
                  <img src={bin} alt="bin" />
                </div> */}
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
