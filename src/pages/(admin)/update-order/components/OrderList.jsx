import ConfirmOrderCard from "@/pages/confirm-order/components/ConfirmOrderCard";
import React, { memo } from "react";

const OrderList = ({ orderItems }) => {
  return (
    <section id="orderList">
      <div className=" items-start  flex flex-col gap-[20px] md:items-start item-center">
        {orderItems &&
          orderItems.map((item, index) => (
            <ConfirmOrderCard {...item} key={index} />
          ))}
      </div>
    </section>
  );
};

export default memo(OrderList);
