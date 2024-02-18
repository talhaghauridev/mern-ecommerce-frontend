import { useEffect, useMemo } from "react";
import { useGetProductQuery } from "@redux/api/productApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const useFetchProducts = () => {
  const { data, isLoading, error, isError } = useGetProductQuery({});
  const isProducts = useMemo(() => {
    if (
      (!isLoading && !data?.products?.length) ||
      data?.products?.length === 0 ||
      null ||
      undefined
    ) {
      return false;
    }
    return true;
  }, [isLoading, data?.products]);

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
    isProducts,
  };
};

export { useFetchProducts };
