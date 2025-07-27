import React, { Suspense, lazy } from "react";
import ProductDetialSkelton from "./components/ProductDetialSkelton";
import { MetaData } from "@/components/ui";
import { capitalize } from "@mui/material";
import { useProductDetail } from "./hooks/useProductDetial";
const Detials = lazy(() => import("./components/Detials"));
const ProductDetails = () => {
   const { product, isLoading } = useProductDetail();
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
