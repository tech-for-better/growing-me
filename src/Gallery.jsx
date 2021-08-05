import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { getGalleryData } from "../database/model";
import logo from "./../assets/Logo.svg";

export default function Gallery({ state, setState }) {
  console.log("in gallery ", state.data.gallery.images);

  if (state.data.gallery.images.length === 0)
    return <div>Loading images...</div>;
  return (
    <>
      <div className="height">
        <div>
          <NavMenu />
        </div>
        <div className="center">
          <Link to={"/content"}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
      </div>
      <div className="flex column center text-center items-center">
        <h1 className="margin-none txt-xlg">Gallery</h1>
        <h2 className="margin-none txt-lg">
          Here you can see all your saved MeTree's!
        </h2>
      </div>
      <div className="flex ">
        <ul className="li-none">
          {state.data.gallery.images.map((image) => (
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
