import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user.api";

export const server = `${import.meta.env.VITE_SERVER_URL}/api/v1`;

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
});

export default store;
