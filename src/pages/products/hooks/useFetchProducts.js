import React, { useEffect } from "react";
import { useGetProductQuery } from "@redux/api/productApi";
import { toast } from "react-toastify";
const useFetchProducts = ({
  keyword = "",
  page = 1,
  price = [0, 25000],
  category = "",
  ratings = "",
}) => {
  console.log(
    (keyword = ""),
    (page = 1),
    (price = [0, 25000]),
    category,
    (ratings = "")
  );
  const { data, isLoading, error, isError } = useGetProductQuery({});

  useEffect(() => {
    if (isError) {
      console.log(error?.data?.message);
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
