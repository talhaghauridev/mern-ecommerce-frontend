import { logout } from "@redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useMessage } from "./hook";
const useLogout = () => {
  const [logutUser, { isError, isLoading, isSuccess, error, data }] =
    useLog();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    console.log("handleLogout");
    await logutUser();
    dispatch(logout());
  };

  useMessage(isSuccess && data?.message, error);
  return {
    isLoading,
    error,
    handleLogout,
  };
};

export default useLogout;
