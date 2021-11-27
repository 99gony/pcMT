import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

const CommunityIntroWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  padding: 24px 12px;
  background-color: #fafafa;
`;

const CommunityIntro = (props) => {
  return (
    <CommunityIntroWrapper>
      <Link href="/community">
        <a>커뮤니티</a>
      </Link>
    </CommunityIntroWrapper>
  );
};

CommunityIntro.propTypes = {};

export default CommunityIntro;
