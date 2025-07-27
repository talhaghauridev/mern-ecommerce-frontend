import React, { memo } from "react";
import useSendPayment from "../hooks/useSendPayment";
import { Button } from "@/components/ui";

const ConfirmOrderBox = () => {
  const {
    handleSendPayment,
    isLoading,
    shippingCharges,
    subTotal,
    tax,
    totalPrice,
  } = useSendPayment();
  return (
    <div
      className="bg-white rounded-[8px] relative md:max-w-[350px] overflow-hidden h-fit max-w-full  ml-0 md:ml-auto w-full md:w-[340px]"
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
        <Button
          onClick={handleSendPayment}
          disabled={isLoading}
          className={`max-w-full flex items-center justify-center ${
            isLoading && "opacity-[0.7]"
          } `}
        >
          {isLoading ? "Processing..." : "Proceed to Payment"}
        </Button>
      </div>
    </div>
  );
};

export default memo(ConfirmOrderBox);
