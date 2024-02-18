import React, { memo } from "react";
import { Skeleton } from "@mui/material";

const ProductDetialSkelton = () => {
  return (
    <div className="container py-[50px] md:py-[80px] grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[30px]">
      <div className="flex items-center justify-start  md:justify-center w-full h-full">
        <Skeleton
          variant="rectangular"
          className={
            "w-full max-w-[300px] md:max-w-[500px] h-[300px!important] sm:h-[330px!important] object-contain"
          }
        />
      </div>

      <div className=" flex flex-col gap-[10px] mt-[20px] ">
        <div className="flex flex-col gap-[20px]">
          <Skeleton
            variant="rectangular"
            className=" w-[100%] max-w-[245px] h-[36px!important] text-gray-500"
          ></Skeleton>
          <Skeleton
            variant="text"
            className=" w-[100%] h-[35px!important] max-w-[220px] text-gray-500"
          ></Skeleton>
        </div>

        <div className="flex items-center justify-start gap-[4px]">
          <Skeleton
            variant="text"
            className="mb-0.5 inline-block w-[100%] h-[35px!important] max-w-[150px] text-gray-500"
          />
        </div>
        <Skeleton
          variant="text"
          className="mb-0.5 inline-block w-[100%] h-[35px!important] max-w-[150px] text-gray-500"
        />

        <div className="flex gap-2.5">
          <Skeleton
            variant="rectangular"
            className="rounded-lg w-[100%] h-[60px!important] max-w-[150px] mt-[10px] text-gray-500"
          />
        </div>
      </div>
      {/* <Reviews /> */}
    </div>
  );
};

export default memo(ProductDetialSkelton);
