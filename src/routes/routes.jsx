// routes.jsx
import React, { lazy } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "@routes/user.routes";
import Layout from "@layout/layout";
import ProtectRoute from "@lib/ProtectRoute";
import AdminRoutes from "./admin.routes";
const NotFound = lazy(() => import("@layout/NotFound/NotFound"));
const Products = lazy(() => import("@pages/products"));
const ProductDetails = lazy(() => import("@pages/product-detials"));
const Home = lazy(() => import("@pages/home"));
const Cart = lazy(() => import("@pages/cart"));
const Shipping = lazy(() => import("@pages/shipping"));
const Login = lazy(() => import("@pages/(authentication)/login"));
const ForgotPassword = lazy(() =>
  import("@pages/(authentication)/password-forgot")
);
const ResetPassword = lazy(() =>
  import("@pages/(authentication)/password-reset")
);
const SignUp = lazy(() => import("@pages/(authentication)/signup"));
const ConfirmOrder = lazy(() => import("@pages/confirm-order"));
const SuccessOrder = lazy(() => import("@pages/success-order"));
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/products/:search" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route element={<ProtectRoute />}>
            <Route path="/user/*" element={<AuthRoutes />} />
            <Route path="/order/confirm" element={<ConfirmOrder />} />
            <Route path="/order/success" element={<SuccessOrder />} />
          </Route>

          <Route element={<ProtectRoute isAdmin={true} />}>
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
