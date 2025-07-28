import lazyWithProgress from "@/utils/lazy-progress";
import { Navigate, Route, Routes } from "react-router-dom";

const Admin = lazyWithProgress(() => import("@/pages/(admin)/admin"));
const Dashboard = lazyWithProgress(() => import("@/pages/(admin)/dasboard"));
const CreateProduct = lazyWithProgress(() => import("@/pages/(admin)/create-product"));
const UpdateProduct = lazyWithProgress(() => import("@/pages/(admin)/update-product"));
const AdminProducts = lazyWithProgress(() => import("@/pages/(admin)/products"));
const Users = lazyWithProgress(() => import("@/pages/(admin)/users"));
const UpdateUser = lazyWithProgress(() => import("@/pages/(admin)/update-user"));
const Reviews = lazyWithProgress(() => import("@/pages/(admin)/reviews"));
const AdminOrders = lazyWithProgress(() => import("@/pages/(admin)/orders"));
const UpdateOrder = lazyWithProgress(() => import("@/pages/(admin)/update-order"));
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
