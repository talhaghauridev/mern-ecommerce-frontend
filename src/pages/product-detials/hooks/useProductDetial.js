import { useGetProductDetailsQuery } from "@redux/api/productApi";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useProductDetail = () => {
  const { productId } = useParams();

  const { isError, isLoading, data, error } =
    useGetProductDetailsQuery(productId);

  useEffect(() => {
    if (isError) {
      console.log(error?.data?.message);
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  return {
    product:data?.product,
    error,
    isLoading,
    isError,
  };
};

export default useProductDetail;
