import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { useScreenshot } from "use-react-screenshot";


export default function Gallery({ galleryImage }) {
  console.log('in gallery ', galleryImage)
  return (
    <div>
      <NavMenu />
      <div>
        {galleryImage && (
          <div className="imageContainer">
            <img
              style={{ width: "100%" }}
              src={galleryImage}
              alt={"Screenshot"}
            />
           
          </div>
        )}

    </div>
  );
}
