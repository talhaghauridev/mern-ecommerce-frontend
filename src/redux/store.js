import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import reducers from "./reducers";

export const server = `${import.meta.env.VITE_SERVER_URL}/api/v1`

export const store = configureStore({
  reducer: reducers,
  middleware: (mid) => [...mid(), userApi.middleware],
});

