//react dnd
import React from "react";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
// import { Box } from "./Box";
import Box from "./Box";
import update from "immutability-helper";
import { DndContainer } from "./Layout/DndContainer.styled";
import { WhoAroundBox } from "./WhoAroundBox";

export const Container = ({
  hideSourceOnDrag,
  growing,
  whoAround,
  boxes,
  setBoxes,
}) => {
  // const [boxes, setBoxes] = useState({
  //   a: { top: 20, left: 80, isGrowing: true },
  //   b: { top: 100, left: 80, isGrowing: false },
  // });

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
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
      {Object.keys(boxes).map((key) => {
        console.log("in object.key for growing", boxes);
        const { left, top, isGrowing } = boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            isGrowing={isGrowing}
            growing={growing}
            whoAround={whoAround}
            hideSourceOnDrag={hideSourceOnDrag}
          ></Box>
        );
      })}
    </DndContainer>
  );
};
