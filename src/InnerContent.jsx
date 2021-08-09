import React from "react";
import { useContext } from "react";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { Carousel } from "react-responsive-carousel";
import { ContentData } from "./ContentData";
import "./Layout/Carousel.css";

export default function InnerContent() {
  const { state, dispatch } = useContext(ContentContext);

  let textColorToSubSectionMap = {
    play: "#abc961",
    think: "#337d8e",
    make: "#fed436",
    wonder: "#28424c",
  };
  let backgroundImgToSubSectionMap = {
    play: "assets/play_background_white.svg",
    think: "assets/think_background.svg",
    make: "assets/make_backgroundwh.svg",
    wonder: "assets/wonder_back_white.svg",
  };

  return (
    <div
      className="inner-content_background"
      style={{
        backgroundImage: `url(${
          backgroundImgToSubSectionMap[state.current_subsection]
        })`,
      }}
    >
      <div className="flex flex-center space-between narrow center column absolute inner-content-container">
        <h1 className="text-center margin-top txt-xlg">
          {state.current_section}
        </h1>
        <h2
          className="text-center txt-lg rokkitt-font"
          style={{
            color: `${textColorToSubSectionMap[state.current_subsection]}`,
          }}
        >
          Welcome to the {`${state.current_subsection}`.toUpperCase()} Section{" "}
        </h2>
        {/* <div> */}
        <Carousel showThumbs={false}>
          {Object.keys(
            ContentData[state.current_section][state.current_subsection]
          ).map((slide) => {
            return (
              <>
                <div className="flex column full-height ">
                  <div className="pad-bottom">
                    <img
                      src={
                        ContentData[state.current_section][
                          state.current_subsection
                        ][slide]["img"]
                      }
                    />
                  </div>
                  <div
                    className="txt-background "
                    style={{
                      backgroundColor: `${
                        textColorToSubSectionMap[state.current_subsection]
                      }`,
                    }}
                  >
                    <p className="white txt-lg rokkitt-font">
                      {
                        ContentData[state.current_section][
                          state.current_subsection
                        ][slide]["txt"]
                      }
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
}
