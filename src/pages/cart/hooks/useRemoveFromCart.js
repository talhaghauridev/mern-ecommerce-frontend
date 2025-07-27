import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/reducers/cartReducer";
import { toast } from "react-toastify";
const useRemoveFromCart = () => {
  const dispatch = useDispatch();
  const handleRemoveItem = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
      toast.success("Item Remove From Cart");
    },
    [dispatch]
  );

  return {
    handleRemoveItem,
  };
};

export default useRemoveFromCart;
