//react dnd
import React from "react";
import { useCallback, useContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import Box from "./Box";
import update from "immutability-helper";
import { DndContainer } from "../layout/DndContainer.styled";
import { MeTreeContext } from "../App";

export default function Container({ hideSourceOnDrag }) {
  const { state, setState } = useContext(MeTreeContext);
  console.log("STATE in container", state);

  const moveBox = useCallback(
    (id, left, top) => {
      console.log("move box :state.data.tree.boxes", state.data.tree.boxes);
      setState({
        tree: {
          boxes: update(state.data.tree.boxes, {
            [id]: {
              $merge: { left, top },
            },
          }),
        },
      });
      console.log("move box id", id);
    },
    [(state.data.tree.boxes, setState)]
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
    <>
      <DndContainer ref={drop}>
        {Object.keys(state.data.tree?.boxes || {}).map((key) => {
          console.log("CONTAINER: in object.key", state.data.tree.boxes);
          const { left, top, isGrowing, src } = state.data.tree.boxes[key];
          return (
            <Box
              key={key}
              id={key}
              left={left}
              top={top}
              isGrowing={isGrowing}
              src={src}
              hideSourceOnDrag={hideSourceOnDrag}
            />
          );
        })}
      </DndContainer>
    </>
  );
}
