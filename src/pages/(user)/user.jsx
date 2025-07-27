import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./components/UserSidebar";
import ProfileLoading from "./components/ProfileLoading";

const User = () => {
   return (
      <section id="user">
         <div className="container py-[60px]">
            <UserSidebar />
            <Suspense fallback={<ProfileLoading />}>
               <Outlet />
            </Suspense>
         </div>
      </section>
   );
};

export default User;
