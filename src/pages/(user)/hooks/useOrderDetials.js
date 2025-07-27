import { useGetOrderDetailsQuery } from "@/redux/api/orderApi";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useOrderDetials = () => {
  const { orderId } = useParams();
  const { isError, isLoading, data, error } = useGetOrderDetailsQuery(orderId);
  const { userInfo } = useSelector((state) => state.user);
  const order = useMemo(() => (data?.order ? data.order : {}), [data]);

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
    order,
    userInfo,
    address,
  };
};

export default useOrderDetials;
