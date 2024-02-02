import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Image, buttonVariants } from "@components/ui";
import { emptyCart } from "@assets/images";

const EmptyCart = () => {
  return (
    <section id="emptyCart" className="w-full  py-[30px] px-[20px] ">
      <div
        className=" max-w-[900px] px-[15px] py-[90px] m-auto bg-white  flex items-center justify-center flex-col gap-[15px] "
        style={{
          boxShadow: "#2b34451a 0px 0px 16px",
        }}
      >
        <Image
          src={emptyCart}
          alt={"Empty Cart Image"}
          className={"w-full max-w-[200px] sm:max-w-[250px]"}
        />
        <h3 className="text-[20px] sm:text-[25px] text-center font-Sans font-[600] text-[#2b3445]">
          No Products in Your Cart
        </h3>
        <Link
          to={"/products"}
          className={buttonVariants({ className: "bg-black mt-2" })}
        >
          View Products
        </Link>
      </div>
    </section>
  );
};

export default memo(EmptyCart);
