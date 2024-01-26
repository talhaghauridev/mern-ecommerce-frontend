import { hero } from "@assets/images";
import { AnimationWrapper, Button, Image } from "@components/ui";
import { Rating, capitalize } from "@mui/material";
import React, { memo, useState } from "react";
import Reviews from "./Reviews/Reviews";
const productImages = [
  "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250",
  "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
  "https://images.unsplash.com/flagged/photo-1571366992999-47669b775ef6?auto=format&q=75&fit=crop&w=250",
  "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600",
];
const Details = ({ product }) => {
  const {
    name,
    descripton,
    numOfReviews,
    price,
    ratings,
    stock,
    images,
    category,
  } = product;

  return (
    <div className="container py-[50px] grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[20px]">
      <div className="flex items-center justify-start  md:justify-center w-full">
        <Image
          src={hero}
          alt={name}
          className={"w-full max-w-[300px] md:max-w-[500px]"}
        />
      </div>

      <div className=" flex flex-col gap-[10px] mt-[20px] ">
        <div className="mb-2 md:mb-3">
          <span className="mb-0.5 inline-block text-gray-500">
            {capitalize(String(category))}
          </span>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            {capitalize(String(name))}
          </h2>
        </div>

        <div className="flex items-center justify-start gap-[4px]">
          <Rating
            name="ratings"
            precision={0.5}
            value={ratings}
            size="medium"
            readOnly
          />
          <span className="text-gray-800 text-[14px] font-[500] text-sm">{`(${numOfReviews} Reviews)`}</span>
        </div>

        <div>
          <div className="mb-3 text-lg font-semibold text-gray-800">
            Description
          </div>

          <p className="text-gray-500">{descripton}</p>
        </div>

        <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-800 md:text-2xl">
              {price}
            </span>
            <span className="mb-0.5 text-red-500 line-through">
              ${price + 500}
            </span>
          </div>
        </div>

        <div className="flex gap-2.5">
          <Button className="inline-block flex-1 rounded-lg bg-[#E3364E] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-[#E3364E] focus-visible:ring  sm:flex-none md:text-base font-Sans">
            Add to cart
          </Button>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default memo(Details);
