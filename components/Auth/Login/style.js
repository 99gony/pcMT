import { Button, Checkbox } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 190px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  div.inputContainer {
    display: flex;
    flex-direction: column;
    margin: 0 4px 6px;
    input {
      border-radius: 5px;
      border: 1px solid #c0c0c0;
      height: 35px;
      padding: 4px 8px;
      font-size: 13px;
      outline: none;
    }

    span.frontErr {
      margin-left: 4px;
      font-size: 11px;
      color: red;
    }
  }

  > span.backErr {
    margin-left: 8px;
    font-size: 12px;
    font-weight: 600;
    color: red;
  }

  div.buttons {
    margin: 8px 0 0 0;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;

export const MainButton = styled(Button)`
  width: 86px;
  height: 32px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
`;

export const CheckBoxWrapper = styled(Checkbox)`
  font-size: 12px;
  color: #5f5f5f;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0 6px;

  span {
    padding: 0 3px;
  }

  .ant-checkbox {
    padding: 0;
  }
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const SocialLoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) => background};
  width: 86px;
  height: 32px;
  gap: 2px;
  border-radius: 6px;
  box-shadow: ${({ google }) =>
    google && " 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)"};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  > span {
    color: ${({ fontColor }) => fontColor};
    font-weight: bold;
    font-size: 14px;
  }
`;
