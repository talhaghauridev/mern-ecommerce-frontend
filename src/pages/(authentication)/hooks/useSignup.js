import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useSignupMutation } from "@redux/api/userApi";
import { useMessage } from "@hooks/hook";
import { signUpSchema } from "../validation";

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

  //Handle Signup
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

  //Handle onSubmit
  const onSubmit = useCallback(
    async (values) => {
      await handleSignUp(values);
    },
    [handleSignUp]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials(data));
    }
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
