import React, { lazy, useEffect, useState } from "react";
import { Suspense } from "react";
import SidebarLoading from "./components/SidebarLoading";
import { CircularProgress } from "@mui/material";
const FilterSidebar = lazy(() => import("./components/FilterSidebar"));
const ProductList = lazy(() => import("./components/ProductList"));
const Products = () => {
  return (
    <main id="products" className="relative">
      <div className="container py-[90px]">
        <Suspense fallback={<SidebarLoading />}>
          <FilterSidebar />
        </Suspense>
        <Suspense fallback={<>Product List Loading</>}>
          <ProductList />
        </Suspense>
      </div>
    </main>
  );
};

export default Products;
