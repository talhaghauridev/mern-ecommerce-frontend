import React, { memo, useCallback, useMemo } from "react";
import CartSkeleton from "./CartSkeleton";

const CartLoading = ({ length = 2 }) => {
  const loadingArr = useMemo(() => [...Array(length).fill(length)], [length]);

  const MemoizedProductSkeleton = useCallback(() => <CartSkeleton />, []);
  return (
    <div className="flex items-center justify-center flex-col gap-[10px]">
      {loadingArr?.map((item, index) => (
        <MemoizedProductSkeleton key={index} />
      ))}
    </div>
  );
};

export default memo(CartLoading);
