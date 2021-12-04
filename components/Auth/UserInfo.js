import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/action/auth";
import { useRouter } from "next/router";
import { serverAPI } from "../../store/action/config";

const UserInfo = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authInfo = useSelector((state) => state.auth.authInfo);
  const logoutErr = useSelector((state) => state.auth.logoutErr);

  const onLogout = useCallback(async () => {
    if (authInfo.provider === "kakao") {
      return router.push({
        pathname: "https://kauth.kakao.com/oauth/logout",
        query: {
          client_id: process.env.NEXT_PUBLIC_KAKAO_ID,
          logout_redirect_uri: `${serverAPI}/auth/logout`,
        },
      });
    }
    dispatch(logoutAction());
  }, [authInfo]);

  useEffect(() => {
    if (
      !(
        authInfo?.nickname &&
        authInfo.mbti &&
        authInfo.gender &&
        authInfo.character
      )
    ) {
      router.replace("/join");
    }
  }, [authInfo]);

  useEffect(() => {
    if (logoutErr) {
      alert(logoutErr);
    }
  }, [logoutErr]);

  return (
    <div>
      <span>{authInfo.nickname}</span>
      로그인 되었습니다.
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};

export default UserInfo;
