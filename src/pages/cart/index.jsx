import React from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./components/EmptyCart";
import { MetaData } from "@components/ui";
import CartPriceBox from "./components/CartPriceBox";
import CartList from "./components/CartList";

const Cart = () => {
  const { cartItems, taxPrice, shippingPrice, totalPrice, itemsPrice } = {
    cartItems: null,
    taxPrice: 200,
    shippingPrice: 300,
    totalPrice: 2000,
    itemsPrice: 20,
  };

  const navigate = useNavigate();
  // const dispatch = useDispatch()

  // const totalItems = cartItems.reduce((acc, item) => acc + +item.qty, 0)

  const handleDeleteItem = (id) => {
    // dispatch(removeFromCart(id))
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <>
      <MetaData title="Cart" />
      <section id="cart" className="">
        <div className="container py-[90px]">
          <CartList />
          <CartPriceBox />
        </div>
      </section>
    </>
  );
};

export default Cart;
