import { CircularProgress } from "@mui/material";
import React from "react";

const SidebarLoading = () => {
  return (
    <aside
      id="productSidebar"
      className="h-[100vh] w-full max-w-[240px] flex flex-col items-center justify-center  "
      style={{
        boxShadow: "0px 0px 6px -4px",
      }}
    >
      <CircularProgress />
    </aside>
  );
};

export default SidebarLoading;
