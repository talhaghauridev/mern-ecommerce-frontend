import React, { memo } from "react";
import cn from "@utils/cn";

const QuanityInput = ({ className = "", value = 1, increment, decrement }) => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center max-w-fit",
        className
      )}
    >
      <QuanityButton onClick={increment} sign={"+"} />

      <span className="px-[13px] h-full font-PoppinsBold text-[20px]">
        {value}
      </span>

      <QuanityButton onClick={decrement} sign={"-"} />
    </div>
  );
};

const QuanityButton = memo(({ onClick, sign }) => {
  return (
    <button
      onClick={onClick}
      className="px-[15px] flex items-center justify-center text-[25px] text-[#d23f57] border-solid border-[1px] border-[#d23f57] rounded cursor-pointer max-w-fit h-[38px] md:h-[40px] w-[40px] md:w-[45px] pb-[5px]"
    >
      {sign}
    </button>
  );
});

export default memo(QuanityInput);
