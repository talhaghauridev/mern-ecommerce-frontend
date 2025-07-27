import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/reducers/userReducer";
import { toast } from "react-toastify";
import { baseUrl } from "@/utils/ApiUrl";

const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    try {
      const response = await fetch(`${baseUrl}logout`);
      const data = await response.json();
      dispatch(logout());
      toast.success(data?.message);
      console.log(data);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }, []);

  return {
    handleLogout,
  };
};

export default useLogout;
