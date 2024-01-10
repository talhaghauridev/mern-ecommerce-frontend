import React from "react";
import Header from "./Header/Header";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      layout
      <Header />
      <Outlet />
      <Link to={"/"}>
        Home
      </Link>
      <Link to={"/products"}>
        Products
      </Link>
      <Link to={"/login"}>
        Login
      </Link>

      <Link to={"/user/profile"}>
        Profile
      </Link>
    </div>
  );
};

export default Layout;
