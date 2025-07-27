import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/utils/ApiUrl";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    sendPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/checkout",
        body: paymentData,
        method: "POST",
      }),
    }),
  }),
});

export const { useSendPaymentMutation } = paymentApi;
