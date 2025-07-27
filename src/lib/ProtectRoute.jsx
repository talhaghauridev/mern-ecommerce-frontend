import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, redirect = "/login", adminRedirect = "/", isAdmin }) => {
   const { userInfo } = useSelector((state) => state.user);

   if (!userInfo) {
      return (
         <Navigate
            to={redirect}
            replace
         />
      );
   }

   if (isAdmin && userInfo.role !== "admin") {
      return (
         <Navigate
            to={adminRedirect}
            replace
         />
      );
   }

   return children ? children : <Outlet />;
};

export default ProtectRoute;
