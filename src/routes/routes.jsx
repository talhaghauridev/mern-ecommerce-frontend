// routes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "../layout/layout";
import AuthRoutes from "./user.routes";
import lazyLoad from "../utils/lazyLoad";
import NotFound from "./../layout/NotFound/NotFound";
const Products = lazyLoad("../pages/products");
const Home = lazyLoad("../pages/home");
const Cart = lazyLoad("../pages/cart");
const Login = lazyLoad("../pages/(authentication)", "Login");
const ForgotPassword = lazyLoad("../pages/(authentication)", "ForgotPassword");
const ResetPassword = lazyLoad("../pages/(authentication)", "ResetPassword");
const SignUp = lazyLoad("../pages/(authentication)", "SignUp");

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
