import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      {/* <div style={{ display: "flex", gap: "15px" }}>
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
      </div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
