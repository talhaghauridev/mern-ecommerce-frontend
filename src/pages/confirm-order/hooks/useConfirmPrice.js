import { useMemo } from "react";
import { useSelector } from "react-redux";

const useConfirmPrice = () => {
   const { cartItems, shippingInfo } = useSelector((state) => state.cart);
   const totalProducts = useMemo(() => cartItems?.length || 0, [cartItems]);

   const subTotal = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0), [cartItems]);

   const shippingCharges = useMemo(() => (subTotal > 1000 ? 0 : 200), [subTotal]);

   const tax = useMemo(() => subTotal * 0.18, [subTotal]);

   const totalPrice = useMemo(() => subTotal + shippingCharges + tax, [subTotal, shippingCharges, tax]);

   const address = useMemo(
      () => `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.state}, ${shippingInfo?.phoneNumber}, ${shippingInfo?.pinCode}`,
      [shippingInfo]
   );

   return {
      subTotal,
      totalProducts,
      shippingCharges,
      totalPrice,
      tax,
      address
   };
};

export default useConfirmPrice;
