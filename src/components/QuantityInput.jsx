import React, { memo } from "react";
import cn from "@utils/cn";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const QuantityInput = ({ className = "", value = 0, increment, decrement }) => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center max-w-fit",
        className
      )}
    >
      <QuantityButton onClick={increment} icon={FaPlus} />

      <span className="px-[13px] h-full font-PoppinsBold text-[20px] flex items-center justify-center">
        {value}
      </span>

      <QuantityButton onClick={decrement} icon={FaMinus} />
    </div>
  );
};

const QuantityButton = ({ onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className="p-[10px] flex items-center justify-center text-[20px] text-[#d23f57] border-solid border-[1px] border-[#d23f57] rounded cursor-pointer max-w-fit w-[50px] md:w-[45px]" 
    >
      <Icon className={"text-[14px]"} />
    </button>
  );
};

export default QuantityInput;
