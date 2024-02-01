import { useFormik } from "formik";
import React from "react";
import { updateProfileSchema } from "../validation";
import { useUpdateMeMutation } from "@redux/api/userApi";
import { useMessage } from "@hooks/hook";
import useAuth from "@hooks/useAuth";
import LocalStorage from "@utils/LocalStorage";
import { USER_INFO } from "@constants/index";

export const getProfileData = () => {
  const { name, email, avatar } = LocalStorage.get(USER_INFO);
  return {
    name,
    email,
    avatar: avatar?.url,
  };
};
const useUpdateProfile = () => {
  const initialValues = {
    name: "",
    email: "",
    avatar: "",
  };

  const [updateProfile, { isError, isLoading, isSuccess, data, error }] =
    useUpdateMeMutation();

  const handleUpdateProfile = async (values) => {
    try {
      await updateProfile(values);
    } catch (err) {
      console.log(err);
    }
  };


  const formik = useFormik({
    initialValues: getProfileData() ? getProfileData() : initialValues,
    validationSchema: updateProfileSchema,
    onSubmit: async (values) => {
      console.log(values);
      await handleUpdateProfile(values);
    },
  });

  const { isLoading: authLoading } = useAuth();
  useMessage(data?.message, error?.data?.message, "/user/profile");
  return {
    formik,
    isLoading: authLoading || isLoading,
    isError,
    data,
  };
};

export default useUpdateProfile;
