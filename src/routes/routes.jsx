import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "@/routes/user.routes";
import Layout from "@/layout/layout";
import ProtectRoute from "@/lib/ProtectRoute";
import AdminRoutes from "./admin.routes";
import lazyWithProgress from "@/utils/lazy-progress";
const NotFound = lazyWithProgress(() => import("@/layout/NotFound/NotFound"));
const Products = lazyWithProgress(() => import("@/pages/products"));
const ProductDetails = lazyWithProgress(() =>
  import("@/pages/product-detials")
);
const Home = lazyWithProgress(() => import("@/pages/home"));
const Cart = lazyWithProgress(() => import("@/pages/cart"));
const Shipping = lazyWithProgress(() => import("@/pages/shipping"));
const Login = lazyWithProgress(() => import("@/pages/(authentication)/login"));
const ForgotPassword = lazyWithProgress(() =>
  import("@/pages/(authentication)/password-forgot")
);
const ResetPassword = lazyWithProgress(() =>
  import("@/pages/(authentication)/password-reset")
);
const SignUp = lazyWithProgress(() =>
  import("@/pages/(authentication)/signup")
);
const ConfirmOrder = lazyWithProgress(() => import("@/pages/confirm-order"));
const SuccessOrder = lazyWithProgress(() => import("@/pages/success-order"));

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
