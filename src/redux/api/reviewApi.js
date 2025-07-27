import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/utils/ApiUrl";

export const reviewApi = createApi({
   reducerPath: "reviewApi",
   baseQuery: baseQuery,
   endpoints: (builder) => ({
      createReview: builder.mutation({
         query: (review) => ({
            url: "review",
            body: review,
            method: "PUT"
         }),
         invalidatesTags: (result, error, { productId }) => [{ type: "product", id: productId }]
      }),
      getReviews: builder.query({
         query: (productId) => ({
            url: `reviews?productId=${productId}`
         }),
         providesTags: ["reviews"]
      }),

      deleteReview: builder.mutation({
         query: ({ productId, id }) => ({
            url: `reviews?productId=${productId}&_id=${id}`,
            method: "PATCH"
         }),
         invalidatesTags: (result, error, { reviewId }) => [{ type: "reviews", id: reviewId }]
      })
   })
});

export const { useCreateReviewMutation, useGetReviewsQuery, useDeleteReviewMutation } = reviewApi;
