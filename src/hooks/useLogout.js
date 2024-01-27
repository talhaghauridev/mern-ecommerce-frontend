import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMessage } from "./hook";
import { useLogoutQuery } from "@redux/api/userApi";
import { logout } from "@redux/reducers/userReducer";

const useLogout = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(logout());
  };

  return {
    handleLogout: fetchData,
  };
};

export default useLogout;
