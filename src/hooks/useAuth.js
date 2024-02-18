import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@redux/reducers/userReducer";
import { useMeQuery } from "@redux/api/userApi";
import LocalStorage from "@utils/LocalStorage";

const useAuth = () => {
  const dispatch = useDispatch();
  const token = LocalStorage.get("userInfo")?.token;
  const { isError, isLoading, isSuccess, error, data } = useMeQuery();
  const { online } = useSelector((state) => state.onlineStatus);
  useEffect(() => {
    if (!isLoading && isSuccess && data) {
      dispatch(setCredentials(data, token));
    }
  }, [isLoading, data, isSuccess]);
  return {
    isLoading: online ? isLoading : false,
    error,
    user: data?.user,
    online,
  };
};

export default useAuth;
