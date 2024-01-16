import React from "react";
import Header from "./Header/Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { Suspense } from "react";
import { useTransition } from "react";
import { AnimationWrapper, buttonVariants } from "../components";
const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
        <div style={{ display: "flex", gap: "15px" }}>
          <Link to={"/login"}>Login</Link>
          <Link to={"/user/profile"}>Profile</Link>
          <Link to={"/cart"} className={buttonVariants({className:"bg-black"})}>Cart</Link>
        </div>
        <Outlet />
    </div>
  );
};

export default Layout;
