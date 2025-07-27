import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useUpdateMeMutation } from "@/redux/api/userApi";
import { USER_INFO_KEY } from "@/constants/index";
import { useMessage, useUpload } from "@/hooks/hook";
import LocalStorage from "@/utils/LocalStorage";
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
    return avatar ? avatar : getProfileData()?.avatar;
  }, [avatar]);

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
    async ({ name, email }) => {
      if (online) {
        await handleUpdateProfile({
          avatar: displayAvatar,
          ...{ name, email },
        });
      } else {
        toast.error(onlineError);
      }
    },
    [handleUpdateProfile, online, displayAvatar, avatar, onlineError]
  );

  const formik = useFormik({
    initialValues: useMemo(() => getProfileData() || initialValues, []),
    validationSchema: updateProfileSchema,
    onSubmit: onSubmit,
    enableReinitialize: true,
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
