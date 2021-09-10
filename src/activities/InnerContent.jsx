import React from "react";
import { useHistory } from "react-router-dom";
import { useContext, useRef, useEffect, useState } from "react";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { Carousel } from "react-responsive-carousel";
import { ContentData } from "./ContentData";
import "./../layout/Carousel.css";
import { MeTreeContext } from "../App";
import { LeftArrow, RightArrow } from "../layout/arrows.styled";
import {
  make_with_background,
  play_with_background,
  think_with_background,
  wonder_with_background,
  left_arrow,
  right_arrow,
} from "../images/activitiesImages/InnerContentBackgroundImages";

export default function InnerContent() {
  const { contentState, dispatch } = useContext(ContentContext);
  const { state, setState } = useContext(MeTreeContext);
  const [uploading, setUploading] = useState(false);
  const history = useHistory();

  async function uploadWonderImage(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("wonder-gallery")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  let textColorToSubSectionMap = {
    // play: "#abc961",
    // think: "#337d8e",
    // make: "#fed436",
    // wonder: "#28424c",
    play: "transparent",
    think: "transparent",
    make: "transparent",
    wonder: "transparent",
  };

  let backgroundImgToSubSectionMap = {
    play: play_with_background,
    think: think_with_background,
    make: make_with_background,
    wonder: wonder_with_background,
  };

  const sections = [
    "Great To Meet You",
    "Your Brain is Amazing",
    "Your Feelings Matter",
    "You're Not Alone",
    "You're Safe",
    "You're Unique",
    "You're Brave",
    "You Belong Here",
    "The Future Is Bright",
    "You Are A Wonder",
  ];

  async function sectionCompleted() {
    // handle button click here
    console.log("current section completed:", contentState.current_section);
    let currentIndex = sections.indexOf(contentState.current_section);
    let unlocked_section = sections[currentIndex + 1];
    console.log("unlocked_section", unlocked_section);
    console.log("contentState", contentState);
    if (state.data.progress.unlocked.indexOf(unlocked_section) === -1) {
      setState({
        progress: {
          unlocked: [...state.data.progress.unlocked, unlocked_section],
        },
      });
    }
    // redirect to next section
    dispatch({
      type: ACTIONS.SET_MULTIPLE,
      payload: {
        current_section: unlocked_section,
        current_subsection: "play",
      },
    });
  }

  function moveToNextSection() {
    console.log("move to next section", contentState.current_section);
    if (contentState.current_subsection === "play") {
      dispatch({
        type: ACTIONS.SET_MULTIPLE,
        payload: {
          current_subsection: "think",
        },
      });
    }
    if (contentState.current_subsection === "think") {
      dispatch({
        type: ACTIONS.SET_MULTIPLE,
        payload: {
          current_subsection: "make",
        },
      });
    }
    if (contentState.current_subsection === "make") {
      dispatch({
        type: ACTIONS.SET_MULTIPLE,
        payload: {
          current_subsection: "wonder",
        },
      });
    }
  }
  // use useRef to get the carousel instance
  let carousel = useRef(null);

  useEffect(() => {
    console.log("state in carousel use effect", state);
    console.log("carousel use effect", carousel.state.selectedItem);
    // some validation to set the slider to 0
    if (carousel && carousel?.state?.selectedItem > 0) {
      carousel.state.selectedItem = 0;
    }
  }, [contentState]);



  return (
    <>
      {/* <div className="flex flex-center space-between narrow center column">
        <h1 className="text-center txt-xlg mobile-margin-sm margin-top-btm-1">
          {contentState.current_section}
        </h1>
      </div> */}

      <div
        className="inner-content_background"
        style={{
          backgroundImage: `url(${
            backgroundImgToSubSectionMap[contentState.current_subsection]
          })`,
        }}
      >
        <div className="flex flex-center space-between narrow center column">
          {/* <h2
        className="text-center txt-lg rokkitt-font mobile-hide"
        style={{
          color: `${textColorToSubSectionMap[contentState.current_subsection]}`,
        }}
      >
        Welcome to the {`${contentState.current_subsection}`.toUpperCase()} Section{" "}
      </h2> */}
          {/* <div> */}
          <Carousel
            key={
              ContentData[contentState.current_section][
                contentState.current_subsection
              ]
            }
            ref={(el) => (carousel = el)} // useRef
            className="mobile-margin-sm relative"
            showThumbs={false}
            infiniteLoop={true}
            selectedItem={0}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && <LeftArrow onClick={onClickHandler} title={label} />
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <RightArrow
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                ></RightArrow>
              )
            }
          >
            {Object.keys(
              ContentData[contentState.current_section][
                contentState.current_subsection
              ]
            ).map((slide, i) => {
              console.log("SLIDE in carousel map:", slide, i);

              return (
                <>
                  <div className="flex column full-height " key={i}>
                    <div className="pad-bottom">
                      <img
                        src={
                          ContentData[contentState.current_section][
                            contentState.current_subsection
                          ][slide]["img"]
                        }
                      />
                    </div>
                    <div
                      className="txt-background "
                      style={{
                        backgroundColor: `${
                          textColorToSubSectionMap[
                            contentState.current_subsection
                          ]
                        }`,
                      }}
                    >
                      <p className="dark-font txt-sm rokkitt-font">
                        {
                          ContentData[contentState.current_section][
                            contentState.current_subsection
                          ][slide]["txt"]
                        }
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </Carousel>
          {contentState.current_subsection === "wonder" ? (
            <>
              <div className="flex column wonder-buttons ">
                <div>
                  <button
                    onClick={() => sectionCompleted()}
                    className=" fixed-narrow button primary "
                  >
                    Section Completed
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => history.push("/gallery")}
                    className=" fixed-narrow button primary "
                  >
                    View Gallery
                  </button>
                </div>
                <div>
                  <label
                    className=" fixed-narrow button primary margin-none  "
                    htmlFor="single"
                  >
                    {uploading ? "Uploading ..." : "Upload"}
                  </label>
                  <input
                    style={{
                      visibility: "hidden",
                      position: "absolute",
                    }}
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadWonderImage}
                    disabled={uploading}
                  />
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={() => moveToNextSection()}
              className="absolute fixed-narrow bottom-right button primary max-content"
            >
              Next Activity
            </button>
          )}
        </div>
      </div>
    </>
  );
}
