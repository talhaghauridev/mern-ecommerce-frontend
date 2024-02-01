import { useMeQuery } from "@redux/api/userApi";
import { logout } from "@redux/reducers/userReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useOnlineStatus } from "./hook";

const useAuth = () => {
  const status = useOnlineStatus();
  const dispatch = useDispatch();
  const { isError, isLoading, isSuccess, error, data } = useMeQuery();

  useEffect(() => {
    if (status === "online" && !isLoading && isError && error) {
      dispatch(logout());
    }
  }, [isError, isLoading, error]);

  return {
    isLoading,
    error,
    user: data?.user,
  };
};

export default useAuth;
