import ProductCard from "@components/ProductCard";
import ProductLoading from "@components/ProductLoading";
import React from "react";
const product = {
  _id: "1",
  name: "product boy",
  images: "",
  price: 200,
  ratings: 4,
  numOfReviews: 4,
};
const ProductList = () => {
  return (
    <section id="productList">
      <div className="product_grid">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />

        {/* <ProductLoading /> */}
      </div>
    </section>
  );
};

export default ProductList;
