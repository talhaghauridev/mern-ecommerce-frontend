import React, { Suspense, lazy } from "react";
import useProductDetial from "./hooks/useProductDetial";
import ProductDetialSkelton from "./components/ProductDetialSkelton";
import { MetaData } from "@components/ui";
import { capitalize } from "@mui/material";
const Detials = lazy(() => import("./components/Detials"));
const ProductDetails = () => {
  const { product, isLoading } = useProductDetial();
  return (
    <>
      <MetaData title={capitalize(String(product?.name || "Product Detial"))} />
      <Suspense fallback={<ProductDetialSkelton />}>
        {isLoading && <ProductDetialSkelton />}
        {product && !isLoading && <Detials product={product} />}
      </Suspense>
    </>
  );
};

export default ProductDetails;
