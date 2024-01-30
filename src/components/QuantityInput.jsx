import React, { memo } from "react";
import cn from "@utils/cn";

const QuantityInput = ({ className = "", value = 0, increment, decrement }) => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center max-w-fit",
        className
      )}
    >
      <QuantityButton onClick={increment} sign={"+"} />

      <span className="px-[13px] h-full font-PoppinsBold text-[20px] flex items-center justify-center">
        {value}
      </span>

      <QuantityButton onClick={decrement} sign={"-"} />
    </div>
  );
};

const QuantityButton = ({ onClick, sign }) => {
  return (
    <button
      onClick={onClick}
      className="px-[15px] flex items-center justify-center text-[25px] text-[#d23f57] border-solid border-[1px] border-[#d23f57] rounded cursor-pointer max-w-fit h-[38px] md:h-[40px] w-[40px] md:w-[45px] pb-[5px]"
    >
      {sign}
    </button>
  );
};

export default QuantityInput;
