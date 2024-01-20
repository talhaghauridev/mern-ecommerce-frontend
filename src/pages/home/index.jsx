import React from "react";
import { Input } from "../../components";
import ProductCard from "./components/ProductCard";
import Hero from "../../layout/Hero/Hero";

const Home = () => {
  return (
    <section id="home">

      <Hero/>
      <div className="container">
        <ProductCard />
      </div>
    </section>
  );
};
export default Home;
