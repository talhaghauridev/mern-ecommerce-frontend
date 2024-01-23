import { emptyCart } from "@assets/images";
import { Image, buttonVariants } from "@components/ui";
import React, { memo } from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section
      id="emptyCart"
      className="w-full bg-[#f4f7fa] py-[30px] px-[20px] h-[87vh]"
    >
      <div className="container max-w-[1000px] bg-white  flex items-center justify-center flex-col gap-[10px] ">
        <Image
          src={emptyCart}
          alt={"Empty Cart Image"}
          className={"w-full max-w-[250px]"}
        />
        <h3 className="text-black text-[20px]">No Products in Your Cart</h3>
        <Link
          to={"/products"}
          className={buttonVariants({ className: "bg-black" })}
        >
          View Products
        </Link>
    
      </div>
    </section>
  );
};

export default memo(EmptyCart);
