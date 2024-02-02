import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const ShippingDetial = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { shippingInfo } = useSelector((state) => state.cart);

  const address = useMemo(
    () =>
      `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.state}, ${shippingInfo?.phoneNo}, ${shippingInfo?.pinCode}`,
    [shippingInfo]
  );
  console.log(userInfo);
  return (
    <div className="flex flex-col gap-[20px] pt-[30px] pb-[50px]">
      <div className="confirm_heading">
        <h1>Shipping Info</h1>
      </div>
      <ul className="flex flex-col gap-[15px] items-start justify-center]">
        <li className="confirm_li">
          <h2> Name:</h2>
          <span>{userInfo?.name}</span>
        </li>
        <li className="confirm_li">
          <h2> Phone:</h2>
          <span>{shippingInfo?.phoneNumber}</span>
        </li>
        <li className="confirm_li">
          <h2> Address:</h2>
          <span> {address}</span>
        </li>
      </ul>
    </div>
  );
};

export default ShippingDetial;
