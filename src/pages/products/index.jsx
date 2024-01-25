import React, { lazy, useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Suspense } from "react";
import SidebarLoading from "./components/SidebarLoading";
import { CircularProgress } from "@mui/material";
const FilterSidebar = lazy(() => import("./components/FilterSidebar"));
const Products = () => {
  const [showLoading, setShowLoading] = useState(true);

  // Simulate a delay before hiding the loading indicator
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoading(false);
    }, 20000); // Set the time in milliseconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <main id="products" className="relative">
      <div className="container py-[90px]">
        <Suspense fallback={<SidebarLoading />}>
          <FilterSidebar />
        </Suspense>
      </div>
    </main>
  );
};

export default Products;
