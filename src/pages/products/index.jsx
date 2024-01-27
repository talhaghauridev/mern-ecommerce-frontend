import React, { lazy } from "react";
import { Suspense } from "react";
import SidebarLoading from "./components/SidebarLoading";
import ProductLoading from "@components/ProductLoading";
import { MetaData } from "@components/ui";
const FilterSidebar = lazy(() => import("./components/FilterSidebar"));
const ProductList = lazy(() => import("./components/ProductList"));
const Products = () => {
  return (
    <>
      <MetaData title={"Products"} />
      <main id="products" className="relative">
        <div className="container py-[90px]">
          <Suspense fallback={<SidebarLoading />}>
            <FilterSidebar />
          </Suspense>
          <Suspense fallback={<ProductLoading length={8} />}>
            <ProductList />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Products;
