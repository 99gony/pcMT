import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyled = createGlobalStyle`
  *{
    padding:0;
    margin:0;
  }
`;

const App = ({ Component }) => {
  return (
    <>
      <GlobalStyled />
      <Component />
    </>
  );
};

export default App;
