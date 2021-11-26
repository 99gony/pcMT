import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CountUp from "react-countup";

const ChatIntroWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  padding: 24px 12px;
  background-color: #fafafa;
`;

const ChatsWrapper = styled.h2`
  width: fit-content;
  background-color: ${({ background }) => background};
  color: white;
  font-size: 21px;
  padding: 7px 16px;
  border-radius: 2px 24px 24px 24px;
  margin-bottom: 6px;
  align-self: flex-start;
`;

const TitleWrapper = styled.div`
  margin-bottom: 36px;
`;

const ChatIntro = (props) => {
  return (
    <ChatIntroWrapper>
      <TitleWrapper>
        <h2>#심심할 때</h2>
        <h2>#대화가 필요할 때</h2>
      </TitleWrapper>
      <ChatsWrapper background="rgb(65, 126, 191)">원하는</ChatsWrapper>
      <ChatsWrapper background="rgb(210, 45, 87)">MBTI 유형과</ChatsWrapper>
      <ChatsWrapper background="rgb(128, 182, 68)">성별을 골라</ChatsWrapper>
      <ChatsWrapper background="rgb(235, 173, 60)">채팅해보자!</ChatsWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: 21,
          fontWeight: "bold",
        }}
      >
        <span>지금까지</span>
        <CountUp start={0} end={160537} delay={0} duration={1} separator=",">
          {({ countUpRef }) => (
            <div>
              <span style={{ fontSize: 32 }} ref={countUpRef} />
              <span>번</span>
            </div>
          )}
        </CountUp>
        <span>매칭 되었어요</span>
      </div>
    </ChatIntroWrapper>
  );
};

ChatIntro.propTypes = {};

export default ChatIntro;
