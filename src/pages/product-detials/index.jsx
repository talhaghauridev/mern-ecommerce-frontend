import React from "react";
import useProductDetial from "./hooks/useProductDetial";

const ProductDetails = () => {
  const { data } = useProductDetial();
  console.log(data);
  return <div>ProductDetails{productId}</div>;
};

export default ProductDetails;
