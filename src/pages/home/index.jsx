import React, { lazy } from "react";
import { MetaData } from "@/components/ui";
import Hero from "@/layout/Hero/Hero";
const ProductList = lazy(() => import("./components/PrductList"));
const Home = () => {
  return (
    <>
      <MetaData title="Home" />
      <section id="home">
        <Hero />
        <div className="container py-[60px] flex flex-col gap-[30px] md:gap-[50px] ">
          <h1 className="home_heading md:mb-[10px] text-[30px]  md:text-[40px]  font-Sans font-bold text-[#222935] w-full max-w-[100%]">
            Latest Products
          </h1>
          <ProductList />
        </div>
      </section>
    </>
  );
};
export default Home;
