import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import logo from "../images/Logo";
import cuteVisitor from "../images/MeTreeImages";
import { MeTreeContext } from "../App";

const categories = ["all", "Me Tree", "Wonder Time"];

export default function Gallery({ category, setCategory }) {
  const { state, setState } = useContext(MeTreeContext);
  // console.log("in gallery ", state.data.gallery?.me_tree_images);
  console.log(
    "in gallery wonder_time ",
    state.data.gallery?.wonder_time_images
  );

  // if (state.data.gallery.images.length === 0)
  //   return <div>Loading images...</div>;

  async function deleteImage(image) {
    if (state.data.gallery?.me_tree_images.indexOf(image) >= 0) {
      let imagesArray = state.data.gallery?.me_tree_images;
      let imageIndex = imagesArray.indexOf(image);
      imagesArray[imageIndex] = null;
      setState({
        gallery: {
          me_tree_images: imagesArray,
        },
      });
    }
    if (state.data.gallery?.wonder_time_images.indexOf(image) >= 0) {
      let imagesArray = state.data.gallery?.wonder_time_images;
      let imageIndex = imagesArray.indexOf(image);
      imagesArray[imageIndex] = null;
      setState({
        gallery: {
          wonder_time_images: imagesArray,
        },
      });
    }
  }

  // create array of image objects labelled with category
  let combinedImageArray = [];
  state.data.gallery?.me_tree_images
    .filter((image) => image !== null)
    .map((image) => {
      let obj = { src: image, category: "Me Tree" };
      combinedImageArray.push(obj);
    });

  state.data.gallery?.wonder_time_images
    .filter((image) => image !== null)
    .map((image) => {
      let obj = { src: image, category: "Wonder Time" };
      combinedImageArray.push(obj);
    });
  console.log("combinedImage after map", combinedImageArray);

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
        <h1 className="margin-top txt-xlg mobile-margin-lg">Gallery</h1>
        <h2 className="margin-none txt-lg">
          Here you can see all your saved MeTree's!
        </h2>
      </div>
      <section>
        <fieldset>
          <legend>Categories</legend>
          {categories.map((cat) => (
            <label htmlFor={cat} key={cat}>
              {cat}
              <input
                type="radio"
                name=""
                id={cat}
                value={cat}
                checked={cat === category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </label>
          ))}
        </fieldset>
      </section>
      <div className="flex flex-center">
        <ul className="li-none gap grid mobile-gap ">
          {combinedImageArray.length ? (
            combinedImageArray
              .filter(
                (image) => category === "all" || image.category === category
              )
              .map(
                (image) => (
                  // image ? (
                  <li className="relative">
                    <button
                      onClick={() => deleteImage(image)}
                      className="delete absolute top-right txt-lg"
                    >
                      X
                    </button>
                    <img
                      className="gallery-width"
                      src={image.src}
                      alt="An image in your gallery"
                    />
                  </li>
                )
                // ) : (
                //   <li className="">No images to display!</li>
                // )
                //)
              )
          ) : (
            <li className="">
              <h1>Nothing in your gallery!</h1>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
