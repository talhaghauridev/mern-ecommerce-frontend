// App.jsx

import React from "react";
import Layout from "./layout/layout";
import Home from "./pages/home";
import { useState } from "react";
import Routes from "./routes/routes";
import { Suspense } from "react";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";

import lazyLoad from "./utils/lazyLoad";
import { useEffect } from "react";

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
  const [load, setLoad] = useState(false);


  return (
    <main id="App">
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </main>
  );
}

export default App;
