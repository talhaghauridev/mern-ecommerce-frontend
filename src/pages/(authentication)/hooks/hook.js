import { Form, useFormik } from "formik";
import { useEffect, useState } from "react";
import {
  forgotSchema,
  loginSchema,
  resetSchema,
  signUpSchema,
} from "../validation";
import { useNavigate, useParams } from "react-router-dom";
import {
  useForgotPasswordMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useSignupMutation,
} from "../../../redux/api/userApi";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

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

//useMessagehook
const useMessage = (message, error, redirect = "") => {
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message || error?.error);
    }

    if (message) {
      toast.success(message);
      redirect && navigate(redirect);
    }
  }, [error, message]);
};
export { useLogin, useSignUp, useForgotPassword, useResetPassword, useMessage };
