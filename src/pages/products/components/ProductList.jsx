import { memo } from "react";
import ProductCard from "@components/ProductCard";
import ProductLoading from "@components/ProductLoading";
import { useProductContext } from "../context/ProductContext";
import ProductPagination from "./ProductPagination";

const ProductList = () => {
  const { products, isLoading, resultPerPage, isProducts, productCount } =
    useProductContext();
  return (
    <section id="productList">
      <div
        className={
          isProducts || isLoading ? "product_grid" : "product_not_found"
        }
      >
        {isLoading && <ProductLoading length={8} />}
        {products?.map((product) => (
          <ProductCard {...product} key={product?._id} />
        ))}
        {!isProducts && <h1>Sorry, Product not Found</h1>}
      </div>

      {isProducts && productCount > resultPerPage && <ProductPagination />}
    </section>
  );
};

export default memo(ProductList);
