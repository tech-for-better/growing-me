import styled from "styled-components";

export const Toolkit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0 1rem;
  @media (max-width: 768px) {
    flex-direction: row;
    position: fixed;
    bottom: 0;
    z-index: 4000;
    width: 100vw;
    justify-content: space-around;
    overflow: scroll;
    margin: 0rem;
  }
`;

export const ToolkitButton = styled.button`
  margin-top: 1rem;
  margin-left: 1rem;
  color: #fff;
  border: var(--custom-border);
  background-color: var(--custom-bg-color);
  display: flex;
  padding: 0.3rem 1rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: var(--custom-border-radius);
  cursor: pointer;
  text-align: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  max-width: 10rem;
  &:hover {
    background-color: #337d8e;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    margin-left: 0.1rem;
    max-width: 3.5rem;
  }
`;
// padding: 0.5rem 1rem;

export const ToolkitText = styled.p`
  color: #fff;
  padding: 0;
  margin: 0.2rem 0.1rem;
  @media (max-width: 768px) {
    margin: 0;
    font-size: 1rem;
  }
`;

export const MeTreeImage = styled.img`
  height: 50vh;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

export const MeTreeBackground = styled.img`
  height: 80%;
  width: 90%;
  padding: 2rem;
  position: absolute;
  z-index: 1;
  background-size: cover;
  left: 5%;
  top: 8%;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

export const MeTreeContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 30rem;
`;

export const BtnImage = styled.img`
  height: 100px;
  max-width: 100px;
  @media (max-width: 768px) {
    height: 50px;
    max-width: 50px;
  }
`;

// COLOURS
// d6f7d - darkblue
// e8eedf - palegrey
// daac2f - orangey
// a5cfe4 - paleblue
// 94b3c5 - duskyblue
// 3d4726 - darkgreen
// 826521- brown
// ecf0d9- palegreen
// acabb3 - grey
// 67bcce - turquoiseblue
