import { useResetPasswordMutation }  from "@redux/api/userApi";
import { resetSchema } from "../validation";
import { useParams } from "react-router-dom";
import { useMessage } from "@hooks/hook";
import { useFormik } from "formik";

const useResetPassword = () => {
    const { token } = useParams();
    const initialValues = {
      password: "",
      confirmPassword: "",
    };
  
    const [resetPassword, { isLoading, isError, isSuccess, error, data }] =
      useResetPasswordMutation();
  
    const handleReset = async (values) => {
      try {
        // Pass token and values directly as separate arguments
        await resetPassword({ token, ...values });
      } catch (err) {
        console.error(err);
      }
    };
  
    const formik = useFormik({
      initialValues: initialValues,
      validationSchema: resetSchema,
      onSubmit: async (values) => {
        console.log(values);
        await handleReset(values);
      },
    });
  
    useMessage(data?.message, error, "/");
  
    console.log(formik, isLoading, isError, isSuccess, data);
  
    return {
      formik,
      isLoading,
      isError,
      isSuccess,
      data,
    };
  };
  

  export default useResetPassword;