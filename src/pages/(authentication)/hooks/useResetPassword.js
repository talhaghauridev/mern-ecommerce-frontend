import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useResetPasswordMutation } from "@redux/api/userApi";
import { useMessage } from "@hooks/hook";
import { resetSchema } from "../validation";
import { useCallback } from "react";

const useResetPassword = () => {
  const { token } = useParams();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const [resetPassword, { isLoading, isError, isSuccess, error, data }] =
    useResetPasswordMutation();
  // Handle Reset
  const handleReset = useCallback(
    async (values) => {
      try {
        await resetPassword({ token, ...values });
      } catch (err) {
        console.error(err);
      }
    },
    [resetPassword, token]
  );

  //Handle onSubmit
  const onSubmit = useCallback(
    async (values) => {
      await handleReset(values);
    },
    [handleReset]
  );
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: resetSchema,
    onSubmit: onSubmit,
  });

  useMessage(data?.message, error, "/login");

  return {
    formik,
    isLoading,
    isSuccess,
  };
};

export default useResetPassword;
