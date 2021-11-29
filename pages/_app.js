import React from "react";
import { createGlobalStyle } from "styled-components";
import { wrapper } from "../store";

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

export default wrapper.withRedux(App);
