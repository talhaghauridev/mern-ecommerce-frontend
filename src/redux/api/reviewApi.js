import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@utils/ApiUrl";

export const reviewApi = createApi({
  reducerPath: "review",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (review) => ({
        url: "review",
        body: review,
        method: "PUT",
      }),
    }),
    getReviews: builder.query({
      query: () => ({
        url: "review",
        method: "GET",
      }),
    }),

    deleteReview: builder.mutation({
      query: () => ({
        url: "review",
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetReviewsQuery,
  useDeleteReviewMutation,
} = reviewApi;
