import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import { loginAction } from "../../store/action/auth";
import { LoadingOutlined } from "@ant-design/icons";
import { serverAPI } from "../../store/action/config";

const Login = () => {
  const dispatch = useDispatch();
  const loginErr = useSelector((state) => state.auth.loginErr);
  const loginLoading = useSelector((state) => state.auth.loginLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback((data) => {
    if (!loginLoading) {
      dispatch(loginAction(data));
    }
  }, []);

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <div className="inputContainer">
        <input
          placeholder="이메일"
          autoComplete="off"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && <span>이메일 형식에 맞게 입력해주세요.</span>}
      </div>

      <div className="inputContainer">
        <input
          placeholder="비밀번호"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>비밀번호를 입력해주세요.</span>}
      </div>
      {loginErr && <span>{loginErr}</span>}
      <div className="buttons">
        <button type="submit">
          {loginLoading ? <LoadingOutlined /> : "로그인"}
        </button>
        <Link href="/join">
          <a>
            <button type="button">회원가입</button>
          </a>
        </Link>
      </div>

      <div className="social">
        <Link href={`${serverAPI}/auth/facebook`}>
          <a>
            <button type="button">페이스북으로 로그인</button>
          </a>
        </Link>
        <Link href={`${serverAPI}/auth/naver`}>
          <a>
            <button type="button">네이버로 로그인</button>
          </a>
        </Link>
        <Link href={`${serverAPI}/auth/google`}>
          <a>
            <button type="button">구글로 로그인</button>
          </a>
        </Link>
        <Link href={`${serverAPI}/auth/kakao`}>
          <a>
            <button type="button">카카오로 로그인</button>
          </a>
        </Link>
      </div>
    </LoginForm>
  );
};

const LoginForm = styled.form`
  width: 190px;
  display: flex;
  flex-direction: column;

  div.inputContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
    input {
      border-radius: 24px 2px 24px 24px;
      border: 1px solid #c0c0c0;
      height: 36px;
      padding: 4px 12px;
    }
    :first-child {
      input {
        border-radius: 24px 24px 2px 24px;
      }
    }

    span {
      margin-left: 4px;
      font-size: 11px;
      color: red;
    }
  }

  > span {
    margin-left: 8px;
    font-size: 12px;
    font-weight: 600;
    color: red;
  }

  div.buttons {
    margin: 6px;
    display: flex;
    justify-content: space-between;
    gap: 6px;

    button {
      cursor: pointer;
      height: 32px;
      border-radius: 8px;
      border: 1px solid #c0c0c0;
    }
  }

  div.social {
    margin: 6px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      height: 32px;
    }
  }
`;

export default Login;
