import React, { memo } from "react";
import cn from "@utils/cn";

const QuanityInput = ({ className = "", value = 1, increment, decrement }) => {
  return (
    <div className={cn("w-full flex items-center justify-center", className)}>
      <button
        onClick={increment}
        className="px-[15px] flex items-center justify-center text-[25px] text-[#d23f57] border-solid border-[1px] border-[#d23f57] rounded cursor-pointer max-w-fit h-[40px] w-[45px]"
      >
+
      </button>

      <span className="px-[13px] h-full font-PoppinsBold text-[20px]">
        {value}
      </span>
      <button
        onClick={decrement}
        className="px-[15px] flex items-center justify-center text-[25px] text-[#d23f57] border-solid border-[1px] border-[#d23f57] rounded cursor-pointer max-w-fit  h-[40px] w-[45px]"
      >
       -
      </button>
    </div>
  );
};

export default memo(QuanityInput);
