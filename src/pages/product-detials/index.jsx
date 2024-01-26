import React from "react";
import useProductDetial from "./hooks/useProductDetial";
import Detials from "./components/Detials";
import ProductDetialSkelton from "./components/ProductDetialSkelton";

const ProductDetails = () => {
  const { product, isLoading } = useProductDetial();
  return (
    <>
      {isLoading && <ProductDetialSkelton />}
      {product && !isLoading && <Detials product={product} />}
    </>
  );
};

export default ProductDetails;
