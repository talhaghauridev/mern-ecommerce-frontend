import React, { memo } from "react";
import { Pagination } from "@mui/material";
import { useProductContext } from "../context/ProductContext";

const ProductPagination = () => {
   const { filteredProductCount, page, setPage, resultPerPage } = useProductContext();
   return (
      <div
         id="pagination"
         className="w-[100%] flex items-center justify-center py-[25px] max-w-full">
         <Pagination
            count={Math.ceil(filteredProductCount / resultPerPage)}
            page={page}
            onChange={(e, newValue) => setPage(newValue)}
            variant="outlined"
            shape="rounded"
         />
      </div>
   );
};

export default memo(ProductPagination);
