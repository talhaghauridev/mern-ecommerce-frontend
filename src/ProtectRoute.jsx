import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const auth = false;

  if (!auth) {
    return <Navigate replace to={"/login"} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectRoute;
