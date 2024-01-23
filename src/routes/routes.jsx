// routes.jsx
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./user.routes";
import lazyLoad from "@utils/lazyLoad";
import NotFound from "@layout/NotFound/NotFound";
import Layout from "@layout/layout";
const Products = lazyLoad("./../pages/products");
const Home = lazyLoad("./../pages/home");
const Cart = lazyLoad("./../pages/cart");
const Login = lazyLoad("./../pages/(authentication)/login");
const ForgotPassword = lazyLoad("./../pages/(authentication)/password-forgot");
const ResetPassword = lazyLoad("./../pages/(authentication)/password-reset");
const SignUp = lazyLoad("./../pages/(authentication)/signup");

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {AuthRoutes}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
