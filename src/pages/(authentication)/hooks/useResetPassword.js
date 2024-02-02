import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useResetPasswordMutation } from "@redux/api/userApi";
import { useMessage } from "@hooks/hook";
import { resetSchema } from "../validation";

const useResetPassword = () => {
  const { token } = useParams();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const [resetPassword, { isLoading, isError, isSuccess, error, data }] =
    useResetPasswordMutation();

  // Handle Reset
  const handleReset = async (values) => {
    try {
      await resetPassword({ token, ...values });
    } catch (err) {
      console.error(err);
    }
  };

  //Handle onSubmit
  const onSubmit = useCallback(
    async (values) => {
      await resetPassword(values);
    },
    [handleReset]
  );
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: resetSchema,
    onSubmit: onSubmit,
  });

  useMessage(data?.message, error, "/");

  return {
    formik,
    isLoading,
    isError,
    isSuccess,
    data,
  };
};

export default useResetPassword;
