import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/action/user";

const UserInfo = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <div>
      <span>{userInfo.nickname}</span>
      로그인 되었습니다.
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
