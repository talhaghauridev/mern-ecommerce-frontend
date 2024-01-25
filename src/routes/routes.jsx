// routes.jsx
import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import AuthRoutes from "@routes/user.routes";
import lazyLoad from "@utils/lazyLoad";
import NotFound from "@layout/NotFound/NotFound";
import Layout from "@layout/layout";
const Products = lazyLoad("./../pages/products");
// const Home = lazyLoad("./../pages/home");
const Home = React.lazy(() => import("@pages/home"));
// const Home = lazyLoad("@pages/home")
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
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/products/:search" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user/*" element={<AuthRoutes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
