import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";

const Admin = () => {
  return (
    <main id="admin">
      <AdminSidebar />
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Admin;
