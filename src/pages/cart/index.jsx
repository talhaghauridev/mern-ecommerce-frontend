import React from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./components/EmptyCart";

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
      <EmptyCart />
      <section id="cart" className="bg-[#f4f7fa]">
        <div className="container grid"></div>
      </section>
      
    </>
  );
};

export default Cart;
