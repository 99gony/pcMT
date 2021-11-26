import React from "react";
import PropTypes from "prop-types";
import ChatIntro from "./ChatIntro";
import styled from "styled-components";
import CommunityIntro from "./CommunityIntro";

const IntroWrapper = styled.div`
  height: 570px;
  display: flex;
  justify-content: space-between; ;
`;

const Intro = (props) => {
  return (
    <IntroWrapper>
      <ChatIntro></ChatIntro>
      <CommunityIntro />
      <CommunityIntro />
    </IntroWrapper>
  );
};

Intro.propTypes = {};

export default Intro;
