import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@redux/reducers/userReducer";
import { toast } from "react-toastify";

const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/logout`
      );
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
