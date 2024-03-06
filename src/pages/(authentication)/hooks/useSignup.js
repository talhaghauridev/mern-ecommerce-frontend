import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useSignupMutation } from "@redux/api/userApi";
import { useMessage, useUpload } from "@hooks/hook";
import { signUpSchema } from "../validation";
import { setCredentials } from "@redux/reducers/userReducer";

const useSignup = () => {
  const { handleFileChange, images: avatar } = useUpload();
  //Initial Values
  const initialValues = {
    name: "",
    email: "",
    password: "",
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
      if (!avatar) return;
      await handleSignUp({ avatar:avatar, ...values });
    },
    [handleSignUp,avatar]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: onSubmit,
  });

  //Handle Set Credentials
  const handleSetCredentials = useCallback(() => {
    if (isSuccess) {
      dispatch(setCredentials(data));
    }
  }, [dispatch, isSuccess, data]);

  useEffect(() => {
    handleSetCredentials();
  }, [handleSetCredentials]);

  useMessage(isSuccess && "Register successfully", error, "/user/profile");

  return {
    formik,
    isLoading,
    isSuccess,
    handleFileChange,
    avatar,
  };
};

export default useSignup;
