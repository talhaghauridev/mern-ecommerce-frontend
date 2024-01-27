import React, { useEffect } from "react";
import { useGetProductQuery } from "@redux/api/productApi";
import { toast } from "react-toastify";
const useFetchProducts = () => {
  const { data, isLoading, error, isError } = useGetProductQuery({});

  useEffect(() => {
    if (isError) {
       toast.error(error?.data?.message);
    }
  }, [isError, error]);

  return {
    products: data && data?.products,
    isLoading,
    error,
    isError,
  };
};

export { useFetchProducts };
