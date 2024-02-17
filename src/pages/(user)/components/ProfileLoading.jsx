import React, { memo } from "react";
import { CircularProgress } from "@mui/material";

const ProfileLoading = () => {
  return (
    <section
      id="profileLoading"
      className="flex items-center justify-center w-full h-[60vh]"
    >
      <CircularProgress />
    </section>
  );
};

export default memo(ProfileLoading);
