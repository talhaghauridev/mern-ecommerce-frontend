import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Admin = lazy(() => import("@/pages/(admin)/admin"));
const Dashboard = lazy(() => import("@/pages/(admin)/dasboard"));
const CreateProduct = lazy(() => import("@/pages/(admin)/create-product"));
const UpdateProduct = lazy(() => import("@/pages/(admin)/update-product"));
const AdminProducts = lazy(() => import("@/pages/(admin)/products"));
const Users = lazy(() => import("@/pages/(admin)/users"));
const UpdateUser = lazy(() => import("@/pages/(admin)/update-user"));
const Reviews = lazy(() => import("@/pages/(admin)/reviews"));
const AdminOrders = lazy(() => import("@/pages/(admin)/orders"));
const UpdateOrder = lazy(() => import("@/pages/(admin)/update-order"));
const AdminRoutes = () => {
   return (
      <Routes>
         <Route element={<Admin />}>
            <Route
               path=""
               element={
                  <Navigate
                     to={"dashboard"}
                     replace
                  />
               }
            />
            <Route
               path="dashboard"
               element={<Dashboard />}
            />
            <Route
               path="product/create"
               element={<CreateProduct />}
            />
            <Route
               path="product/:id"
               element={<UpdateProduct />}
            />
            <Route
               path="products"
               element={<AdminProducts />}
            />
            <Route
               path="reviews"
               element={<Reviews />}
            />
            <Route
               path="users"
               element={<Users />}
            />
            <Route
               path="user/:userId"
               element={<UpdateUser />}
            />
            <Route
               path="orders"
               element={<AdminOrders />}
            />
            <Route
               path="order/:orderId"
               element={<UpdateOrder />}
            />
         </Route>
      </Routes>
   );
};

export default AdminRoutes;
