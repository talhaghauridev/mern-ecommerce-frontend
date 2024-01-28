import { useGetProductDetailsQuery } from "@redux/api/productApi";
import { addToCart } from "@redux/reducers/cartReducer";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
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

const useAddToCart = () => {
  const dispatch = useDispatch();
  const handleAddToCart = useCallback(
    (product) => {
      const { name, descripton, price, images, category, _id, stock } = product;
      dispatch(
        addToCart({ name, descripton, price, images, category, _id, stock })
      );
      toast.success("Item add to cart");
    },
    [dispatch]
  );

  return {
    handleAddToCart,
  };
};

export { useProductDetail, useAddToCart };
