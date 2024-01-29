import React, { memo } from "react";
import { useProductContext } from "../context/ProductContext";
import { Pagination } from "@mui/material";

const ProductPagination = () => {
  const { filteredProductCount, page, setPage, resultPerPage } =
    useProductContext();
  return (
    <div id="pagination" className="w-[100%] flex items-center justify-center">
      <Pagination
        count={Number(((filteredProductCount + 4) / resultPerPage).toFixed())}
        page={page}
        onChange={(e, newValue) => setPage(newValue)}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default memo(ProductPagination);
