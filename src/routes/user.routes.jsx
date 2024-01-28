import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectRoute from "@lib/ProtectRoute";
const User = lazy(() => import("@pages/(user)/user"));
const Orders = lazy(() => import("@pages/(user)/orders"));
const UpdateProfile = lazy(() => import("@pages/(user)/profile-update"));
const UpdatePassword = lazy(() => import("@pages/(user)/password-update"));
const Profile = lazy(() => import("@pages/(user)/profile"));

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectRoute />}>
        <Route element={<User />}>
          <Route path="" element={<Navigate to={"profile"} replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/update" element={<UpdateProfile />} />
          <Route path="password/update" element={<UpdatePassword />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
