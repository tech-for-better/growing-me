import React from "react";
import { useContext } from "react";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { Carousel } from "react-responsive-carousel";
import { ContentData } from "./ContentData";
import "./Layout/Carousel.css";

export default function InnerContent() {
  const { state, dispatch } = useContext(ContentContext);

  return (
    <div className="flex flex-center space-between narrow center column">
      <h1 className="text-center">{state.current_section}</h1>
      {/* <div> */}
      <Carousel showThumbs={false}>
        {Object.keys(
          ContentData[state.current_section][state.current_subsection]
        ).map((slide) => {
          return (
            <div className="flex column full-height">
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
          );
        })}
      </Carousel>
      {/* </div> */}
    </div>
  );
}
