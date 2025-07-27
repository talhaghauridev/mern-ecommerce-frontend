import { Success } from "@/assets/images";
import { Image, MetaData, buttonVariants } from "@/components/ui";
import { CART_ITEMS } from "@/constants/index";
import LocalStorage from "@/utils/LocalStorage";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SuccessOrder = () => {
  useEffect(() => {
    LocalStorage.remove(CART_ITEMS);
  }, []);

  return (
    <>
      <MetaData title="Success Order" />
      <section id="successOrder">
        <div className="container py-[90px] h-[80vh] flex items-center justify-center flex-col gap-[15px]">
          <Image
            src={Success}
            alt={"success-order"}
            className={
              "w-[140px] h-[140px] max-w-[100%] max-h-[100%] rounded-[100%]"
            }
          />
          <h1 className="text-gray-800 text-[32px] font-[700] font-Poppins ">
            Success Order
          </h1>

          <Link to="/user/orders" className={buttonVariants()}>
            View Orders
          </Link>
        </div>
      </section>
    </>
  );
};

export default SuccessOrder;
