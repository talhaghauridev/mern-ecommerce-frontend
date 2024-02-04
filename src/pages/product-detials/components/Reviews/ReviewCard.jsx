import React, { memo } from "react";
import { Rating } from "@mui/material";
import formatDate from "@utils/formatDate";

const ReviewCard = ({ name, comment, rating, createdAt }) => {
  return (
    <div className="flex flex-col gap-[5px] py-[20px] md:py-[30px]  border-solid max-w-[1000px] border-b-[#eddeded] border-b-[1px] w-full ">
      <div className="flex flex-col gap-[2px]">
        <span className="block font-bold font-Poppins text-[16px] md:text-[18px]">{name}</span>
        <span className="block text-gray-500 text-[14px]">
          {createdAt ? formatDate(createdAt) : "August 28, 2021"}
        </span>
      </div>

      <Rating precision={0.5} value={rating} readOnly size="medium" />
      <p className="text-gray-600 text-[15px] sm:text-[16px] mt-[5px] font-Poppins">{comment}</p>
    </div>
  );
};

export default memo(ReviewCard);


