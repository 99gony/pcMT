import { createSlice } from "@reduxjs/toolkit";
import {
  joinAction,
  loginAction,
  logoutAction,
  toggleAuthAction,
} from "../action/auth";

const initialState = {
  //유저정보
  authInfo: null,

  //로그인
  loginErr: null,
  loginLoading: false,

  //로그아웃
  logoutErr: null,
  logoutLoading: false,

  //회원가입
  joinErr: null,
  joinLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //정보 불러오기
    builder.addCase(toggleAuthAction.fulfilled, (state, action) => {
      state.authInfo = action.payload;
    });

    //로그인
    builder.addCase(loginAction.pending, (state) => {
      state.authInfo = null;
      state.loginErr = null;
      state.loginLoading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loginLoading = false;
      state.authInfo = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loginLoading = false;
      if (action.payload) {
        state.loginErr = action.payload;
      } else {
        state.loginErr =
          "엠티(MT)가 응답하지 않습니다. 잠시 후 다시 시도해주세요.";
      }
    });

    //로그아웃
    builder.addCase(logoutAction.pending, (state) => {
      state.logoutErr = null;
      state.logoutLoading = true;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.logoutLoading = false;
      state.authInfo = null;
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.logoutLoading = false;
      if (action.payload) {
        state.logoutErr = action.payload;
      } else {
        state.logoutErr =
          "엠티(MT)가 응답하지 않습니다. 잠시 후 다시 시도해주세요.";
      }
    });

    //회원가입
    builder.addCase(joinAction.pending, (state) => {
      state.joinErr = null;
      state.joinLoading = true;
    });
    builder.addCase(joinAction.fulfilled, (state, action) => {
      state.joinLoading = false;
      state.authInfo = action.payload;
    });
    builder.addCase(joinAction.rejected, (state, action) => {
      state.joinLoading = false;
      if (action.payload) {
        state.joinErr = action.payload;
      } else {
        state.joinErr =
          "엠티(MT)가 응답하지 않습니다. 잠시 후 다시 시도해주세요.";
      }
    });
  },
});

export const { offLoginErr, offLogoutErr, offJoinErr } = authSlice.actions;

export default authSlice.reducer;
