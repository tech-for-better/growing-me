//react dnd
import React from "react";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Box } from "./Box";
import update from "immutability-helper";
import {DndContainer} from "./Layout/DndContainer.styled";
import { WhoAroundBox } from "./WhoAroundBox";

export const Container = ({ hideSourceOnDrag, growing, whoAround }) => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 80 },
    // b: { top: 180, left: 20, title: "Drag me too" },
  });
    const [whoAroundBoxes, setwhoAroundBoxes] = useState({ b: { top: 100, left: 80 } });
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

    const moveWhoAroundBox = useCallback(
      (id, left, top) => {
        setwhoAroundBoxes(
          update(whoAroundBoxes, {
            [id]: {
              $merge: { left, top },
            },
          })
        );
      },
      [whoAroundBoxes, setwhoAroundBoxes]
    );

const [, drop] = useDrop(
  () => ({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(item.id, left, top);
      moveWhoAroundBox(item.id, left, top);
      return undefined;
    },
  }),
  [moveBox, moveWhoAroundBox]
);

  return (
    <DndContainer ref={drop}>
      {Object.keys(boxes).map((key) => {
        const { left, top } = boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            growing={growing}
            hideSourceOnDrag={hideSourceOnDrag}>

          </Box>
        );
      })}
      {Object.keys(whoAroundBoxes).map((key) => {
        const { left, top } = whoAroundBoxes[key];
        return (
          <WhoAroundBox
            key={key}
            id={key}
            left={left}
            top={top}
            whoAround={whoAround}
            hideSourceOnDrag={hideSourceOnDrag}>
          </WhoAroundBox>
        );
      })}
    </DndContainer>
  );
};
