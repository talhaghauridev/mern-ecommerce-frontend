import { useGetAdminProductsQuery } from "@redux/api/productApi";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const useFetchProducts = () => {
  const { isError, error, isLoading, isSuccess, data } =
    useGetAdminProductsQuery();

  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error(error?.data?.message);
    }
  }, [error, isError, isLoading]);

  return {
    products:data?.products ? data?.products:[],
    isSuccess,
    isLoading,
  };
};

export default useFetchProducts;
