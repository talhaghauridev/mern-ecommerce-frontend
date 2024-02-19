import React, { useEffect, useMemo } from "react"; 
import { toast } from "react-toastify";
import { useGetAdminOrdersQuery } from "@redux/api/orderApi";

const useFetchOrders = () => {
  const { isError, error, isLoading, isSuccess, data } =
    useGetAdminOrdersQuery();

    const calculateTotalAmount = (orders) => {
      return orders.reduce((total, order) => total + order.totalPrice, 0);
    };
  
    // Memoize the totalAmount
    const totalAmount = useMemo(() => {
      const rawTotalAmount = data?.orders ? calculateTotalAmount(data.orders) : 0;
      return rawTotalAmount.toLocaleString();
    
    }, [data?.orders,calculateTotalAmount]);


  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error(error?.data?.message);
    }
  }, [error, isError, isLoading]);

  return {
    orders:data?.orders ? data?.orders:[],
    isSuccess,
    isLoading,
    totalAmount
  };
};

export default useFetchOrders;
