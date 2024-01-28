import { useEffect, useState } from "react";
import { useGetProductQuery } from "@redux/api/productApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { FILTER_PRICE } from "@constants/index";
const useFetchProducts = () => {
  const { search } = useParams();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    price: FILTER_PRICE,
    category: "",
    ratings: null,
  });
  const { category, price, ratings } = filters;

  const { data, isLoading, error, isError } = useGetProductQuery({
    keyword: search || "",
    category,
    price,
    ratings,
    page,
  });

  useEffect(() => {
    if (isError) {
      console.log(error?.data?.message);
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  console.log(data?.products);
  return {
    products: data && data?.products,
    isLoading,
    filters,
    setFilters,
    page,
    setPage,
  };
};

export { useFetchProducts };
