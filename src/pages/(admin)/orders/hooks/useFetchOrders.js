import React, { useEffect } from "react"; 
import { toast } from "react-toastify";
import { useGetAdminOrdersQuery } from "@redux/api/orderApi";

const useFetchOrders = () => {
  const { isError, error, isLoading, isSuccess, data } =
    useGetAdminOrdersQuery();

  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error(error?.data?.message);
    }
  }, [error, isError, isLoading]);

  return {
    orders:data?.orders ? data?.orders:[],
    isSuccess,
    isLoading,
  };
};

export default useFetchOrders;
