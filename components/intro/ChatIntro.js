import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CountUp from "react-countup";
import Link from "next/link";

const ChatIntroWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid gray;
  padding: 24px;
  background-color: #fafafa;
`;

const ChatsWrapper = styled.h2`
  width: fit-content;
  background-color: ${({ background }) => background};
  color: white;
  font-size: 21px;
  font-weight: bold;
  height: 46px;
  padding: 8px 16px;
  border-radius: ${({ alignEnd }) =>
    alignEnd ? "24px 3px 24px 24px" : "3px 24px 24px 24px"};
  margin-bottom: 6px;
  align-self: ${({ alignEnd }) => (alignEnd ? "flex-end" : "flex-start")};
`;

const ChatsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const MatchTimesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const ChatIntro = (props) => {
  return (
    <ChatIntroWrapper>
      <div>
        <h2>#심심할 때</h2>
        <h2>#대화가 필요할 때</h2>
      </div>
      <ChatsContainer>
        <ChatsWrapper background="rgb(65, 126, 191)">원하는</ChatsWrapper>
        <ChatsWrapper background="rgb(210, 45, 87)" alignEnd={true}>
          MBTI 유형과
        </ChatsWrapper>
        <ChatsWrapper background="rgb(128, 182, 68)">성별을 골라</ChatsWrapper>
        <ChatsWrapper background="rgb(235, 173, 60)" alignEnd={true}>
          채팅해보자!
        </ChatsWrapper>
      </ChatsContainer>

      <Link href="/chat">
        <a>
          <h2>채팅하러 가기</h2>
        </a>
      </Link>
      <MatchTimesWrapper>
        <span>지금까지</span>
        <CountUp start={0} end={160537} delay={0} duration={1} separator=",">
          {({ countUpRef }) => (
            <div>
              <span style={{ fontSize: 32 }} ref={countUpRef} />
              <span>번</span>
            </div>
          )}
        </CountUp>
        <span>매칭이 이루어졌어요.</span>
      </MatchTimesWrapper>
    </ChatIntroWrapper>
  );
};

ChatIntro.propTypes = {};

export default ChatIntro;
