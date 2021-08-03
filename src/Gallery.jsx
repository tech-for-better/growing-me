import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "./components/NavMenu";

export default function Gallery({ galleryImage }) {
  console.log('in gallery ', galleryImage)
  return (
    <div>
      <NavMenu />
      <div>
        {galleryImage && (
          <div className="imageContainer">
            <img
              style={{ width: "500px" }}
              src={galleryImage}
              alt={"Screenshot"}
            />

          </div>
        )}
      </div>
    </div>
  );
}
