// AuthRoutes.jsx
import React, { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ProtectRoute from "../ProtectRoute";
const Profile = lazy(() => import("../pages/profile"));

const AuthRoutes = (
  <Route
    path="/user"
    element={<ProtectRoute />}
  >
    <Route path="profile" element={<Profile />} />
  </Route>
);

export default AuthRoutes;
