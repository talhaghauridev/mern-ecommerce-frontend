import { memo, useMemo } from "react";
import ProductCard from "@components/ProductCard";
import ProductLoading from "@components/ProductLoading";
import { useProductContext } from "../context/ProductContext";
import { Pagination } from "@mui/material";
import ProductPagination from "./ProductPagination";

const ProductList = () => {
  const { products, isLoading } = useProductContext();

  const isProducts = useMemo(
    () => products?.length > 0 || !isLoading,
    [isLoading, products]
  );

  return (
    <section id="productList">
      <div
        className={`product_grid ${
          isProducts || isLoading ? "" : "product_not_found"
        }`}
      >
        {isLoading && <ProductLoading length={8} />}
        {products?.map((product) => (
          <ProductCard {...product} key={product?._id} />
        ))}
        {!isProducts && <h1>Product not Found</h1>}
      </div>

      {isProducts && <ProductPagination />}
    </section>
  );
};

export default memo(ProductList);
