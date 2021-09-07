import React from "react";
import { useContext, useRef, useEffect } from "react";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { Carousel } from "react-responsive-carousel";
import { ContentData } from "./ContentData";
import "./../layout/Carousel.css";
import { MeTreeContext } from "../App";
import { LeftArrow, RightArrow } from "../layout/arrows.styled";
import {
  makepic,
  playpic,
  thinkpic,
  wonderpic,
  left_arrow,
  right_arrow,
} from "../images/activitiesImages/InnerContentBackgroundImages";

export default function InnerContent() {
  const { contentState, dispatch } = useContext(ContentContext);
  const { state, setState } = useContext(MeTreeContext);

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
    play: playpic,
    think: thinkpic,
    make: makepic,
    wonder: wonderpic,
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
      // dispatch({
      //   type: ACTIONS.ADD_TO_UNLOCKED,
      //   new_unlocked: unlocked_section,
      // });
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
      {/* <div className="inner-content-container"></div> */}
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
              hasPrev && (
                <LeftArrow
                  // type="button"
                  onClick={onClickHandler}
                  title={label}
                />
                // <button
                //   type="button"
                //   onClick={onClickHandler}
                //   title={label}
                //   style={{
                //     ...leftArrowStyles,
                //   }}
                // >
                //   <img src={left_arrow} alt="" />
                // </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <RightArrow
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                >
                  {/* <img src={right_arrow} alt="" /> */}
                </RightArrow>
                // <button
                //   type="button"
                //   onClick={onClickHandler}
                //   title={label}
                //   style={{
                //     ...rightArrowStyles,
                //   }}
                // >
                //   <img src={right_arrow} alt="" />
                // </button>
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
            {/* :
          " still loading"
        } */}
          </Carousel>
          {contentState.current_subsection === "wonder" ? (
            <button
              onClick={() => sectionCompleted()}
              className="absolute fixed-narrow min-width bottom-right button primary"
            >
              Section complete?
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
