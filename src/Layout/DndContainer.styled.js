import styled from "styled-components";

export const DndContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: 1px solid pink;
  position: absolute;
  z-index: 100;
`;

export const DraggableImageStyle = styled.img`
  position: absolute;
  padding: 0.5rem 1rem;
  cursor: move;
  width: 100px;
`;
