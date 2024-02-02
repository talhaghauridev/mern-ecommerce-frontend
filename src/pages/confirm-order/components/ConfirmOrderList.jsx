import React, { memo } from "react";
import { useSelector } from "react-redux";
import ConfirmOrderCard from "./ConfirmOrderCard";

const ConfirmOrderList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <section id="confirmOrderList">
      <div className=" items-start justify-center flex flex-col gap-[20px]">
        <div className="confirm_heading">
            <h1>Your Cart Items</h1>
        </div>
        {cartItems &&
          cartItems.map((item, index) => (
            <ConfirmOrderCard {...item} key={index} />
          ))}
      </div>
    </section>
  );
};

export default memo(ConfirmOrderList);
