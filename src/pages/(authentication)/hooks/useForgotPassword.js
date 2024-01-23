import { useMessage } from "@hooks/hook";
import { useForgotPasswordMutation } from "@redux/api/userApi";
import { useFormik } from "formik";

const useForgotPassword = () => {
  const initialValues = {
    email: "",
  };

  const [
    forgotPassword,
    { isLoading, isError, isSuccess, error, data, status },
  ] = useForgotPasswordMutation();

  const handleForgot = async (values) => {
    console.log("For");
    try {
      await forgotPassword(values);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgotSchema,
    onSubmit: async (values) => {
      console.log(values);
      await handleForgot(values);
    },
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





export default useForgotPassword;
