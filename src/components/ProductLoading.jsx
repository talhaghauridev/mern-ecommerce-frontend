import { Skeleton } from "@mui/material";
import React, { memo } from "react";

const ProductLoading = () => {
  return (
    <div className="flex items-center justify-center flex-col relative overflow-hidden gap-4 bg-white rounded-md shadow-md pb-5 cursor-pointer max-w-300 h-336">
      <Skeleton animation={"wave"} />
    </div>
  );
};

export default memo(ProductLoading);
