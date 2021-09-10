import styled from "styled-components";

export const PaletteContainer = styled.div`
  height: 250px;
  width: 20vw;
  border: #337d8e solid;
  border-radius: 20px;
  position: absolute;
  right: 2rem;
  top: 37rem;
  overflow: auto;
  //   display: grid;
  //   grid-template-rows: 1fr;
  @media (max-width: 768px) {
    height: 150px;
    max-width: 25vw;
    right: 2rem;
    top: 25rem;
  }
  @media (max-width: 600px) {
    height: 100px;
    max-width: 25vw;
    left: 29%;
    top: 91%;
    width: 100%;
    margin: 1rem;
  }
`;

export const PaletteImg = styled.img`
  width: 80%;
  height: 80%;
`;

export const PaletteBtn = styled.button`
  border: solid #337d8e 1px;
  background: #fff8e2;
  height: 100%;
  width: 100%;

  &:hover {
    background-color: #fee79b;
    transform: scale(1.05);

`;

// COLOURS
// d6f7d - darkblue
// e8eedf - palegrey
// daac2f - orangey
// a5cfe4 - paleblue
// 94b3c5 - duskyblue
// 3d4726 - darkgreenS
// 826521- brown
// ecf0d9- palegreen
// acabb3 - grey
// 67bcce - turquoiseblue
//#fff8e2;- pale yellow
