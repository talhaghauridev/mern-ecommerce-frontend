import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <section id="cartList">
      <div className="cart_grid">
        {cartItems &&
          cartItems.map((item, index) => <CartCard {...item} key={index} />)}
      </div>
    </section>
  );
};

export default CartList;
