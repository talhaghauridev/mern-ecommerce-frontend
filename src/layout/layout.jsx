import React from "react";
import Header from "./Header/Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { Suspense } from "react";
import { useTransition } from "react";
import { AnimationWrapper } from "../components";
const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      {/* <AnimationWrapper key={location.pathname}> */}
        <div style={{ display: "flex", gap: "15px" }}>
          <Link to={"/login"}>Login</Link>
          <Link to={"/user/profile"}>Profile</Link>
          <Link to={"/cart"}>Cart</Link>
        </div>
        <Outlet />
      {/* </AnimationWrapper> */}
    </div>
  );
};

export default Layout;
