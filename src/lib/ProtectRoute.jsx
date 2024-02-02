import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, redirect = "/login", isAdmin }) => {
  const { userInfo } = useSelector((state) => state.user);

  // if(isAdmin && isAdmin!==userInfo?.role){}

  if (!userInfo) {
    return <Navigate to={redirect} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectRoute;
