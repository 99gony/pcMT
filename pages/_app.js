import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { wrapper } from "../store";
import { toggleAuthAction } from "../store/action/auth";

const GlobalStyled = createGlobalStyle`
  *{
    padding:0;
    margin:0;
  }
`;

const App = ({ Component }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleAuthAction());
  }, []);

  return (
    <>
      <GlobalStyled />
      <Component />
    </>
  );
};

export default wrapper.withRedux(App);
