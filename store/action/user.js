import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverAPI } from "./server";

export const loginAction = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post(serverAPI + "/user/login", data);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutAction = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get(serverAPI + "/user/logout");
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const joinAction = createAsyncThunk(
  "user/join",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post(serverAPI + "/user/join", data);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
