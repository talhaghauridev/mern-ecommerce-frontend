// ProductCard.jsx
import { Rating, capitalize } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@components/ui";
import { hero } from "@assets/images";

const ProductCard = ( product ) => {
  const { _id, name, images, price, ratings, numOfReviews } = product;

  return (
    <Link
      to={`/product/${_id}`}
      className="flex items-center justify-center flex-col relative overflow-hidden gap-[6px] bg-white rounded-md shadow-md pb-[5px] cursor-pointer max-w-[300px] h-[350px]"
      style={{
        boxShadow: "rgba(3, 0, 71, 0.18) 0px 0px 6px",
      }}
    >
      <div className="relative overflow-hidden h-full w-full">
        <Image
          src={images}
          alt={name}
          draggable="false"
          className="transition-all duration-200 ease-in w-full h-full max-w-[300px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-[8px] items-start justify-center w-[100%] px-[15px] py-[5px]">
        <h1 className="text-gray-800 font-semibold text-[18px] text-center mb-0 mt-0 whitespace-normal">
          {name}
        </h1>

        <div className="flex items-center justify-between gap-[4px]">
          <Rating
            name="half-rating-read"
            defaultValue={ratings}
            precision={0.5}
            size="small"
            readOnly
          />
          <span className="text-gray-800 text-[14px] font-[500] text-sm">{`(${numOfReviews} Reviews)`}</span>
        </div>

        <div className="text-[#D23F57] font-[600] text-[15px] mb-0 mt-0 whitespace-normal">{`$${price}`}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
