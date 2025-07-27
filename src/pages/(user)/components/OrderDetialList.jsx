import React, { memo } from "react";
import ConfirmOrderCard from "@/pages/confirm-order/components/ConfirmOrderCard";

const OrderDetialList = ({ orderItems }) => {
  return (
    <section id="orderDetialList">
      <div className=" items-start  flex flex-col gap-[20px] md:items-start item-center">
        <div className="confirm_heading">
          <h1>Order Items</h1>
        </div>
        {orderItems &&
          orderItems.map((item, index) => (
            <ConfirmOrderCard {...item} key={index} />
          ))}
      </div>
    </section>
  );
};

export default memo(OrderDetialList);
