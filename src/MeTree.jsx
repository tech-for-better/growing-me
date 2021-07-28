import React from "react";
import {
  useState,
  useEffect,
  useCallback,
  useReducer,
  createContext,
} from "react";
import { supabase } from "./supabaseClient";
import {
  getMeTree,
  getProfileData,
  setTreeData,
  setBackgroundData,
  setGrowingCoordsData,
  setGrowingData,
  setTreeLocationData,
  setWhoAroundCoordsData,
  setWhoAroundData,
} from "../database/model";
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
import Container from "./Container";

export const MeTreeContext = createContext();

//set initial state of pallette options
const initialState = {
  treeLocation: null,
  background: null,
  growing: null,
  whoAround: null,
  growing_coords: { left: 80, top: 20 },
  whoAround_coords: { left: 100, top: 20 },
  boxes: {
    a: { top: 0, left: 2, isGrowing: true },
    b: { top: 1, left: 3, isGrowing: false },
    // Below not working: Uncaught ReferenceError: growing_coords is not defined
    // a: { top: growing_coords.top, left: growing_coords.left, isGrowing: true },
    // b: {
    //   top: whoAround_coords.top,
    //   left: whoAround_coords.left,
    //   isGrowing: false,
    // },
  },
};
console.log("METREE: initialState variable", initialState);

// update state of pallette options
function reducer(state, action) {
  console.log("METREE: reducer fn action", action);
  console.log("METREE: reducer fn state", state);
  switch (action.type) {
    case "update_treeLocation":
      const treeLocation = action.newTreeLocation;
      console.log(
        "METREE: reducer fn switch action.newTreeLocation",
        action.newTreeLocation
      );
      return { ...state, treeLocation };
    case "update_background":
      const background = action.newBackground;
      return { ...state, background };
    case "update_growing":
      const growing = action.newGrowingItem;
      // console.log(
      //   "METREE: reducer fn switch action.newGrowingItem",
      //   action.newGrowingItem
      // );
      return { ...state, growing };
    case "update_whoAround":
      const whoAround = action.newWhoAround;
      return { ...state, whoAround };
    case "update_growing_coords":
      const growing_coords = action.newGrowingCoords;
      // TODO: THIS CONSOLE.LOG NOT SHOWING
      console.log(
        "METREE: reducer fn switch action.newGrowingCoords",
        action.newGrowingCoords
      );
      return { ...state, growing_coords };
    case "update_whoAround_coords":
      const whoAround_coords = action.newWhoAroundCoords;
      // TODO: THIS CONSOLE.LOG NOT SHOWING
      console.log(
        "METREE: reducer fn switch action.newWhoAroundCoords",
        action.newWhoAroundCoords
      );
      return { ...state, whoAround_coords };
    case "update_boxes":
      const boxes = action.newBoxes;
      console.log("METREE: reducer fn switch action.newBoxes", action.newBoxes);
      return { ...state, boxes };
    default:
      return state;
  }
}

