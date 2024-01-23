
import { useLoginMutation }  from "@redux/api/userApi";
import { useFormik } from "formik";
import { loginSchema } from "../validation";
import { useMessage } from "@hooks/hook";

const useLogin = () => {
  //Initial Values
  const initialValues = {
    email: "",
    password: "",
  };
  const [login, { isError, isLoading, isSuccess, error, data }] =
    useLoginMutation();

  const handleLogin = async (userData) => {
    try {
      await login(userData);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await handleLogin(values);
    },
  });

  useMessage(isSuccess && "User login successfully", error, "/");

  if (isSuccess) {
    Cookies.set("token", data?.token);
  }

  return {
    formik,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};

export default useLogin;