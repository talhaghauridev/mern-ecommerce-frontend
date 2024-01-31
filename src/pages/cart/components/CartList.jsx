import React, { memo } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import CartSkeleton from "@components/CartSkeleton";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <section id="cartList">
      <div className="cart_grid items-center justify-center">
        {cartItems &&
          cartItems.map((item, index) => <CartCard {...item} key={index} />)}
      </div>
    </section>
  );
};

export default memo(CartList);
