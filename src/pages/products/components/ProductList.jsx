import { memo } from "react";
import ProductCard from "@components/ProductCard";
import ProductLoading from "@components/ProductLoading";
import { useProductContext } from "../context/ProductContext";
import ProductPagination from "./ProductPagination";
import ProductsNotFound from "@components/ProductsNotFound";

const ProductList = () => {
  const { products, isLoading, resultPerPage, isProducts, productCount } =
    useProductContext();
  console.log(resultPerPage, productCount, products);
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
        {!isProducts && <ProductsNotFound />}
      </div>

      {isProducts && productCount >= resultPerPage && <ProductPagination />}
    </section>
  );
};

export default memo(ProductList);
