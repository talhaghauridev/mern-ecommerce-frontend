import React, { useEffect, useMemo, useCallback } from "react";
import { toast } from "react-toastify";
import { useGetAdminOrdersQuery } from "@redux/api/orderApi";

const useFetchOrders = () => {
  const { isError, error, isLoading, isSuccess, data } =
    useGetAdminOrdersQuery();

  const calculateTotalAmount = useCallback((orders) => {
    return orders.reduce((total, order) => total + order.totalPrice, 0);
  }, []);

  const totalAmount = useMemo(() => {
    const rawTotalAmount = data?.orders ? calculateTotalAmount(data.orders) : 0;
    return rawTotalAmount.toLocaleString();
  }, [data?.orders, calculateTotalAmount]);

  const showErrorToast = useCallback(() => {
    if (!isLoading && isError && error) {
      toast.error(error?.data?.message);
    }
  }, [isLoading, isError, error]);

  useEffect(() => {
    showErrorToast();
  }, [showErrorToast]);

  return {
    orders: data?.orders ? data?.orders : [],
    isSuccess,
    isLoading,
    totalAmount,
  };
};

export default useFetchOrders;
