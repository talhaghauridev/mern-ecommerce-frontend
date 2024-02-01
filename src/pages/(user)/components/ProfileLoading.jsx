import { CircularProgress } from "@mui/material";
import React from "react";

const ProfileLoading = () => {
  return (
    <section
      id="profileLoading"
      className="flex items-center justify-center w-full h-full"
    >
      <CircularProgress />
    </section>
  );
};

export default ProfileLoading;
