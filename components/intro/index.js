import React from "react";
import PropTypes from "prop-types";
import ChatIntro from "./ChatIntro";
import styled from "styled-components";
import CommunityIntro from "./CommunityIntro";
import Login from "../Auth/Login";
import { useSelector } from "react-redux";
import UserInfo from "../Auth/UserInfo";

const IntroWrapper = styled.div`
  height: 570px;
  display: flex;
  justify-content: space-between; ;
`;

const Intro = (props) => {
  const authInfo = useSelector((state) => state.auth.authInfo);
  return (
    <IntroWrapper>
      <ChatIntro></ChatIntro>
      <CommunityIntro />
      {authInfo ? <UserInfo /> : <Login />}
    </IntroWrapper>
  );
};

Intro.propTypes = {};

export default Intro;
