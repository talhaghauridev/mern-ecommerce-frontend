import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import cn from "@utils/cn";
import formatDate from "@utils/formatDate";

const ShippingDetial = (order) => {
  const { userInfo } = useSelector((state) => state.user);

  const { shippingInfo } = order;
  const address = useMemo(
    () =>
      `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.state}, ${shippingInfo?.phoneNo}, ${shippingInfo?.pinCode}`,
    [shippingInfo]
  );

  return (
    <div className="flex flex-col gap-[0px] pt-[50px] pb-[40px] md:pb-[40px]">
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
            <span className="text-[green]">{order?.paymentInfo?.status}</span>
          </li>
          <li className="order_li">
            <h2> Amount:</h2>
            <span>{order?.totalPrice}</span>
          </li>
          <li className="order_li">
            <h2> Order Status:</h2>
            <span
              className={cn(
                order?.orderStatus === "Processing" ? "processing" : "success"
              )}
            >
              {order?.orderStatus}
            </span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-[20px] py-[20px] ">
            <div className="confirm_heading flex gap-[8px] ">
              <h1 className="font-Poppins text-[20px]">CreatedAt</h1>
              <li className="order_li ">
                <b className="items-center justify-start font-Poppins mt-[2px] text-[15px] ">
                  {formatDate(order?.createdAt)}
                </b>
              </li>
            </div>
          </div>
    </div>
  );
};

export default memo(ShippingDetial);
