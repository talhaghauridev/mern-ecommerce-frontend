import { Form, useFormik } from "formik";
import { useEffect, useState } from "react";
import { forgotSchema, loginSchema, signUpSchema } from "../validation";
import { useNavigate } from "react-router-dom";
import {
  useLoginMutation,
  useSignupMutation,
} from "../../../redux/api/userApi";
import { toast } from "react-toastify";

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
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error");
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await handleLogin(values);
    },
  });

  useMessage(isSuccess && "User login", error?.data?.message, "/");

  return {
    formik,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};

const useSignUp = () => {
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
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message || "Error");
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

  useMessage(
    isSuccess && "User register successfully",
    error?.data?.message,
    "/cart"
  );

  return {
    formik,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};

const useForgotPassword = () => {
  const initialValues = {
    email: "",
  };

  const handleForgot = () => {};

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgotSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return {
    formik,
  };
};

const useResetPassword = () => {};

//useMessagehook
const useMessage = (message, error, redirect = "") => {
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message || error);
    }

    if (message) {
      toast.success(message);
      redirect && navigate(redirect);
    }
  }, [error, message]);
};
export { useLogin, useSignUp, useForgotPassword, useResetPassword, useMessage };
