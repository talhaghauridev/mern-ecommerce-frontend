import ProductCard from "@components/ProductCard";
import ProductLoading from "@components/ProductLoading";
import { useProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products, isLoading } = useProductContext();
  const isProducts = !products && !isLoading ? false : true;

  return (
    <section id="productList">
      <div className={isProducts ? `product_grid` : "product_not_found"}>
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
