import styled from "styled-components";

export const Toolkit = styled.div`
  display: flex;
  flex-direction: row;
  // padding: 1rem 1rem 0 1rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding-top: 0;
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
  width: max-content;
  &:hover {
    background-color: #337d8e;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    padding: 0.8%;
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
  @media (max-width: 768px) {
    width: 90vw;
  }
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export const BtnImage = styled.img`
  height: 80px;
  max-width: 80px;
  @media (max-width: 768px) {
    height: 50px;
    max-width: 50px;
  }
`;

export const BinStyle = styled.div`
  height: 12rem;
  width: 12rem;
  color: black;
  padding: 0 1rem;
  text-align: center;

  position: absolute;
  right: 2rem;
  bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 8rem;
    height: 9rem;
  }
  @media (max-width: 600px) {
    width: 7rem;
    height: 7rem;
    font-size: 0;
    left: 2%;
    bottom: -9%;
    padding: 1rem;
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
