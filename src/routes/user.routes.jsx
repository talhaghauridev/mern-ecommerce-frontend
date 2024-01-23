// AuthRoutes.jsx
import React from "react";
import { Navigate, Route } from "react-router-dom";
import ProtectRoute from "../ProtectRoute";
import lazyLoad from "../utils/lazyLoad";
const User = lazyLoad("../pages/(user)/user");
const Orders = lazyLoad("../pages/(user)/orders");
const UpdateProfile = lazyLoad("../pages/(user)/profile-update");
const UpdatePassword = lazyLoad("../pages/(user)/password-update");
const Profile = lazyLoad("../pages/(user)/profile");

const AuthRoutes = (
  <Route element={<ProtectRoute />}>
    <Route path="/user/" element={<User />}>
      <Route path="" element={<Navigate to={"profile"} replace />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/update" element={<UpdateProfile />} />
      <Route path="password/update" element={<UpdatePassword />} />
      <Route path="orders" element={<Orders />} />
    </Route>
  </Route>
);

export default AuthRoutes;
