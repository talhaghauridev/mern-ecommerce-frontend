import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@utils/ApiUrl";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    sendPayment: builder.mutation({
      query: (items) => ({
        url: "/checkout",
        body: {items},
        method: "POST",
      }),
    }),
  }),
});

export const { useSendPaymentMutation } = paymentApi;
