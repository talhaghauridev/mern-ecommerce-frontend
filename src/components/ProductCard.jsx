import React from "react";
import Image from "./ui/Image";

const ProductCard = ({ id, title, price, category, description, image }) => {
  console.log("Product");
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1>{title}</h1>
        Product
        <Image
          alt={title}
          src={image}
          className="flex items-center justify-center w-full max-w-[200px]"
        />
        <span>{price}</span>
      </div>
    </>
  );
};

export default ProductCard;
