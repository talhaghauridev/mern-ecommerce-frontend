import React, { memo } from "react";
import useConfirmPrice from "../hooks/useConfirmPrice";
import cn from "@utils/cn";
import { buttonVariants } from "@components/ui";
import { Link } from "react-router-dom";

const ConfirmOrderBox = () => {
  const { totalProducts, totalPrice, shippingCharges, address, subTotal, tax } =
    useConfirmPrice();
  return (
    <div
      className="bg-white rounded-[8px] relative md:max-w-[350px] overflow-hidden h-fit max-w-full "
      style={{
        boxShadow: "#03004717 0px 0px 4px 2px",
      }}
    >
      <div className="py-[40px] px-[30px] flex flex-col gap-y-[25px] md:gap-y-[40px]">
        <div className="flex flex-col gap-y-[14px]">
          <h1 className="font-bold text-[26px] text-gray-800 relative font-Sans text-center mb-[12px]">
            Order Summary
          </h1>
          <ul className="flex items-center flex-col gap-y-[18px] md:gap-y-[20px]">
            <li className=" cart_price">
              SubTotal:
              <span> {subTotal}</span>
            </li>
            <li className=" cart_price">
              Shipping Charges:
              <span>${shippingCharges}</span>
            </li>
            <li className=" cart_price">
              GST:
              <span>${tax}</span>
            </li>
            <li className=" cart_price">
              Total:
              <span>${totalPrice}</span>
            </li>
          </ul>
        </div>
        <Link
          className={cn(buttonVariants({ className: "max-w-full" }))}
          to={"/"}
        >
          Check Out
        </Link>
      </div>
    </div>

    // <div className="confirrmOrder_Summary">
    //             <div className="summary_box flex flex-col items-center justify-center gap-20 p-40">
    //               <h1 className="font-bold text-2xl text-gray-800 relative">Order Summary</h1>
    //               <ul className="flex flex-col items-center justify-center gap-20 w-full border-t border-b border-gray-300 p-20">
    //                 <li className="flex items-center justify-between text-gray-800 font-bold text-lg w-full">
    //                   Subtotal
    //                   <span>${subtotal}</span>
    //                 </li>
    //                 <li className="flex items-center justify-between text-gray-800 font-bold text-lg w-full">
    //                   Shipping Charges
    //                   <span>${shippingCharges}</span>{" "}
    //                 </li>
    //                 <li className="flex items-center justify-between text-gray-800 font-bold text-lg w-full">
    //                   GST
    //                   <span>${tax}</span>{" "}
    //                 </li>
    //               </ul>
    //               <div className="total_price flex w-full items-center justify-between">
    //                 <b className="text-gray-800 font-bold text-lg">Total</b>
    //                 <span className="text-gray-800 font-bold text-lg">${totalPrice}</span>
    //               </div>
    //               <SubmitInput value="Proceed to Payment" formSubmit={() => {}} />
    //             </div>
    //           </div>
  );
};

export default memo(ConfirmOrderBox);
