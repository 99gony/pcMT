import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ChatIntroWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  padding: 24px 12px;
  background-color: #fafafa;
`;

const CommunityIntro = (props) => {
  return <ChatIntroWrapper></ChatIntroWrapper>;
};

CommunityIntro.propTypes = {};

export default CommunityIntro;
