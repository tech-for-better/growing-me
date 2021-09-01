import React from "react";
import { useContext, useRef, useEffect } from "react";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { Carousel } from "react-responsive-carousel";
import { ContentData } from "./ContentData";
import "./../Layout/Carousel.css";

export default function InnerContent() {
  const { state, dispatch } = useContext(ContentContext);
  console.log("INNER CONTENT STATE", state);
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

  // use useRef to get the carousel instance
  let carousel = useRef(null);

  useEffect(() => {
    // some validation to set the slider to 0
    if (carousel && carousel?.state?.selectedItem > 0) {
      carousel.state.selectedItem = 0;
    }
  }, [state]);


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
        key={ContentData[state.current_section][state.current_subsection]}
        ref={(el) => (carousel = el)} // useRef
        className="mobile-margin-sm"
        showThumbs={false}
        infiniteLoop={true}
        selectedItem={0}
      >

        {Object.keys(
          ContentData[state.current_section][state.current_subsection]
        ).map((slide, i) => {
          console.log("SLIDE in carousel map:", slide, i);

          return (
            <>
              <div className="flex column full-height " key={i}>
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
        {/* :
          " still loading"
        } */}
      </Carousel>
      {/* </div> */}
    </div>
  );
}
