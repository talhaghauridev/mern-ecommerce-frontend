// App.jsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Layout from "./layout/layout";
import Home from "./pages/home";
import { useState } from "react";

export const Loading = () => {
  console.log("Loading....");
  return (
    <>
      <div style={{ height: "100vh ", background: "blue", width: "100%" }}>
        Loading....
      </div>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(false);
  console.log(loading);
  return (
    <main id="App">
      <React.Suspense fallback={ async ()=><Loading/>}>
        <Routes>{AppRoutes}</Routes>
      </React.Suspense>
    </main>
  );
}

export default App;
