import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import reducers from "./reducers";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productApi } from "./api/productApi";
export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/`,
  prepareHeaders: (headers, {}) => {
    console.log(headers);
    const token = "hello";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    // You can also set other headers here
    headers.set("Content-Type", "application/json");

    return headers;
  },
});

export const store = configureStore({
  reducer: reducers,
  middleware: (mid) => [...mid(), userApi.middleware, productApi.middleware],
});
