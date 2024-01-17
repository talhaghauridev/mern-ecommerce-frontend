import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const server = `${import.meta.env.VITE_SERVER_URL}/api/v1`;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
  }),
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
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = userApi;
