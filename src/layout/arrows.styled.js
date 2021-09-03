import styled from "styled-components";
import {
  right_arrow,
  left_arrow,
} from "../images/activitiesImages/InnerContentBackgroundImages";

export const LeftArrow = styled.button`
  background-image: url(${left_arrow});
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  top: 10rem;
  position: absolute;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export const RightArrow = styled.button`
  background-image: url(${right_arrow});
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  z-index: 2;
  cursor: pointer;
  top: 10rem;
  right: 1rem;
  position: absolute;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
