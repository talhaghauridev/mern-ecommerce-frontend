import { useGetProductDetailsQuery } from "@/redux/api/productApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useProductDetail = () => {
  const { productId } = useParams();
  const review = useSelector((state) => state.reviewApi);
  const { isError, isLoading, data, error, status, refetch } =
    useGetProductDetailsQuery(productId);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error, review]);

  return {
    product: data?.product,
    error,
    isLoading,
    isError,
    refetch,
  };
};

export { useProductDetail };
