import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppProvider from "@/lib/AppProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./styles/main.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false, trickleSpeed: 200, minimum: 0.1 });

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AppProvider>
         <App />
      </AppProvider>
   </React.StrictMode>
);
