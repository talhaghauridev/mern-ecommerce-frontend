import React, { memo, useCallback, useMemo } from "react";
import ProductSkeleton from "./ProductSkeleton";

const ProductLoading = ({ length = 2 }) => {
  const loadingArr = useMemo(() => [...Array(length).fill(length)], [length]);

  const MemoizedProductSkeleton = useCallback(() => <ProductSkeleton />, []);
  return (
    <>
      {loadingArr?.map((item, index) => (
        <MemoizedProductSkeleton key={index} />
      ))}
    </>
  );
};

export default memo(ProductLoading);
