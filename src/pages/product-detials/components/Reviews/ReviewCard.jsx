import React, { memo } from "react";
import { Rating } from "@mui/material";

const ReviewCard = ({ name, comment, rating }) => {
  return (
    <div className="flex flex-col gap-3 py-[10px] md:py-[20px] border-b-[1px] border-solid max-w-[1000px] ">
      <div>
        <span className="block text-sm font-bold">{name}</span>
        <span className="block text-sm text-gray-500">August 28, 2021</span>
      </div>

      <Rating precision={0.5} value={rating} readOnly size="medium" />
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

export default memo(ReviewCard);
