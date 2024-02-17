import { Skeleton } from "@mui/material";
import React, { memo, useMemo } from "react";

const TableLoading = ({ length = 4 }) => {
  const loadingArr = useMemo(() => [...Array(length).fill(length)], [length]);

  return (
    <section
      id="tableLoading"
      className="w-full h-full max-w-[100%] flex flex-col gap-[8px] mt-[15px] "
    >
      {loadingArr?.map((item, index) => (
        <Skeleton
          variant="rectangular"
          key={index}
          className="w-full h-[52px!important]"
        />
      ))}
    </section>
  );
};

export default memo(TableLoading);
