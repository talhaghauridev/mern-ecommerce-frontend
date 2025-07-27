import { USER_INFO_KEY, TOKEN } from "@/constants/index";
import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "@/utils/LocalStorage";

const initialState = {
  userInfo: LocalStorage.get(USER_INFO_KEY) || null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload?.user;
      LocalStorage.set(USER_INFO_KEY, action.payload?.user);
      LocalStorage.set(TOKEN, action.payload?.token);
    },
    logout: (state) => {
      state.userInfo = null;
      LocalStorage.remove(USER_INFO_KEY);
      LocalStorage.remove(TOKEN);
    },
  },
});

export const { setCredentials, logout } = userReducer.actions;
