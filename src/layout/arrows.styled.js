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
  top: 16rem;
  left: 1rem;
  position: absolute;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  @media only screen and (min-width: 768px) {
    top: 9rem;
    left: -3rem;
  }
  @media only screen and (max-width: 600px) {
    top: 9rem;
    left: -2.5rem;
    width: 25px;
    height: 50px;
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
  top: 16rem;
  right: 0rem;
  position: absolute;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  @media only screen and (min-width: 768px) {
    top: 9rem;
    right: -4rem;
  }
  @media only screen and (max-width: 600px) {
    top: 9rem;
    right: -2.5rem;
    width: 25px;
    height: 50px;
  }
`;
