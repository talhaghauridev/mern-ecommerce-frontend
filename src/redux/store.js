import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import reducers from "./reducers";
import { productApi } from "./api/productApi";

export const store = configureStore({
  reducer: reducers,
  middleware: (mid) => [...mid(), userApi.middleware, productApi.middleware],
});
