import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useMessage } from "@/hooks/hook";
import { useUpdatePasswordMutation } from "@/redux/api/userApi";
import { updatePasswordSchema } from "../validation";
import { toast } from "react-toastify";

const useUpdatePassword = () => {
  const { online, error: onlineError } = useSelector(
    (state) => state.onlineStatus
  );
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [updatePassword, { isError, isLoading, data, error }] =
    useUpdatePasswordMutation();

  const handleUpdatePassword = useCallback(
    async (values) => {
      try {
        await updatePassword(values);
      } catch (err) {
        console.log(err);
      }
    },
    [updatePassword]
  );

  //Handle onSubmit
  const onSubmit = useCallback(
    async (values) => {
      if (online) {
        await handleUpdatePassword(values);
      } else {
        toast.error(onlineError);
      }
    },
    [handleUpdatePassword, online]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: updatePasswordSchema,
    onSubmit: onSubmit,
  });

  useMessage(data?.message, error, "/user/profile");

  return {
    formik,
    isLoading: online ? isLoading : false,
    isError,
    data,
  };
};

export default useUpdatePassword;
