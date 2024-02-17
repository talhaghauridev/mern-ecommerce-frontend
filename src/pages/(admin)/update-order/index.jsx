import React from "react";
import { MetaData } from "@components/ui";
import OrderList from "./components/OrderList";
import CartLoading from "@components/CartLoading";
import useUpdateOrder from "./hooks/useUpdateOrder";

const UpdateOrder = () => {
  const { isLoading, userInfo, address, order } = useUpdateOrder();

  if (isLoading) {
    return <ProfileLoading />;
  }
  return (
    <>
      <MetaData title={`${order?._id || "Order Detials"}`} />
      <section id="orderDetials">
        <div className="flex flex-col ">
          <h1 className="order_heading">Order Detials</h1>

          <div className="confirm_container py-[80px]">
            <div className="flex flex-col gap-[15px]">
              <ShippingDetial {...order}/>
              <Suspense fallback={<CartLoading />}>
                <OrderList orderItems={order?.orderItems} />
              </Suspense>
            </div>
            <ConfirmOrderBox />
          </div>

          <OrderList orderItems={order?.orderItems} />
        </div>
      </section>
    </>
  );
};

export default UpdateOrder;
