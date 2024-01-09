// routes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home";
import { Login } from "../pages/authentication";

const AppRoutes = (
   <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="login" element={<Login/>}/>
  </Route>
);

export default AppRoutes;
