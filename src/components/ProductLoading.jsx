import React, { memo, useCallback, useMemo } from "react";
import ProductSkeleton from "./ProductSkeleton";

const ProductLoading = ({ length = 2 }) => {
  const loadingArr = useMemo(() => [...Array(length).fill(length)], [length]);

  const MemoizedProductSkeleton = useCallback(() => <ProductSkeleton />, []);
  return (
    <>
      {loadingArr?.map((item) => (
        <MemoizedProductSkeleton key={item} />
      ))}
    </>
  );
};

export default memo(ProductLoading);
