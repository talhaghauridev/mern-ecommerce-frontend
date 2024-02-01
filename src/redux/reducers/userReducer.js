import { USER_INFO } from "@constants/index";
import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "@utils/LocalStorage";

const initialState = {
  userInfo: LocalStorage.get(USER_INFO)?.user || null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      LocalStorage.set(USER_INFO, action.payload);
    },
    logout: (state) => {
      state.userInfo = null;
      LocalStorage.remove(USER_INFO);
    },
  },
});

export const { setCredentials, logout } = userReducer.actions;
