import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@utils/ApiUrl";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (review) => (
        console.log(review),
        {
          url: "review",
          body: review,
          method: "PUT",
        }
      ),
      invalidatesTags: (result, error, {productId}) => [{ type: "product", id:productId }],
    }),
    getReviews: builder.query({
      query: () => ({
        url: "review",
        method: "GET",
      }),
      providesTags:["Reviews"]
    }),

    deleteReview: builder.mutation({
      query: () => ({
        url: "review",
        method: "PATCH",
      }),
      invalidatesTags: (result, error, { reviewId }) => [{ type: "Reviews", id: reviewId }],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetReviewsQuery,
  useDeleteReviewMutation,
} = reviewApi;
