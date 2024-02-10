import React, { useEffect } from "react";
import { useGetReviewsQuery } from "@redux/api/reviewApi";
import { toast } from "react-toastify";

const useFetchReviews = (productId) => {
  const { isLoading, isError, error, data, refetch } = useGetReviewsQuery(
    productId,
    {
      skip: !productId,
    }
  );

  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error(error?.data?.message);
    }
  }, [isError, error, isLoading]);

  return {
    reviews: data?.reviews ? data?.reviews : [],
    isLoading,
    refetch, // You can use refetch to manually trigger the query when needed
  };
};

export default useFetchReviews;
