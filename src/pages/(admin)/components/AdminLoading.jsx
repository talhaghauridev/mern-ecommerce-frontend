import React, { memo } from "react";
import { CircularProgress } from "@mui/material";

const AdminLoading = () => {
  return (
    <section
      id="adminLoading"
      className="flex items-center justify-center w-full h-full"
    >
      <CircularProgress />
    </section>
  );
};

export default memo(AdminLoading);
