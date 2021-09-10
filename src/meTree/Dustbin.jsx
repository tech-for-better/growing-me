import React from "react";
import { useContext, useCallback } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { bin } from "./../images/MeTreeImages";
import { MeTreeContext } from "../App";
import update from "immutability-helper";
import { BinStyle } from "../layout/MeTree.styled";

export const Dustbin = () => {
  const { state, setState } = useContext(MeTreeContext);
  console.log("state in dustbin", state);
  const handleDrop = useCallback(
    (id, left, top) => {
      console.log("before delete", state.data.tree.boxes);
      delete state.data.tree.boxes[id.id];
      // fake setState to trigger re-render
      setState({
        tree: {
          boxes: { ...state.data.tree.boxes },
        },
      });
      console.log("after delete", state.data.tree.boxes);
    },
    [(state.data.tree.boxes, setState)]
  );

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item) => {
      ({ name: "Dustbin" });
      handleDrop(item);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "";
  if (isActive) {
    // backgroundColor = "darkgreen";
    // backgroundColor = "#cc492f";
    backgroundColor = "#d66d59";
  } else if (canDrop) {
    // backgroundColor = "darkkhaki";
    backgroundColor = "#b4bdc1";
  }

  return (
    <BinStyle ref={drop} role={"Dustbin"} style={{ backgroundColor }}>
      <img src={bin} alt="bin" style={{ width: "100%" }} />
      {isActive ? "Release to delete" : "Drag item to be deleted here"}
    </BinStyle>
  );
};
