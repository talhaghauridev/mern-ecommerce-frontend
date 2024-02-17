import { useMessage } from "@hooks/hook";
import { useDeleteOrderMutation } from "@redux/api/orderApi";

const useDeleteOrder = () => {
  const [deleteOrder, { isLoading, isError, error, data }] =
    useDeleteOrderMutation();

  useMessage(data?.message, error);

  return {
    isLoading,
    deleteOrder,
  };
};

export default useDeleteOrder;
