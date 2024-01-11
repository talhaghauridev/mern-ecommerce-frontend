// routes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "../layout/layout";
import AuthRoutes from "./user.routes";
import lazyLoad from "../utils/lazyLoad";
const Products = lazyLoad("../pages/products");
const Home = lazyLoad("../pages/home");
const Cart = lazyLoad("../pages/cart")
// const Login = lazy(()=>import("../pages/authentication")).then((module)=>{
//   {default:module.Login}
// })
import { Login } from "../pages/authentication"
import NotFound from './../layout/NotFound/NotFound';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {AuthRoutes}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
