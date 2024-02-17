import useOrderDetials from "@pages/(user)/hooks/useOrderDetials";
import {
  useGetOrderDetailsQuery,
  useUpdateOrderMutation,
} from "@redux/api/orderApi";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useUpdateOrder = () => {
  const { orderId } = useParams();
  const {isLoading:orderDetialLoading,data} = useOrderDetials(orderId)
  const [updateOrder, { isError, isLoading, error }] =
    useUpdateOrderMutation();
  const { userInfo } = useSelector((state) => state.user);
  const order = useMemo(() => (data?.order ? data.order : {}), [data]);
  console.log(order);

  const address = useMemo(
    () =>
      `${order.shippingInfo?.address}, ${order.shippingInfo?.city}, ${order.shippingInfo?.state}, ${order.shippingInfo?.phoneNo}, ${order.shippingInfo?.pinCode}`,
    [order.shippingInfo]
  );
  useEffect(() => {
    if (isError && error) {
      toast.error(error?.data?.message);
    }
  }, [isError]);
  

  return {
    isLoading,
    userInfo,
    order,
    address,
    updateOrder,
  };
};

export default useUpdateOrder;
