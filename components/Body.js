import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BodyWrapper = styled.div`
  width: 1200px;
  padding: 12px 0;
  margin: 0 auto;
`;

const Body = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>;
};

Body.propTypes = {};

export default Body;
