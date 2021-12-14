import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../store/action/auth";
import { CheckBoxWrapper, LoginForm, MainButton } from "./style";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";

const MainLogin = () => {
  const dispatch = useDispatch();
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const loginErr = useSelector((state) => state.auth.loginErr);
  const loginLoading = useSelector((state) => state.auth.loginLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    (data) => {
      if (!loginLoading) {
        dispatch(loginAction({ ...data, isAutoLogin }));
      }
    },
    [isAutoLogin, loginLoading]
  );

  const onChangeAutoLogin = useCallback((e) => {
    setIsAutoLogin(e.target.checked);
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
        {errors.email && (
          <span className="frontErr">이메일 형식에 맞게 입력해주세요.</span>
        )}
      </div>

      <div className="inputContainer">
        <input
          placeholder="비밀번호"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="frontErr">비밀번호를 입력해주세요.</span>
        )}
      </div>
      <CheckBoxWrapper onChange={onChangeAutoLogin}>
        로그인 유지
      </CheckBoxWrapper>
      {loginErr && <span className="backErr">{loginErr}</span>}
      <div className="buttons">
        <MainButton htmlType="submit">
          {loginLoading ? <LoadingOutlined /> : "로그인"}
        </MainButton>
        <Link href="/join">
          <a>
            <MainButton type="primary">회원가입</MainButton>
          </a>
        </Link>
      </div>
    </LoginForm>
  );
};

export default MainLogin;
