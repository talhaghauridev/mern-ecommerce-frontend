import { useMessage } from "@hooks/hook";
import { useSignupMutation } from "@redux/api/userApi";
import { useFormik } from "formik";
import { signUpSchema } from "../validation";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const useSignup = () => {
  //Initial Values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    avatar: "",
  };
  const [signup, { isLoading, isError, isSuccess, data, error, originalArgs }] =
    useSignupMutation();
  const dispatch = useDispatch();

  //Handle Submit

  const handleSignUp = useCallback(
    async (userData) => {
      try {
        await signup(userData);
      } catch (err) {
        console.log(err);
      }
    },
    [signup]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);
      await handleSignUp(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials(data));
      console.log(data);
    }
    console.log("useSignup useEffect");
  }, [isSuccess, data, dispatch]);

  useMessage(isSuccess && "User register successfully", error, "/user/profile");

  return {
    formik,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    originalArgs,
  };
};

export default useSignup;
