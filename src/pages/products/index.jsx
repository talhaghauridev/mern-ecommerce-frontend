import React from "react";
import ProductCard from "./components/ProductCard";
import { Suspense } from "react";
import FilterSiderbar from "./components/FilterSiderbar";

const Products = () => {
  return (
    <Suspense fallback={console.log("Loading product")}>
      <FilterSiderbar />
      <div>
        <ProductCard />
      </div>
    </Suspense>
  );
};

export default Products;
