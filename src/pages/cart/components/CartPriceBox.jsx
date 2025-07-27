import React, { memo } from "react";
import { buttonVariants } from "@/components/ui";
import { Link } from "react-router-dom";
import cn from "@/utils/cn";
import useCartPrice from "../hooks/useCartPrice";

const CartPriceBox = () => {
   const { totalProducts, totalPrice, checkoutHandler } = useCartPrice();

   return (
      <div
         className="bg-white rounded-[8px] relative md:max-w-[350px] overflow-hidden h-fit max-w-full "
         style={{
            boxShadow: "#03004717 0px 0px 4px 2px"
         }}>
         <div className="py-[50px] px-[30px] flex flex-col  gap-y-[25px] md:gap-y-[40px]">
            <div className="flex flex-col gap-y-[14px]">
               <ul className="flex items-center flex-col gap-y-[18px] md:gap-y-[20px]">
                  <li className=" cart_price">
                     Total Products:
                     <span> {totalProducts}</span>
                  </li>
                  <li className=" cart_price">
                     Total Price:
                     <span>${totalPrice}</span>
                  </li>
               </ul>
            </div>
            <Link
               className={cn(buttonVariants({ className: "max-w-full" }))}
               to={checkoutHandler}>
               Check Out
            </Link>
         </div>
      </div>
   );
};

export default memo(CartPriceBox);
