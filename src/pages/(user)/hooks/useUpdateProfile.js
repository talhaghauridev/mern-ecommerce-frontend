import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useUpdateMeMutation } from "@redux/api/userApi";
import { USER_INFO_KEY } from "@constants/index";
import useAuth from "@hooks/useAuth";
import { useMessage } from "@hooks/hook";
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
  const [image, setImage] = useState("");
  const { online, error: onlineError } = useSelector(
    (state) => state.onlineStatus
  );
  const initialValues = {
    name: "",
    email: "",
    avatar: "",
  };

  const [updateProfile, { isError, isLoading, isSuccess, data, error }] =
    useUpdateMeMutation();

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
        await handleUpdateProfile(values);
        const user = useAuth();
        console.log(user);
      } else {
        toast.error(onlineError);
      }
    },
    [handleUpdateProfile, online]
  );

  //Handle File Change
  const handleFileChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
    [image]
  );

  const formik = useFormik({
    initialValues: getProfileData() ? getProfileData() : initialValues,
    validationSchema: updateProfileSchema,
    onSubmit: onSubmit,
  });

  useMessage(data?.message, error, "/user/profile");
  return {
    formik,
    image,
    handleFileChange,
    isLoading: online ? isLoading : false,
    isError,
    data,
  };
};

export default useUpdateProfile;
