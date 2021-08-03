import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { getGalleryData } from "../database/model";

export default function Gallery({ setGalleryImage, galleryImage }) {
  async function getImages() {
    try {
      let data = await getGalleryData();

      if (data) {
        console.log("gallerydata", data);
        setGalleryImage(data.images);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
    }
  }

  useEffect(() => {
    getImages();
  }, []); // only runs on first render

  console.log("in gallery ", galleryImage);
  return (
    <div>
      <NavMenu />
      <div>
        {galleryImage && (
          <div className="imageContainer">
            <img
              style={{ width: "500px" }}
              src={galleryImage[0]}
              alt={"Screenshot"}
            />
          </div>
        )}
      </div>
    </div>
  );
}
