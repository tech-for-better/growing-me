import styled from "styled-components";

export const Toolkit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ToolkitButton = styled.button`
  margin-top: 1rem;
  margin-left: 1rem;
  color: #fff;
  border: var(--custom-border);
  background-color: var(--custom-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: var(--custom-border-radius);
  padding: 0.5rem 1rem;
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
`;

export const ToolkitText = styled.p`
  color: #fff;
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
`;

export const MeTreeContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 30rem;
`;

export const BtnImage = styled.img`
  height: 100px;
  max-width: 100px;
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
