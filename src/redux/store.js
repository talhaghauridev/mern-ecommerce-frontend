import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import reducers from "./reducers";
import { productApi } from "./api/productApi";
import { reviewApi } from "./api/reviewApi";
import { paymentApi } from "./api/paymentApi";
import { orderApi } from "./api/orderApi";

export const store = configureStore({
  reducer: reducers,
  middleware: (mid) => [
    ...mid(),
    userApi.middleware,
    productApi.middleware,
    reviewApi.middleware,
    paymentApi.middleware,
    orderApi.middleware,
  ],
});
