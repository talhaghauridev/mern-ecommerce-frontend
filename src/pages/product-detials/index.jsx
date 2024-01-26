import React, { Suspense, lazy } from "react";
import useProductDetial from "./hooks/useProductDetial";
import ProductDetialSkelton from "./components/ProductDetialSkelton";
const Detials = lazy(() => import("./components/Detials"));
const ProductDetails = () => {
  const { product, isLoading } = useProductDetial();
  return (
    <>
      <Suspense fallback={<ProductDetialSkelton />}>
        {isLoading && <ProductDetialSkelton />}
        {product && !isLoading && <Detials product={product} />}
      </Suspense>
    </>
  );
};

export default ProductDetails;
