import React, { Suspense, useMemo } from "react";
import { MetaData } from "@components/ui";
import useUpdateOrder from "./hooks/useUpdateOrder";
import OrderSummary from "./components/OrderSummary";
import AdminLoading from "../components/AdminLoading";
import OrderList from "./components/OrderList";
import OrderDetials from "./components/OrderDetials";
const UpdateOrder = () => {
  const { isLoading, order, handelUpdateOrder } = useUpdateOrder();

  if (isLoading) {
    return <AdminLoading />;
  }

  const orderStatus = useMemo(
    () => order?.orderStatus === "Delivered" && true,
    [order]
  );

  return (
    <>
      <MetaData title={`${order?._id || "Order Detials"}`} />
      <section id="orderDetials">
        <div className="flex flex-col ">
          <div className="orderDetials_container pt-[10px]">
            <div className="flex flex-col gap-[15px]">
              <OrderDetials {...order} />
            </div>
            {!orderStatus && (
              <OrderSummary
                handelUpdateOrder={handelUpdateOrder}
                order={order}
              />
            )}
          </div>
          <OrderList orderItems={order.orderItems} />
        </div>
      </section>
    </>
  );
};

export default UpdateOrder;
