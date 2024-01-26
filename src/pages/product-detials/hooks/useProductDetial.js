import { useGetProductDetailsQuery } from "@redux/api/productApi";
import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useProductDetial = () => {
  const { productId } = useParams();

  const handleFetch = useCallback(() => {
    return useGetProductDetailsQuery(productId);
  }, [productId]);
  const { isError, isLoading, data, error } = useCallback(
    () => handleFetch(),
    [productId]
  );
  useEffect(() => {
    if (isError) {
        console.log(error?.data?.message);
      return toast.error(error?.data?.message);
    }
    handleFetch();
  }, [productId]);
  return {
    data,
    error,
    isLoading,
    isError,
  };
};

export default useProductDetial;
