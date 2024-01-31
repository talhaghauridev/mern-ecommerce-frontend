import React, { Suspense, lazy, useMemo } from "react";
import { MetaData } from "@components/ui";
import { useSelector } from "react-redux";
import CartLoading from "@components/CartLoading";
const EmptyCart = lazy(() => import("./components/EmptyCart"));
const CartList = lazy(() => import("./components/CartList"));
const CartPriceBox = lazy(() => import("./components/CartPriceBox"));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  const isCartItems = useMemo(
    () => (cartItems?.length > 0 ? true : false),
    [cartItems]
  );

  return (
    <>
      <MetaData title="Cart" />
      <section id="cart">
        {!isCartItems && <EmptyCart />}
        {isCartItems && (
          <div className="container py-[90px]">
            <Suspense fallback={isCartItems && <CartLoading />}>
              <CartList />
            </Suspense>
            <CartPriceBox />
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
