//react dnd
import React from "react";
import { useCallback, useState, useContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
// import { Box } from "./Box";
import Box from "./Box";
import update from "immutability-helper";
import { DndContainer } from "./Layout/DndContainer.styled";
import { WhoAroundBox } from "./WhoAroundBox";
import { MeTreeContext } from "./MeTree";

export default function Container({ hideSourceOnDrag }) {
  const { state, dispatch } = useContext(MeTreeContext);

  const moveBox = useCallback(
    (id, left, top) => {
      dispatch({
        type: "update_boxes",
        newBoxes: update(state.boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      });
    },
    [state.boxes, dispatch]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <DndContainer ref={drop}>
      {Object.keys(state.boxes).map((key) => {
        // console.log("in object.key", state.boxes); WHY SIX TIMES?
        const { left, top, isGrowing } = state.boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            isGrowing={isGrowing}
            growing={state.growing}
            whoAround={state.whoAround}
            hideSourceOnDrag={hideSourceOnDrag}
          ></Box>
        );
      })}
    </DndContainer>
  );
}
