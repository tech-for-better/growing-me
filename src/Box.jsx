//react dnd
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { DraggableImageStyle } from "./Layout/DndContainer.styled";

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

      // item: { name },
      // end: (item, monitor) => {
      //   const dropResult = monitor.getDropResult();
      //   if (item && dropResult) {
      //     // alert(`You dropped ${item.src} into the bin!`);
      //   }
      // },

      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        // handlerId: monitor.getHandlerId(),
      }),
    }),
    [id, left, top, src]
  );
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <DraggableImageStyle
      ref={drag}
      style={{ left, top }}
      role="Box"
      src={src}
          >
      {children}
    </DraggableImageStyle>
  );
}
