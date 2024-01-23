import Hero from "@layout/Hero/Hero";
import React from "react";
import ProductCard from "./components/ProductCard";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <div className="container">
        <ProductCard />
      </div>
    </section>
  );
};
export default Home;
