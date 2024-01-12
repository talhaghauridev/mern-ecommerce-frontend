import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../store";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${server}` }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    signup: builder.mutation({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = userApi;
