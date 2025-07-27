import React, { memo } from "react";

const NotFound = ({ message = "Not found" }) => {
   return (
      <div className="h-[70vh] w-full flex items-center justify-center">
         <h1 className="text-[22px] sm:text-[25px] text-[#222935] w-full items-center flex justify-center font-PoppinsBold">{message}</h1>
      </div>
   );
};

export default memo(NotFound);
