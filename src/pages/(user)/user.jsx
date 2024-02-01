import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./components/UserSidebar";

const User = () => {
  return (
    <section id="user">
      <div className="container py-[60px]">
        <UserSidebar />
        <Outlet />
      </div>
    </section>
  );
};

export default User;
