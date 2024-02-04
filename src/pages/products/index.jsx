import React, { lazy, Suspense } from "react";
import { MetaData } from "@components/ui";
import SidebarLoading from "./components/SidebarLoading";
import ProductLoading from "@components/ProductLoading";
import { ProductProvider } from "./context/ProductContext";
const FilterSidebar = lazy(() => import("./components/FilterSidebar"));
const ProductList = lazy(() => import("./components/ProductList"));
const Products = () => {
  return (
    <>
      <MetaData title={"Products"} />
      <ProductProvider>
        <Suspense fallback={<SidebarLoading />}>
          <FilterSidebar />
        </Suspense>
        <Suspense fallback={<ProductLoading length={8} />}>
          <ProductList />
        </Suspense>
      </ProductProvider>
    </>
  );
};

export default Products;
