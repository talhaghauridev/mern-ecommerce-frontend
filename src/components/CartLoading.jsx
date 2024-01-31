import React, { memo, useCallback, useMemo } from "react";
import CartSkeleton from "./CartSkeleton";

const CartLoading = ({ length = 2 }) => {
  const loadingArr = useMemo(() => [...Array(length).fill(length)], [length]);

  const MemoizedProductSkeleton = useCallback(() => <CartSkeleton />, []);
  return (
    <>
      {loadingArr?.map((item, index) => (
        <MemoizedProductSkeleton key={index} />
      ))}
    </>
  );
};

export default memo(CartLoading);
