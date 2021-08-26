import React from "react";
import { useContext } from "react";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { Carousel } from "react-responsive-carousel";
import { ContentData } from "./ContentData";
import "./Layout/Carousel.css";

export default function InnerContent() {
  const { state, dispatch } = useContext(ContentContext);
  let text;
  if (text === "PLAY") {
    return (className = "play-color");
  }
  let textColorToSubSectionMap = {
    play: "#abc961",
    think: "#337d8e",
    make: "#fed436",
    wonder: "#28424c",
  };

  return (
    <div className="flex flex-center space-between narrow center column ">
      <h1 className="text-center margin-top txt-xlg mobile-margin-sm">
        {state.current_section}
      </h1>
      {/* <h2
        className="text-center txt-lg rokkitt-font mobile-hide"
        style={{
          color: `${textColorToSubSectionMap[state.current_subsection]}`,
        }}
      >
        Welcome to the {`${state.current_subsection}`.toUpperCase()} Section{" "}
      </h2> */}
      {/* <div> */}
      <Carousel
        className="mobile-margin-sm"
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={true}
      >
        {Object.keys(
          ContentData[state.current_section][state.current_subsection]
          // [state.current_slide]
        ).map((slide) => {
          console.log("slide in carousel map", slide);
          console.log(
            "content",
            ContentData[state.current_section][state.current_subsection]
            // [state.current_slide]
            [slide]
          );
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
  );
}
