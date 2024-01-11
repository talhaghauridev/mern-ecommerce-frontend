import React from "react";
import Header from "./Header/Header";
import { Link, Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar"
import { Suspense } from "react";
import { useTransition } from "react";
const Layout = () => {
  const [pending, startPending] = useTransition()
  console.log(pending);
  console.log(startPending);

  return (
    <div>
      <Header />
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to={"/login"}>Login</Link>
        <Link to={"/user/profile"}>Profile</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
