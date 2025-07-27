import { React, createContext, useContext, useMemo } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
   const { products, isLoading, page, setPage, filters, setFilters, filteredProductCount, productCount, resultPerPage, isProducts } =
      useFetchProducts();

   const contextValue = useMemo(
      () => ({
         page,
         setPage,
         filters,
         setFilters,
         isLoading,
         products,
         filteredProductCount,
         productCount,
         resultPerPage,
         isProducts
      }),
      [page, filters, products, isLoading, filteredProductCount, productCount, resultPerPage, isProducts]
   );
   return (
      <main
         id="products"
         className="relative">
         <div className="container py-[90px]">
            <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
         </div>
      </main>
   );
};

export const useProductContext = () => {
   return useContext(ProductContext);
};
