import React, { memo } from "react";
import { Button } from "@components/ui";

const ConfirmOrderBox = () => {
  
  return (
    <div
      className="bg-white rounded-[8px] relative md:max-w-[350px] overflow-hidden h-fit max-w-full "
      style={{
        boxShadow: "#03004717 0px 0px 4px 2px",
      }}
    >
      <div className="py-[40px] px-[30px] flex flex-col gap-y-[25px] md:gap-y-[40px]">
        <div className="flex flex-col gap-y-[14px]">
          <h1 className="font-bold text-[26px] text-gray-800 relative font-Sans text-center mb-[12px]">
            Order Summary
          </h1>
      
        </div>
        <Button
        
          className={`max-w-full flex items-center justify-center  `}
        >
          {isLoading ? "Processing..." : "Proceed to Payment"}
        </Button>
      </div>
    </div>
  );
};

export default memo(ConfirmOrderBox);
