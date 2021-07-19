import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import {
  PaletteContainer,
  PaletteImg,
  PaletteBtn,
} from "./Layout/Palette.styled";
import MeTreeGarden from "./../assets/where_-_garden.svg";
import MeTreeCloud from "./../assets/where_-_cloud.svg";
import MeTreeHeart from "./../assets/where_-_on_a_big_love_heart.svg";
import MeTreePlanet from "./../assets/where_-_another_planet.svg";
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

export default function Palette(props) {
  let option = props.type;
  let paletteOptions = {
    WhatColour: [
      mountainBlob,
      spikeyBlob,
      minecraftBlob,
      jellyBlob,
      heartBlob,
      cloudyBlob,
      ovalBlob,
    ],
    WhatGrows: [apple, banana, batwings, cherries, chocolate, pizza],
    WhoAround: [
      cuteVisitor,
      pricklyVisitor,
      fluffyVisitor,
      creepyCrawlyVisitor,
      worm,
    ],
    WhereTree: [MeTreeGarden, MeTreeCloud, MeTreeHeart, MeTreePlanet],
  };

  const [loading, setLoading] = useState(true);
  const [treeLocation, setTreeLocation] = useState("fake location");
  const [background, setBackground] = useState(null);
  const [growing, setGrowing] = useState(null);
  const [whoAround, setWhoAround] = useState(null);

  async function handleClick(event) {
    console.log("treeLocation before being set", treeLocation);
    console.log("clicked on event src", event.target.src);
    setTreeLocation(event.target.src);
    console.log("treeLocation after being set", treeLocation);
  }

  useEffect(() => {
    updateMeTreeInDb({
      background,
      treeLocation,
      whoAround,
      growing,
    });
  }, [background, treeLocation, whoAround, growing]);

  async function getMeTree() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("me_tree")
        .select(`background, tree_location, who_around, growing`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setTreeLocation(data.tree_location);
        setBackground(data.background);
        setGrowing(data.growing);
        setWhoAround(data.who_around);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateMeTreeInDb({
    background,
    treeLocation,
    whoAround,
    growing,
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        background,
        tree_location: treeLocation,
        who_around: whoAround,
        growing,
      };

      let { error } = await supabase.from("me_tree").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      console.log("updated meTree data in db", treeLocation);
      setLoading(false);
    }
  }

  return (
    <>
      <PaletteContainer>
        {/* <p style={{ color: "white" }}>Hi I'm a palette + {props.type}</p> */}
        {paletteOptions[option].map((image) => {
          return (
            <>
              <PaletteBtn image={image} onClick={(event) => handleClick(event)}>
                <PaletteImg key={image} src={image} alt={image} />
              </PaletteBtn>
            </>
          );
        })}
      </PaletteContainer>
    </>
  );
}
