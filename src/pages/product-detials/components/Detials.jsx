import React, { Suspense, lazy, memo, useEffect } from "react";
import { hero } from "@assets/images";
import { Button, Image } from "@components/ui";
import { Rating, capitalize } from "@mui/material";
import QuantityInput from "@components/QuantityInput";
import { localStorageItem, useAddToCart } from "../hooks/useAddToCart";
import { useCounter } from "@hooks/hook";
import cn from "@utils/cn";
const Reviews = lazy(() => import("./Reviews/Reviews"));

const Details = ({ product }) => {
  const {
    name,
    description,
    numOfReviews,
    price,
    ratings,
    stock,
    images,
    reviews,
    category,
    _id,
  } = product;

  const { handleAddToCart, isAddCart } = useAddToCart();
  const { count, decrement, increment } = useCounter(
    localStorageItem(_id)?.quantity || 0,
    1,
    stock
  );

  //Handle Quantity Change
  const handleQuantityChange = (operation) => {
    if (operation === "increment") {
      if (count >= stock) return;
      increment();
      handleAddToCart(product, count + 1);
    } else if (operation === "decrement") {
      if (count <= 1) return;
      decrement();
      handleAddToCart(product, count - 1);
    }
  };

  console.log(reviews);
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
        <div className=" flex flex-col gap-[10px] md:gap-[15px] mt-[20px] ">
          <div className=" ">
            <h2 className="text-[30px] font-bold font-PoppinsBold text-[#2B3445]">
              {capitalize(String(name))}
            </h2>
          </div>
          {/* Ratings */}
          <div className="flex items-center justify-start gap-[4px]">
            <Rating
              name="ratings"
              precision={0.5}
              value={ratings}
              size="medium"
              readOnly
            />
            <span className="text-gray-800 text-[14px] font-[500] text-sm font-SansBold">{`(${numOfReviews} Reviews)`}</span>
          </div>

          {/* Category */}
          <div className="flex items-center justify-start gap-[5px] font-Sans text-[16px]">
            Category:{" "}
            <span className="font-SansBold">
              {capitalize(String(category))}
            </span>
          </div>
          <div className="flex items-center justify-start">
            <span className="text-[#D23F57] font-SansBold text-[25px]">
              ${price}{" "}
            </span>
          </div>

          {/* Stock  */}

          <div className="flex items-center justify-start gap-[6px] text-[17px] font-PoppinsBold ">
            Stock:
            <span className={cn(stock < 1 ? "text-[#D23F57]" : "text-[green]")}>
              {stock < 1 ? "OutOfStock" : "InStock"}
            </span>
          </div>

          {/* Description */}
          <div className="flex items-center justify-start gap-[6px] text-[17px] font-PoppinsBold ">
            <div className="">Description</div>

            <p
              className="text-gray-500 font-Sans text-[15px]"
              style={{
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                display: "-webkit-box",
              }}
            >
              {description}
            </p>
          </div>

          {/* Cart Button */}
          <div className="flex gap-2.5 items-center justify-start mt-2">
            {isAddCart ? (
              <QuantityInput
                decrement={() => handleQuantityChange("decrement")}
                increment={() => handleQuantityChange("increment")}
                value={count}
                className="justify-between"
              />
            ) : (
              <Button onClick={() => handleQuantityChange("increment")}>
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>

      {reviews ? (
        <Suspense fallback={"Loading...."}>
          <Reviews reviews={reviews} />
        </Suspense>
      ) : (
        <h1>Not Raings</h1>
      )}
    </>
  );
};

export default memo(Details);
