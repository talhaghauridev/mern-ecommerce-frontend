import React from "react";
import UserSidebar from "./components/UserSidebar";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <section id="user">
      <UserSidebar />
      <Outlet />
    </section>
  );
};

export default User;
