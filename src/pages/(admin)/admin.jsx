import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import AdminLoading from "./components/AdminLoading";

const Admin = () => {
   return (
      <main id="admin">
         <div className="container pt-[30px] pb-[90px]">
            <AdminSidebar />
            <Suspense fallback={<AdminLoading />}>
               <Outlet />
            </Suspense>
         </div>
      </main>
   );
};

export default Admin;
