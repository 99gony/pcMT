import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { joinAction } from "../../store/action/user";
import { useRouter } from "next/router";
import { offJoinErr } from "../../store/modules/user";

const Join = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const joinErr = useSelector((state) => state.user.joinErr);
  const userInfo = useSelector((state) => state.user.userInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef("");
  password.current = watch("password", "");

  const onSubmit = useCallback((data) => {
    dispatch(joinAction(data));
  }, []);

  useEffect(() => {
    if (joinErr) {
      alert(joinErr);
      dispatch(offJoinErr());
    }
  }, [joinErr]);

  useEffect(() => {
    if (userInfo) {
      router.replace("/");
    }
  }, [userInfo]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputContainer">
        <input
          placeholder="닉네임"
          autoComplete="off"
          {...register("nickname", { required: true })}
        />
        {errors.nickname && <span>닉네임을 입력해주세요.</span>}
      </div>

      <div className="inputContainer">
        <input
          placeholder="나의 MBTI"
          autoComplete="off"
          {...register("mbti", { required: true })}
        />
        {errors.mbti && <span>MBTI 성격유형을 입력해주세요.</span>}
      </div>

      <div className="inputContainer">
        <input
          placeholder="성별"
          autoComplete="off"
          {...register("gender", { required: true })}
        />
        {errors.gender && <span>성별을 입력해주세요.</span>}
      </div>

      <div className="inputContainer">
        <input
          placeholder="캐릭터"
          autoComplete="off"
          {...register("character", { required: true })}
        />
        {errors.character && <span>캐릭터를 입력해주세요.</span>}
      </div>

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
          {...register("password", {
            required: true,
            pattern: /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{5,15}$/,
          })}
        />
        {errors.password && (
          <span>
            문자, 숫자를 조합하여 최소 6자 이상, 15자 이하로 입력해주세요.
          </span>
        )}
      </div>

      <div className="inputContainer">
        <input
          placeholder="비밀번호 재확인"
          type="password"
          {...register("re_password", {
            required: true,
            validate: (value) =>
              value === password.current ||
              "입력한 비밀번호가 일치하지 않습니다.",
          })}
        />
        {errors.re_password && <span>{errors.re_password.message}</span>}
      </div>
      <button>제출</button>
    </form>
  );
};

Join.propTypes = {};

export default Join;
