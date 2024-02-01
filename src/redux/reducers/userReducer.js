import { USER_INFO,TOKEN } from "@constants/index";
import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "@utils/LocalStorage";

const initialState = {
  userInfo: LocalStorage.get(USER_INFO) || null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload?.user;
      LocalStorage.set(USER_INFO, action.payload?.user);
      LocalStorage.set(TOKEN, action.payload?.token);
    },
    logout: (state) => {
      state.userInfo = null;
      LocalStorage.remove(USER_INFO);
      LocalStorage.remove(TOKEN);

    },
  },
});

export const { setCredentials, logout } = userReducer.actions;
