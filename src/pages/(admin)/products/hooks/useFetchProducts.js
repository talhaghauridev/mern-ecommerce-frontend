import React, { useEffect, useMemo } from "react";
import { useGetAdminProductsQuery } from "@redux/api/productApi";
import { toast } from "react-toastify";

const useFetchProducts = () => {
  const { isError, error, isLoading, isSuccess, data } =
    useGetAdminProductsQuery();

  const calculateTotalPrice = useMemo(() => {
    return (products) =>
      products.reduce((total, product) => total + product.price, 0);
  }, []);

  const totalProductsPrice = useMemo(() => {
    return data?.products ? calculateTotalPrice(data.products) : 0;
  }, [data?.products, calculateTotalPrice]);

  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error(error?.data?.message);
    }
  }, [error, isError, isLoading]);

  return {
    products: data?.products ? data?.products : [],
    isSuccess,
    isLoading,
    totalProductsPrice
  };
};

export default useFetchProducts;
