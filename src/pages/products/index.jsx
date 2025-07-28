import React, { lazy, Suspense } from "react";
import { MetaData } from "@/components/ui";
import SidebarLoading from "./components/SidebarLoading";
import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";
const FilterSidebar = lazy(() => import("./components/FilterSidebar"));
const Products = () => {
   return (
      <>
         <MetaData title={"Products"} />
         <ProductProvider>
            <Suspense fallback={<SidebarLoading />}>
               <FilterSidebar />
            </Suspense>
            <ProductList />
         </ProductProvider>
      </>
   );
};

export default Products;
