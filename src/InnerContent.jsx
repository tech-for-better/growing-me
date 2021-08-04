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
    return className = "play-color";
  }
  if (text === "THINK") {
    return className = "think-color";
  }

  return (
    <div className="flex flex-center space-between narrow center column ">
      <h1 className="text-center margin-top">{state.current_section}</h1>
      <h2
        className="text-center"
        style={{ color: "PLAY" ? "#abc961" : "THINK" ? "#337d8e" : "MAKE"? "#fed436": "WONDER"? "#28424c" : "000"}}
        // className={"PLAY" ? 'play-color' : 'think-color'}
      >
        These are the {`${state.current_subsection}`.toUpperCase()} activities.{" "}
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
                <div className="txt-background">
                  <p>
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
