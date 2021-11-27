import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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
      height: 27px;
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

  div.buttons {
    margin: 6px;
    display: flex;
    justify-content: space-between;
    gap: 6px;

    button {
      cursor: pointer;
      flex: 1;
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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
      <div className="buttons">
        <button type="submit">로그인</button>
        <button type="button">회원가입</button>
      </div>
      <div className="social">
        <button type="button">구글로 로그인</button>
        <button type="button">카카오로 로그인</button>
      </div>
    </LoginForm>
  );
};

export default Login;
