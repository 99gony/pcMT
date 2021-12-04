import { Container } from "./style";
import { Divider } from "antd";
import React from "react";
import MainLogin from "./Main";
import SocialLogin from "./Social";

const Login = () => {
  return (
    <Container>
      <MainLogin />
      <Divider
        dashed
        style={{ fontSize: 10, color: "#999999", margin: "8px 0" }}
      >
        소셜 로그인
      </Divider>
      <SocialLogin />
    </Container>
  );
};

export default Login;
