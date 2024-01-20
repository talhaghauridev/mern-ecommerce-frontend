import React from "react";
import Header from "./Header/Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { Suspense } from "react";
import { useTransition } from "react";
import { AnimationWrapper, buttonVariants } from "../components";
import Footer from "./Footer/Footer";
const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>SignUp</Link>

        <Link to={"/forgot-password"}>ForgotPassword</Link>

        <Link
          to={"/user/profile"}
          className={buttonVariants({ size: "md", variants: "outline" })}
        >
          Profile
        </Link>
        <Link
          to={"/cart"}
          className={buttonVariants({ className: "bg-black" })}
        >
          Cart
        </Link>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
