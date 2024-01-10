// routes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "../layout/layout";
import { Login } from "../pages/authentication";
import AuthRoutes from "./user.routes";
const Home = lazy(() => import("../pages/home"));
const Products = lazy(() => import("../pages/products"));
const Loading = () => {
  console.log("Loading....");
  return (
    <>
      <div style={{ height: "100vh ", background: "blue", width: "100vw" }}>
        Loading....
      </div>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route
            path=""
            element={<Layout />}
          >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            {AuthRoutes}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRoutes;
