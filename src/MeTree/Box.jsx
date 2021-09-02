//react dnd
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { DraggableImageStyle } from "../layout/DndContainer.styled";

export default function Box({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
  // isGrowing,
  src,
}) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, src },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, src]
  );
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <DraggableImageStyle ref={drag} style={{ left, top }} role="Box" src={src}>
      {children}
    </DraggableImageStyle>
  );
}
