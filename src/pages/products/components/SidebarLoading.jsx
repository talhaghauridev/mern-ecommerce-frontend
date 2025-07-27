import React, { memo } from "react";
import { CircularProgress } from "@mui/material";
import { useMediaQuery } from "@/hooks/hook";
import cn from "@/utils/cn";

const SidebarLoading = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <aside
      id="productSidebar"
      className={cn(
        "h-[100vh] w-full max-w-[240px] flex flex-col items-center justify-center",
        isMobile && "hidden"
      )}
      style={{
        boxShadow: "0px 0px 6px -4px",
      }}
    >
      <CircularProgress />
    </aside>
  );
};

export default memo(SidebarLoading);
