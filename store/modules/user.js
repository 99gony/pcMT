import { createSlice } from "@reduxjs/toolkit";
import { joinAction, loginAction, logoutAction } from "../action/user";

const initialState = {
  //유저정보
  userInfo: null,

  //로그인
  loginErr: null,

  //로그아웃
  logoutErr: null,

  //회원가입
  joinErr: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    offLoginErr: (state) => {
      state.loginErr = null;
    },
    offLogoutErr: (state) => {
      state.logoutErr = null;
    },
    offJoinErr: (state) => {
      state.joinErr = null;
    },
  },
  extraReducers: (builder) => {
    //로그인
    builder.addCase(loginAction.pending, (state) => {
      state.userInfo = null;
      state.loginErr = null;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loginErr = action.payload;
    });

    //로그아웃
    builder.addCase(logoutAction.pending, (state) => {
      state.logoutErr = null;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.userInfo = null;
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.logoutErr = action.payload;
    });

    //회원가입
    builder.addCase(joinAction.pending, (state) => {
      state.userInfo = null;
      state.joinErr = null;
    });
    builder.addCase(joinAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(joinAction.rejected, (state, action) => {
      state.joinErr = action.payload;
    });
  },
});

export const { offLoginErr, offLogoutErr, offJoinErr } = userSlice.actions;

export default userSlice.reducer;
