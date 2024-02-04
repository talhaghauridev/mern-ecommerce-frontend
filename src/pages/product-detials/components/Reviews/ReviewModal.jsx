import React, { memo, useCallback, useEffect, useMemo } from "react";
import { BackDrop, Button } from "@components/ui";
import { Rating } from "@mui/material";
import useCreateReview from "./../../hooks/useCreateReview";
import cn from "@utils/cn";

const ReviewModal = ({ openModal = false, setOpenModal }) => {
  const {
    handelChange,
    review,
    handleSubmitReview,
    isLoading,
    data,
    isSuccess,
  } = useCreateReview();

  console.log(review, isLoading, data, isSuccess);
  const handleClose = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  const submitButtonLabel = useMemo(() => {
    return isLoading ? "Submitting..." : "Submit";
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && isSuccess && data) {
      handleClose();
    }
  }, [isLoading, isSuccess, data, handleClose]);

  return (
    <div
      className={cn(
        "h-[100vh] fixed w-full z-10 transition-all",
        openModal ? "flex" : "hidden"
      )}
    >
      <BackDrop
        isOpen={openModal}
        className="justify-center items-center transition-all "
        onClick={handleClose}
      />

      <section
        id="reviewModal"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden w-full flex items-center justify-center max-w-[290px] sm:max-w-[350px] h-fit rounded-[5px] "
      >
        <div className="container bg-white px-[20px] py-[25px] flex flex-col gap-[10px]">
          <div className=" flex items-center justify-center  text-[25px]  md:text-[28px]  font-Sans font-bold text-[#222935] w-full max-w-[100%]">
            <h1>Submit Review</h1>
          </div>

          <div className="w-full flex items-center justify-start">
            <Rating
              readOnly={isLoading}
              precision={0.5}
              onChange={handelChange}
              value={review.rating}
              name="rating"
            />
          </div>
          <textarea
            id="rating"
            cols="5"
            rows="4"
            className="w-full h-full border border-solid bottom-[1px] border-[#d3d3d3] rounded-[4px] outline-none py-[10px] px-[15px]"
            placeholder="Enter Your Comment"
            onChange={handelChange}
            value={review.comment}
            name="comment"
            disabled={isLoading}
          />
          <div className="flex items-center justify-end gap-[20px] mt-[15px]">
            <Button
              variants={"outline"}
              size="sm"
              className="text-[#D23F57] bg-white"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              className={isLoading && "opacity-[0.7]"}
              onClick={handleSubmitReview}
              disabled={isLoading}
            >
              {submitButtonLabel}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(ReviewModal);
