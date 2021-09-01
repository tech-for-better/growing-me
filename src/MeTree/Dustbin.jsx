import React from "react";
import { useContext, useCallback } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import bin from "/assets/icomoon-free_bin.svg";
import { MeTreeContext } from "../App";
import update from "immutability-helper";

const binStyle = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "black",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};

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
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div
      className="absolute"
      ref={drop}
      role={"Dustbin"}
      style={{ ...binStyle, backgroundColor }}
    >
      <img src={bin} alt="bin" />
      {isActive ? "Release to delete" : "Drag item to be deleted here"}
    </div>
  );
};
