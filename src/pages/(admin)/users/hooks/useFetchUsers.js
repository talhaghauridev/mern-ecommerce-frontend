import React, { useEffect } from "react";
import { useGetAllUsersQuery } from "@redux/api/userApi";
import { toast } from "react-toastify";

const useFetchUsers = () => {
  const { isError, error, isLoading, isSuccess, data } = useGetAllUsersQuery();

  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error(error?.data?.message);
    }
  }, [error, isError, isLoading]);

  return {
    users: data?.users ? data?.users : [],
    isSuccess,
    isLoading,
  };
};

export default useFetchUsers;
