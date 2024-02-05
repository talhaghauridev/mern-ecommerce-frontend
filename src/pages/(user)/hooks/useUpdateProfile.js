import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useUpdateMeMutation } from "@redux/api/userApi";
import { USER_INFO_KEY } from "@constants/index";
import useAuth from "@hooks/useAuth";
import { useMessage, useUpload } from "@hooks/hook";
import LocalStorage from "@utils/LocalStorage";
import { updateProfileSchema } from "../validation";
import { toast } from "react-toastify";

export const getProfileData = () => {
  const { name, email, avatar } = LocalStorage.get(USER_INFO_KEY);

  return {
    name,
    email,
    avatar: avatar?.url,
  };
};
const useUpdateProfile = () => {
  const { handleFileChange, images: avatar } = useUpload();
  const { online, error: onlineError } = useSelector(
    (state) => state.onlineStatus
  );
  const initialValues = {
    name: "",
    email: "",
  };

  const [updateProfile, { isError, isLoading, isSuccess, data, error }] =
    useUpdateMeMutation();

  const displayAvatar = useMemo(() => {
    return avatar == false ? getProfileData()?.avatar : avatar;
  }, [avatar, getProfileData]);

  const handleUpdateProfile = useCallback(
    async (values) => {
      try {
        await updateProfile(values);
      } catch (err) {
        console.log(err);
      }
    },
    [updateProfile]
  );

  //Handle onSubmit
  const onSubmit = useCallback(
    async (values) => {
      if (online) {
        await handleUpdateProfile({ displayAvatar, ...values });
        const user = useAuth();
        console.log(user);
      } else {
        toast.error(onlineError);
      }
    },
    [handleUpdateProfile, online]
  );

  const formik = useFormik({
    initialValues: getProfileData() ? getProfileData() : initialValues,
    validationSchema: updateProfileSchema,
    onSubmit: onSubmit,
  });

  useMessage(data?.message, error, "/user/profile");
  return {
    formik,
    avatar: displayAvatar,
    handleFileChange,
    isLoading: online ? isLoading : false,
    isError,
    data,
  };
};

export default useUpdateProfile;
