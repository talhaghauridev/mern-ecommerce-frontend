import { useCreateReviewMutation } from "@redux/api/reviewApi";
import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

const useCreateReview = () => {
  const { productId } = useParams();
  const [review, setReview] = useState({
    rating: null,
    comment: "",
  });

  const [createReview, { data }] = useCreateReviewMutation();

  //Handle Change
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
      console.log(review);
      if (!review.rating || !review.comment) return;
      await createReview({ productId, ...review });
    } catch (err) {
      console.log(err);
    }
  }, [createReview, review, productId]);

  return {
    handelChange,
    review,
    handleSubmitReview,
  };
};

export default useCreateReview;
