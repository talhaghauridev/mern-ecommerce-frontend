// App.jsx

import React from "react";
import Layout from "./layout/layout";
import Home from "./pages/home";
import { useState } from "react";
import Routes from './routes/routes';

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
      <Routes />
    </main>
  );
}

export default App;
