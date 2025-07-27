import ProductCard from "@/components/ProductCard";
import ProductLoading from "@/components/ProductLoading";
import ProductsNotFound from "@/components/ProductsNotFound";
import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductList = () => {
  const { products, isLoading, isProducts } = useFetchProducts();

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
        {!isProducts && <ProductsNotFound />}
      </div>
    </section>
  );
};

export default ProductList;
