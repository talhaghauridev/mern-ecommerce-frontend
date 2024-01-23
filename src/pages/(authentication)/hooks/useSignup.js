import { useMessage } from "@hooks/hook";
import { useSignupMutation } from "@redux/api/userApi";
import { useFormik } from "formik";

const useSignup = () => {
  //Initial Values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    avatar: "",
  };
  const [signup, { isLoading, isError, isSuccess, data, error }] =
    useSignupMutation();

  //Handle Submit

  const handleSignUp = async (userData) => {
    try {
      await signup(userData);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);
      await handleSignUp(values);
    },
  });

  useMessage(isSuccess && "User register successfully", error, "/cart");

  return {
    formik,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};

export default useSignup;
