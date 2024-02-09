import { useMessage } from "@hooks/hook";
import { useDeleteUserMutation } from "@redux/api/productApi";

const useDeleteUser = () => {
  const [deleteUser, { isLoading, isError, error, data }] =
    useDeleteUserMutation();

  useMessage(data?.message, error, "/admin/users");

  return {
    isLoading,
    deleteUser,
  };
};

export default useDeleteUser;
