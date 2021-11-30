import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverAPI } from "./config";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const toggleAuthAction = createAsyncThunk("auth", async () => {
  const result = await axios.get(serverAPI + "/auth");
  return result.data;
});

export const loginAction = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post(serverAPI + "/auth/login", data);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get(serverAPI + "/auth/logout");
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const joinAction = createAsyncThunk(
  "auth/join",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post(serverAPI + "/auth/join", data);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
