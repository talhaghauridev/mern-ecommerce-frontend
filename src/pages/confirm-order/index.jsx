import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { MetaData } from "@/components/ui";
import CartLoading from "@/components/CartLoading";
import Stepper from "@/components/Stepper";
import ConfirmOrderBox from "./components/ConfirmPriceBox";
import ShippingDetial from "./components/ShippingDetial";
const ConfirmOrderList = lazy(() => import("./components/ConfirmOrderList"));

const ConfirmOrder = () => {
   const { cartItems } = useSelector((state) => state.cart);

   return (
      <>
         <MetaData title={"Confirm Order"} />
         <section id="confirmOrder">
            <Stepper activeStep={1} />
            <div className="container">
               {cartItems && (
                  <div className="confirm_container py-[80px]">
                     <div className="flex flex-col gap-[15px]">
                        <ShippingDetial />
                        <Suspense fallback={<CartLoading />}>
                           <ConfirmOrderList />
                        </Suspense>
                     </div>
                     <ConfirmOrderBox />
                  </div>
               )}
            </div>
         </section>
      </>
   );
};

export default ConfirmOrder;
