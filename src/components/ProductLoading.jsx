import { Skeleton } from "@mui/material";
import React, { memo } from "react";

const ProductLoading = () => {
  return (
    <div className="flex items-center justify-start flex-col relative overflow-hidden gap-[6px] bg-white rounded-md shadow-md pb-[5px] cursor-pointer max-w-[300px] h-[350px]"
    style={{
      boxShadow: "0px 0px 3px rgb(3 0 71 / 18%)",
    }}>
      <Skeleton animation={"pulse"} className="w-full h-[350px!important]"  />
    </div>
  );
};

export default memo(ProductLoading);
