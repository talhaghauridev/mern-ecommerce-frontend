import React, { Suspense, lazy, useMemo } from "react";
import { useSelector } from "react-redux";
import { MetaData } from "@/components/ui";
import CartLoading from "@/components/CartLoading";
const EmptyCart = lazy(() => import("./components/EmptyCart"));
const CartList = lazy(() => import("./components/CartList"));
const CartPriceBox = lazy(() => import("./components/CartPriceBox"));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const isCartItems = useMemo(
    () => (cartItems?.length > 0 ? true : false),
    [cartItems]
  );

  return (
    <>
      <MetaData title="Cart" />
      <section id="cart">
        {!isCartItems && (
          <Suspense
            fallback={
              <section id="emptyCart" className="w-full  py-[30px] px-[20px]">
                <div
                  className=" h-[485px] max-w-[900px] px-[15px] py-[90px] m-auto bg-white  flex items-center justify-center flex-col gap-[15px] "
                  style={{
                    boxShadow: "#2b34451a 0px 0px 16px",
                  }}
                >
                  <h1>Loading...</h1>
                </div>
              </section>
            }
          >
            <EmptyCart />
          </Suspense>
        )}
        {isCartItems && (
          <div className="container py-[90px]">
            <Suspense fallback={<CartLoading />}>
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
