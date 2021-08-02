import React from "react";
import { useContext } from "react";
import { ContentContext } from "./Content";
import { ACTIONS } from "./Content";
import { Carousel } from "react-responsive-carousel";
import { ContentData } from "./ContentData";
import "./Layout/Carousel.css"

export default function InnerContent() {
  const { state, dispatch } = useContext(ContentContext);


  console.log('content data', ContentData['Your Brain is Amazing']['play'][1]['img']);
  console.log(
    ContentData[state.current_section][state.current_subsection][1]['img']
  );

  return (
    <div className="flex flex-center space-between narrow center column">
      <h1 className="text-center">{state.current_section}</h1>
      {/* <BrainAmazing></BrainAmazing> */}
      <div>
        <Carousel showThumbs={false}>
          <div>
            <img
              src={
                ContentData[state.current_section][state.current_subsection][1][
                  "img"
                ]
              }
            />
            <div className="txt-background">
              <p>
                {
                  ContentData[state.current_section][
                    state.current_subsection
                  ][1]["txt"]
                }
              </p>
            </div>
          </div>
          <div>
            <img
              src={
                ContentData[state.current_section][state.current_subsection][2][
                  "img"
                ]
              }
            />
            <div>
              <p>
                {
                  ContentData[state.current_section][
                    state.current_subsection
                  ][2]["txt"]
                }
              </p>
            </div>
          </div>
          <div>
            <img
              src={
                ContentData[state.current_section][state.current_subsection][3][
                  "img"
                ]
              }
            />
            <p>
              {
                ContentData[state.current_section][state.current_subsection][3][
                  "txt"
                ]
              }
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
