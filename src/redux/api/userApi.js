import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@utils/ApiUrl";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
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
      query: ({ token, ...passwords }) => (
        console.log(token),
        {
          url: `password/reset/${token}`,
          method: "PUT",
          body: passwords,
        }
      ),
    }),
    updatePassword: builder.mutation({
      query: (passwords) => ({
        url: "password/update",
        method: "PUT",
        body: passwords,
      }),
    }),

    updateMe: builder.mutation({
      query: (userData) => (
        console.log(userData),
        {
          url: "me/update",
          method: "PUT",
          body: userData,
        }
      ),
      
      invalidatesTags: ["user"],
    }),
    me: builder.query({
      query: () => ({
        url: "me",
      }),
      providesTags: ["user"],
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
