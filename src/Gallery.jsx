import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { getGalleryData } from "../database/model";

export default function Gallery({ state, setState }) {

  // async function getImages() {
  //   try {
  //     let data = await getGalleryData();

  //     if (data) {
  //       console.log("gallerydata", data);
  //       setGalleryImage((prevState) => [...prevState, ...data.images]);
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //   } finally {
  //   }
  // }

  // useEffect(() => {
  //   getImages();
  // }, []); // only runs on first render

  console.log("in gallery ", state.gallery.images);
  // return (
  //   <div>
  //     <NavMenu />
  //     <div>
  if (state.gallery.images.length === 0) return <div>Loading images...</div>;
  return (
    <>
      <NavMenu />
      <div className="flex column center text-center items-center margin-top">
        <h1 className="margin-none">Gallery</h1>
        <h2>Here you can see all your saved MeTree's!</h2>
      </div>
      <div className="flex ">
        <ul className="li-none">
          {state.gallery.images.map((image) => (
            <li>
              <img src={image} alt="images" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
//         {galleryImage &&
//           galleryImage.map((image) => {
//             <div className="imageContainer">
//               <img style={{ width: "500px" }} src={image} alt={"Screenshot"} />
//             </div>;
//           })}
//       </div>
//     </div>
//   );
// }
