import { useMemo } from "react";
import ProductCard from "@components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductLoading from "@components/ProductLoading";

const ProductList = () => {
  const { products, isLoading } = useFetchProducts();
  const isProducts = useMemo(
    () => (!products || (products.length === 0 && !isLoading) ? false : true),
    [isLoading, products]
  );

  return (
    <section id="productList">
      <div
        className={
          isProducts || isLoading ? `home_product_grid` : "product_not_found"
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

export default ProductList;
