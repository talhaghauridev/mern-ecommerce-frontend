import React, { lazy, memo } from "react";
import { hero } from "@assets/images";
import { Button, Image } from "@components/ui";
import { Rating, capitalize } from "@mui/material";
import { useAddToCart } from "../hooks/useProductDetial";
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Details = ({ product }) => {
  const {
    name,
    descripton,
    numOfReviews,
    price,
    ratings,
    stock,
    images,
    reviews,
    category,
  } = product;

  const { handleAddToCart } = useAddToCart();
  return (
    <>
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
            <Button onClick={() => handleAddToCart(product)}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      {reviews ? <Reviews reviews={reviews} /> : <h1>Not Raings</h1>}
    </>
  );
};

export default memo(Details);
