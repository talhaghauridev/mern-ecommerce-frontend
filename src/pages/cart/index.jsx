import { MetaData } from "@/components/ui";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import CartList from "./components/CartList";
import CartPriceBox from "./components/CartPriceBox";
import EmptyCart from "./components/EmptyCart";

const Cart = () => {
   const { cartItems } = useSelector((state) => state.cart);

   const isCartItems = useMemo(() => (cartItems?.length > 0 ? true : false), [cartItems]);

   return (
      <>
         <MetaData title="Cart" />
         <section id="cart">
            {!isCartItems && <EmptyCart />}
            {isCartItems && (
               <div className="container py-[90px]">
                  <CartList />
                  <CartPriceBox />
               </div>
            )}
         </section>
      </>
   );
};

export default Cart;
