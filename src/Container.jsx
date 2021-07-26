//react dnd
import React from "react";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Box } from "./Box";
import update from "immutability-helper";
import {DndContainer} from "./Layout/DndContainer.styled"

export const Container = ({ hideSourceOnDrag, growing }) => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 80, title: "Drag me around" },
    b: { top: 180, left: 20, title: "Drag me too" },
  });
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

    <DndContainer ref={drop} >
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
                top={top}
                 growing={growing}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {/* {title} */}
          </Box>
        );
      })}
            </DndContainer>

  );
};
