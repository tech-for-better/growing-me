//react dnd
import React from "react";
import { useCallback, useState, useContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import Box from "./Box";
import update from "immutability-helper";
import { DndContainer } from "./Layout/DndContainer.styled";
// import { MeTreeContext } from "./MeTree";
import { MeTreeContext } from "./App";

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
    },
    [(state.data.tree?.boxes, setState)]
  );

//   const moveBox = () => {
//     (id, left, top) => {
//       setState({
//         tree: {
//           boxes: update(state.data.tree.boxes, {
//             [id]: {
//               $merge: { left, top },
//             },
//           }),
//         },
//       });
//     },
//       [(state.data.tree.boxes, setState)];
// }


  // console.log("CONTAINER: state.data.tree?.boxes ", state.data.tree.boxes);

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
      {Object.keys(state.data.tree?.boxes || {}).map((key) => {
        console.log("CONTAINER: in object.key", state.data.tree.boxes); //WHY SIX TIMES? - NOW TWICE
        const { left, top, isGrowing } = state.data.tree.boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            isGrowing={isGrowing}
            growing={state.data.tree.growing}
            whoAround={state.data.tree.who_around}
            hideSourceOnDrag={hideSourceOnDrag}
          ></Box>
        );
      })}
    </DndContainer>
  );
}
