import ProductCard from "@components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductLoading from "@components/ProductLoading";

const ProductList = () => {
  const { products, isLoading } = useFetchProducts();
  return (
    <section id="productList">
      <div className="home_product_grid">
        {/* {isLoading && <ProductLoading length={8} />} */}

        {products &&
          products?.map((product) => (
            <ProductCard {...product}  />
          ))}
      </div>
    </section>
  );
};

export default ProductList;
