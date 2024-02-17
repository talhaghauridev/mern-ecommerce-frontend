import { useGetOrdersQuery } from "@redux/api/orderApi";
import { useEffect } from "react";
import { toast } from "react-toastify";

const useFetchOrders = () => {
  const { isError, isLoading, data,error } = useGetOrdersQuery();

  console.log(data);
useEffect(()=>{
if(isError && error){
    toast.error(error?.data?.message)
}
},[isError])

  return {
    isLoading,
    orders: data?.orders ? data.orders : [],
  };
};

export default useFetchOrders;
