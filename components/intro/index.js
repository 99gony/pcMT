import React, { useState } from "react";
import PropTypes from "prop-types";
import ChatIntro from "./ChatIntro";
import styled from "styled-components";
import CommunityIntro from "./CommunityIntro";
import Login from "../Auth/Login";

const IntroWrapper = styled.div`
  height: 570px;
  display: flex;
  justify-content: space-between; ;
`;

const Intro = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <IntroWrapper>
      <ChatIntro></ChatIntro>
      <CommunityIntro />
      {isLoggedIn ? <div>로그인되었습니다.</div> : <Login />}
    </IntroWrapper>
  );
};

Intro.propTypes = {};

export default Intro;
