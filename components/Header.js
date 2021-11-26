import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 50px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;

  > div {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <div>
        <div>로고이미지 && 엠티</div>
        <div>채팅아이콘 | 게시판 아이콘 | 내정보 아이콘</div>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {};

export default Header;
