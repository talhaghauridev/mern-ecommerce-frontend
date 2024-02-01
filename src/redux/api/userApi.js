import { USER_INFO } from "@constants/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import LocalStorage from "@utils/LocalStorage";

export const server = `${import.meta.env.VITE_SERVER_URL}/api/v1`;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/`,
    prepareHeaders: (headers, {}) => {
      console.log(headers);
      const token = LocalStorage.get(USER_INFO)?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // You can also set other headers here
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
    }),

    signup: builder.mutation({
      query: (user) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: "logout",
      }),
    }),

    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "password/forgot",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, ...passwords }) => ({
        url: `password/reset/${token}`,
        method: "PUT",
        body: passwords,
      }),
    }),
    updatePassword: builder.mutation({
      query: (passwords) => ({
        url: "password/update",
        method: "PUT",
        body: passwords,
      }),
    }),

    updateMe: builder.mutation({
      query: (userDta) => ({
        url: "me/update",
        method: "PUT",
        body: userDta,
      }),
    }),
    me: builder.query({
      query: () => ({
        url: "me",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useMeQuery,
  useUpdateMeMutation,
  useUpdatePasswordMutation,

  useLogoutQuery,
} = userApi;
