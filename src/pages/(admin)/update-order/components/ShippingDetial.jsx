import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const ShippingDetial = (order) => {
  const { userInfo } = useSelector((state) => state.user);

  const { shippingInfo } = order;
  const address = useMemo(
    () =>
      `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.state}, ${shippingInfo?.phoneNumber}, ${shippingInfo?.pinCode}`,
    [shippingInfo]
  );

  return (
    <div className="flex flex-col gap-[20px] pt-[50px] pb-[40px] md:pb-[80px]">
      <div className="flex flex-col gap-[20px] py-[20px] ">
        <div className="confirm_heading">
          <h1>Shipping Info</h1>
        </div>
        <ul className="flex flex-col gap-[15px] items-start justify-center]">
          <li className="order_li">
            <h2> Name:</h2>
            <span>{userInfo?.name}</span>
          </li>
          <li className="order_li">
            <h2> Phone:</h2>
            <span>{order.shippingInfo?.phoneNo}</span>
          </li>
          <li className="order_li">
            <h2> Address:</h2>
            <span> {address}</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-[20px] py-[20px] ">
        <div className="confirm_heading">
          <h1>Payment Info</h1>
        </div>
        <ul className="flex flex-col gap-[15px] items-start justify-center]">
          <li className="order_li">
            <h2> Payment Status:</h2>
            <span className="text-[green]">{order.paymentInfo.status}</span>
          </li>
          <li className="order_li">
            <h2> Amount:</h2>
            <span>{order.totalPrice}</span>
          </li>
          <li className="order_li">
            <h2> Order Status:</h2>
            <span> {order.orderStatus}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShippingDetial;
