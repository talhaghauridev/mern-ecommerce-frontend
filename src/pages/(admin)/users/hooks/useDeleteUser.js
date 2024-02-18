import { useDeleteUserMutation } from "@redux/api/userApi";
import { useMessage } from "@hooks/hook";

const useDeleteUser = () => {
  const [deleteUser, { isLoading, error, data }] =
    useDeleteUserMutation();

  useMessage(data?.message, error, "/admin/users");

  return {
    isLoading,
    deleteUser,
  };
};

export default useDeleteUser;
