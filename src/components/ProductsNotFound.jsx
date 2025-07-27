import React, { memo } from "react";

const ProductNotFound = () => {
   return (
      <div>
         <h1 className="font-SansBold text-[28px]">Sorry, Product not Found</h1>
      </div>
   );
};

export default memo(ProductNotFound);