// MeTree Component
export function MeTree() {
  //TODO: when you refresh page the initalState var resets the state?
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('METREE: state', state);

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const [adult_name, setAdultName] = useState(null);
  const [child_name, setChildName] = useState(null);

  const [visible, setVisible] = useState(false);
  const [paletteOption, setPaletteOption] = useState("no option");

  // Get current user and signOut function from context
  const { user, signOut } = useAuth();
  const history = useHistory();

  // get adult/child names + meTree data from db and render to page once on firstRender/re-load?
  useEffect(() => {
    getNames();
    getMeTreeUpdates();
  }, []); // only runs on first render

  // this was uncommented
  useEffect(() => {
    dispatch({
      type: "update_growing_coords",
      newGrowingCoords: { left: state.boxes.a.left, top: state.boxes.a.top },
    });
    dispatch({
      type: "update_whoAround_coords",
      newWhoAroundCoords: { left: state.boxes.b.left, top: state.boxes.b.top },
    });
  }, [state.boxes]);

  // this was uncommented
  // useEffect(() => {
  //    getMeTreeUpdates();
  // }, [state]);

  // useEffect(() => {
  //   setBoxes({
  //     a: { top: growing_top, left: growing_left, isGrowing: true },
  //     b: { top: who_around_top, left: who_around_left, isGrowing: false },
  //   });
  // }, [growing_top, growing_left, who_around_top, who_around_left]);

  // this seems to work! DB is updated with the four main variables (NOT COORDS)
  useEffect(() => {
    async function updateMeTreeInDb(
      background,
      treeLocation,
      whoAround,
      growing,
      growing_coords,
      whoAround_coords
    ) {
      try {
        setLoading(true);
        // check if there are differences with db
        // let data = await getMeTree();
        // console.log("data from get data to check differences", data);
        // if (data) {
        //   // if the background is unchanged
        //   if (data.background !== background) {
        //     await setBackgroundData(background);
        //   }
        //   if (data.tree_location !== treeLocation) {
        //     await setTreeLocationData(treeLocation);
        //     return;
        //   }
        //   if (data.who_around !== whoAround) {
        //     await setWhoAroundData(whoAround);
        //     return;
        //   }
        //   if (data.growing !== growing) {
        //     await setGrowingData(growing);
        //     return;
        //   }
        //   if (data.growing_left !== growing_coords.left) {
        //     await setGrowingCoordsData(growing_coords);
        //     return;
        //   }
        //   if (data.growing_top !== growing_coords.top) {
        //     await setGrowingCoordsData(growing_coords);
        //     return;
        //   }
        //   if (data.who_around_left !== whoAround_coords.left) {
        //     await setWhoAroundCoordsData(whoAround_coords);
        //     return;
        //   }
        //   if (data.who_around_top !== whoAround_coords.top) {
        //     await setWhoAroundCoordsData(whoAround_coords);
        //     return;
        //   }
        // }
        await setTreeData(
          background,
          treeLocation,
          whoAround,
          growing,
          growing_coords,
          whoAround_coords
        );
        console.log('growing_coordsin db', growing_coords )
      } catch (error) {
        console.log("Error: ", error.message);
      } finally {
        setLoading(false);
      }
    }
    updateMeTreeInDb(
      state.background,
      state.treeLocation,
      state.whoAround,
      state.growing,
      state.growing_coords,
      state.whoAround_coords
    );
  }, [
    state.background,
    state.treeLocation,
    state.whoAround,
    state.growing,
    state.growing_coords,
    state.whoAround_coords,
  ]);

  async function getMeTreeUpdates() {
    try {
      setLoading(true);
      let data = await getMeTree();
      if (data) {
        console.log("getMeTreeUpdates data", data);
        let treeLocationTemp = getShortImagePath(data.tree_location);
        let backgroundTemp = getShortImagePath(data.background);
        let growingTemp = getShortImagePathFromArray(data.growing);
        let whoAroundTemp = getShortImagePathFromArray(data.who_around);
        console.log(
          "temps",
          treeLocationTemp,
          backgroundTemp,
          growingTemp,
          whoAroundTemp
        );
        console.log(
          "dispatch treeLocation",
          ImgSrcToImportMappings[treeLocationTemp]
        );

        dispatch({
          type: "update_treeLocation",
          newTreeLocation: ImgSrcToImportMappings[treeLocationTemp],
        });
        dispatch({
          type: "update_background",
          newBackground: ImgSrcToImportMappings[backgroundTemp],
        });
        dispatch({
          type: "update_growing",
          newGrowingItem: ImgSrcToImportMappings[growingTemp],
        });
        dispatch({
          type: "update_whoAround",
          newWhoAround: ImgSrcToImportMappings[whoAroundTemp],
        });
        dispatch({
          type: "update_whoAround_coords",
          newWhoAroundCoords: {
            left: data.who_around_left,
            top: data.who_around_top,

          },
        });
        dispatch({
          type: "update_growing_coords",
          newGrowingCoords: {
            left: data.growing_left,
            top: data.growing_top,
          },
        });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
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

  async function getNames() {
    try {
      setLoading(true);
      let data = await getProfileData();
      console.log("data from getName: ", data);

      if (data) {
        // console.log("profiledata", data);
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
    console.log('this fn gets called when clicking logout')
    // Ends user session
    await signOut();
    // Redirects the user to Login page
    history.push("/login");
  }

  // react dnd
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  const toggle = useCallback(
    () => setHideSourceOnDrag(!hideSourceOnDrag),
    [hideSourceOnDrag]
  );

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

          <div>
            <MeTreeContext.Provider value={{ state, dispatch }}>
              <MeTreeContainer className="relative">
                <Container hideSourceOnDrag={hideSourceOnDrag} />
                <MeTreeImage src={state.treeLocation ?? MeTreeGarden} alt="" />
                <MeTreeBackground src={state.background} alt="" />
              </MeTreeContainer>

              {visible ? <Palette type={paletteOption} /> : ""}
            </MeTreeContext.Provider>
          </div>
        </div>
      </div>
      <footer className="flex flex-end padding-sides">
        <Link to="/content">
          <button>Ready to play?</button>
        </Link>
      </footer>
    </>
  );
}
