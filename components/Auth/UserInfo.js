import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/action/auth";

const UserInfo = (props) => {
  const dispatch = useDispatch();
  const authInfo = useSelector((state) => state.auth.authInfo);
  const logoutErr = useSelector((state) => state.auth.logoutErr);

  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <div>
      <span>{authInfo.nickname}</span>
      로그인 되었습니다.
      {logoutErr && <span>{logoutErr}</span>}
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
