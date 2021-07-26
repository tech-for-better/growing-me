//react dnd
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import {DraggableImageStyle} from "./Layout/DndContainer.styled"

export const Box = ({ id, left, top, hideSourceOnDrag, children , growing}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
      <DraggableImageStyle ref={drag}
          style={{ left, top }}
          role="Box" src={growing}>
      {children}
    </DraggableImageStyle>
  );
};
