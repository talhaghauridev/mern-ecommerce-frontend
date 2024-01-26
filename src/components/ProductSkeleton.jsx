import { Skeleton } from "@mui/material";
import React, { memo } from "react";

const ProductSkeleton = () => {
  return (
    <div
      className="flex items-center justify-start flex-col relative overflow-hidden gap-[6px] bg-white rounded-md shadow-md pb-[5px] max-w-[300px] h-[350px]"
      style={{
        boxShadow: "rgba(3, 0, 71, 0.18) 0px 0px 6px",
      }}
    >
      <Skeleton
        variant="rectangular"
        className="w-full max-w-[100%] h-[246px!important]"
      />

      <div className="flex flex-col gap-[2px] items-start justify-center w-[100%] px-[15px] py-[5px]">
        <Skeleton
          variant="text"
          className="w-[100%] max-w-[140px] h-[25px!important]"
        />
        <Skeleton
          variant="text"
          className="w-[100%] max-w-[200px]  h-[25px!important]"
        />
        <Skeleton
          variant="text"
          className="w-[100%] max-w-[120px]  h-[25px!important]"
        />
      </div>
    </div>
  );
};

export default memo(ProductSkeleton);
