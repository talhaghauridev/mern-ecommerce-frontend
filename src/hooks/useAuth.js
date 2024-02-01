import { useMeQuery } from "@redux/api/userApi";
import { logout, setCredentials } from "@redux/reducers/userReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOnlineStatus } from "./hook";
import LocalStorage from "@utils/LocalStorage";

const useAuth = () => {
  const status = useOnlineStatus();
  const dispatch = useDispatch();
  const token  = LocalStorage.get("userInfo")?.token;
  const { isError, isLoading, isSuccess, error, data } = useMeQuery();

  const { userInfo } = useSelector((state) => state.user);
  console.log(userInfo);
  useEffect(() => {
    if (!isLoading && isSuccess && data) {
      dispatch(setCredentials(data, token));
    }
  }, [isLoading, data, isSuccess]);

  return {
    isLoading,
    error,
    user: data?.user,
  };
};

export default useAuth;
