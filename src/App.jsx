import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
function App() {
  return (
    <>
      <main id="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
