import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Admin = lazy(() => import("@pages/(admin)/admin"));
const Dashboard = lazy(() => import("@pages/(admin)/dasboard"));
const CreateProduct = lazy(() => import("@pages/(admin)/create-product"));
const UpdateProduct = lazy(() => import("@pages/(admin)/update-product"));
const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<Admin />}>
        <Route path="" element={<Navigate to={"dashboard"} replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product/create" element={<CreateProduct />} />
        <Route path="product/update" element={<UpdateProduct />} />
        <Route path="users" element={"Users"} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
