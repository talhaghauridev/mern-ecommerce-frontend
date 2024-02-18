import { useMessage } from "@hooks/hook";
import {
  useGetOrderDetailsQuery,
  useUpdateOrderMutation,
} from "@redux/api/orderApi";
import { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useUpdateOrder = () => {
  const { orderId } = useParams();
  const { isLoading: orderDetialLoading, data } =
    useGetOrderDetailsQuery(orderId);
  const [updateOrder, { isError, isLoading, error, data: updateOrderData }] =
    useUpdateOrderMutation();
  const { userInfo } = useSelector((state) => state.user);
  const order = useMemo(() => (data?.order ? data.order : {}), [data]);

  const handelUpdateOrder = useCallback(
    (status) => {
      updateOrder({ id: orderId, status });
    },
    [updateOrder]
  );

  useMessage(updateOrderData?.message, error, "/admin/orders");
  return {
    isLoading,
    userInfo,
    order,
    handelUpdateOrder,
  };
};

export default useUpdateOrder;
