import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { getGalleryData } from "../database/model";
import logo from "./../assets/Logo.svg";
import cuteVisitor from "./../assets/cute_visitors.svg";

export default function Gallery({ state, setState }) {
  console.log("in gallery ", state.data.gallery?.images);

  // if (state.data.gallery.images.length === 0)
  //   return <div>Loading images...</div>;

  async function deleteImage(image) {
    let imagesArray = state.data.gallery?.images;
    let imageIndex = imagesArray.indexOf(image);
    imagesArray[imageIndex] = null;
    setState({
      gallery: {
        images: imagesArray,
      },
    });
  }

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
      <div className="flex column center text-center items-center">
        <h1 className="margin-top txt-xlg">Gallery</h1>
        <h2 className="margin-none txt-lg">
          Here you can see all your saved MeTree's!
        </h2>
      </div>
      <div className="flex flex-center ">
        <ul className="li-none gap grid">
          {state.data.gallery?.images
            .filter((image) => image !== null)
            .map(
              (image) => (
                // image == undefined ? (
                //   <li className="relative invisible">
                //     <button
                //       onClick={() => deleteImage(image)}
                //       className="delete invisible absolute top-right txt-lg"
                //     >
                //       X
                //     </button>
                //     <img
                //       className="invisible"
                //       src={image}
                //       alt="A snapshot of your Me Tree"
                //     />
                //   </li>
                // ) : (
                <li className="relative">
                  <button
                    onClick={() => deleteImage(image)}
                    className="delete absolute top-right txt-lg"
                  >
                    X
                  </button>
                  <img src={image} alt="A snapshot of your Me Tree" />
                </li>
              )
              //)
            )}
        </ul>
      </div>
    </>
  );
}
