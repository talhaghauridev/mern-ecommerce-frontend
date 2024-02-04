import { USER_INFO_KEY } from "@constants/index";
import { useGetProductDetailsQuery } from "@redux/api/productApi";
import { useCreateReviewMutation } from "@redux/api/reviewApi";
import LocalStorage from "@utils/LocalStorage";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const checkReview = (product) => {
  const user = LocalStorage.get(USER_INFO_KEY);
  const userReview = product?.reviews?.find((r) => r?.user === user?._id);
  return userReview;
};

const useCreateReview = () => {
  const { productId } = useParams();

  const [review, setReview] = useState({
    rating: null,
    comment: "",
  });

  const { refetch: refetchProductDetails, data: productDetailData } =
    useGetProductDetailsQuery(productId);

  const [createReview, { isLoading, isError, error, isSuccess, data }] =
    useCreateReviewMutation();

  // Memoized functions
  const handelChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const newValue = name === "comment" ? String(value) : Number(value);
      setReview((prev) => ({ ...prev, [name]: newValue }));
    },
    [setReview]
  );

  const handleSubmitReview = useCallback(async () => {
    try {
      if (!review.rating || !review.comment) return;
      await createReview({ productId, ...review });
      await refetchProductDetails();
    } catch (err) {
      console.log(err);
    }
  }, [createReview, review, productId, refetchProductDetails]);

  useEffect(() => {
    const userReview = checkReview(productDetailData?.product);
    if (userReview) {
      const { rating, comment } = userReview;
      setReview({ rating, comment });
    } else {
      setReview({ rating: null, comment: "" });
    }
  }, [productDetailData?.product]);

  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error(error?.data?.message);
    }
  }, [isError, error, isLoading]);

  return {
    handelChange,
    review,
    handleSubmitReview,
    isLoading,
    isSuccess,
    data,
  };
};

export default useCreateReview;
