import { useMemo } from "react";
import { useSelector } from "react-redux";

const useCartPrice = () => {
   const { cartItems } = useSelector((state) => state.cart);
   const { userInfo } = useSelector((state) => state.user);
   const totalProducts = useMemo(() => cartItems?.length || 0, [cartItems]);

   const totalPrice = useMemo(() => cartItems?.reduce((acc, item) => acc + item?.quantity * item?.price, 0) || 0, [cartItems]);

   const checkoutHandler = useMemo(() => (userInfo ? "/shipping" : "/login"), [userInfo]);

   return {
      totalPrice,
      totalProducts,
      checkoutHandler
   };
};

export default useCartPrice;
