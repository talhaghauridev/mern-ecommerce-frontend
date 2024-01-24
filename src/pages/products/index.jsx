import React from "react";
import ProductCard from "./components/ProductCard";
import { Suspense } from "react";
import FilterSiderbar from "./components/FilterSiderbar";

const Products = () => {
  return (
    <Suspense
      fallback={
        <>
          <div className="h-[100vh] bg-black">Loading....</div>
        </>
      }
    >
      <FilterSiderbar />
      <div>
        <ProductCard />
      </div>
    </Suspense>
  );
};

export default Products;
