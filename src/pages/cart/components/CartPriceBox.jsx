import { Button } from "@components/ui";
import React from "react";

const CartPriceBox = () => {
  const cartItems = [{}];
  return (
    <div
      className="bg-white rounded-[8px] relative max-w-[200px]"
      style={{
        boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
      }}
    >
      <div className="py-[50px] px-[30px] flex flex-col gap-y-[30px]">
        <ul className="flex flex-col gap-y-[14px]">
          <li className="flex items-center justify-between">
            <h2 className="text-[15px] font-Poppins ">Total Products:</h2>
            <span> {cartItems?.length}</span>
          </li>
          <li>
            <h2 className="flex items-center justify-between">Total Price:</h2>
            <span>
              $
              {cartItems?.reduce(
                (acc, item) => acc + item.quanity * item.price,
                0
              )}
            </span>
          </li>
        </ul>
        <Button>Check Out</Button>
      </div>
    </div>
  );
};

export default CartPriceBox;
