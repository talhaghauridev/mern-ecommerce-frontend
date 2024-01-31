import { Skeleton } from "@mui/material";
import React, { memo } from "react";

const CartSkeleton = () => {
  return (
    <div className="w-full rounded-[10px] relative overflow-hidden flex  sm:flex-row flex-col max-w-[270px] sm:max-w-full h-[280px] sm:h-[130px]">
      <Skeleton variant="rectangular" className="w-[100%] h-[100%!important]" />
    </div>
  );
};

export default memo(CartSkeleton);
