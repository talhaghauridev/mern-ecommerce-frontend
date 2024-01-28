import ProductCard from "@components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductLoading from "@components/ProductLoading";
import { useMemo } from "react";

const ProductList = () => {
  const { products, isLoading } = useFetchProducts();
  const isProducts = !products && !isLoading ? false : true;

  console.log(isProducts);
  return (
    <section id="productList">
      <div className={isProducts ? `home_product_grid` : "product_not_found"}>
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
