import { memo, useMemo } from "react";
import ProductCard from "@components/ProductCard";
import ProductLoading from "@components/ProductLoading";
import { useProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products, isLoading } = useProductContext();
  const isProducts = useMemo(
    () => (products?.length > 0 || !isLoading ? true : false),
    [isLoading, products]
  );
  console.log(isProducts);
  return (
    <section id="productList">
      <div
        className={
          isProducts || isLoading ? `product_grid` : "product_not_found"
        }
      >
        {isLoading && <ProductLoading length={8} />}
        {products &&
          products?.map((product) => (
            <ProductCard {...product} key={product?._id} />
          ))}
        {!isProducts && <h1>Product not Found</h1>}
      </div>
    </section>
  );
};

export default memo(ProductList);
