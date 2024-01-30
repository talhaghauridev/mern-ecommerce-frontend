import { useGetProductDetailsQuery } from "@redux/api/productApi";
import {  useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useProductDetail = () => {
  const { productId } = useParams();

  const { isError, isLoading, data, error, status } =
    useGetProductDetailsQuery(productId);

  useEffect(() => {
    if (isError) {
      console.log(error?.data?.message, status);
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  return {
    product: data?.product,
    error,
    isLoading,
    isError,
  };
};

export { useProductDetail };
