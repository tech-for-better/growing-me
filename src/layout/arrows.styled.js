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
  @media only screen and (max-width: 600px) {
    top: 40%;
    left: -15%;
    width: 10%;
    height: 10%;
  }
  @media only screen and (min-width: 600px) {
    top: 40%;
    left: -10%;
    width: 10%;
    height: 10%;
  }
  @media only screen and (min-width: 768px) {
    top: 40%;
    left: -12%;
    width: 12%;
    height: 12%;
  }
  @media only screen and (min-width: 992px) {
    top: 40%;
    left: -12%;
    width: 13%;
    height: 13%;
  }
  @media only screen and (min-width: 1200px) {
    top: 40%;
    left: -13%;
    width: 13%;
    height: 13%;
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
  @media only screen and (max-width: 600px) {
    top: 40%;
    right: -15%;
    width: 10%;
    height: 10%;
  }
  @media only screen and (min-width: 600px) {
    top: 40%;
    right: -14%;
    width: 10%;
    height: 10%;
  }
  @media only screen and (min-width: 768px) {
    top: 40%;
    right: -18%;
    width: 12%;
    height: 12%;
  }
  @media only screen and (min-width: 992px) {
    top: 40%;
    right: -19%;
    width: 13%;
    height: 13%;
  }
  @media only screen and (min-width: 1200px) {
    top: 40%;
    right: -20%;
    width: 13%;
    height: 13%;
  }
`;
