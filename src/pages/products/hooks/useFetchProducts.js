import { useEffect, useMemo, useState } from "react";
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
    productCount: data && data?.productCount,
    resultPerPage: data && data?.resultPerPage,
    filteredProductCount: data && data?.filteredProductCount,
    isLoading,
    filters,
    setFilters,
    page,
    setPage,
    isProducts,
  };
};

export { useFetchProducts };
