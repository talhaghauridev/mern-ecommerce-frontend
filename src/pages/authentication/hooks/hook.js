import { Form, useFormik } from "formik";
import { useEffect, useState } from "react";
import { loginSchema, signUpSchema } from "../validation";
import { useNavigate } from "react-router-dom";
import {
  useLoginMutation,
  useSignupMutation,
} from "../../../redux/api/userApi";

const useLogin = () => {
  let user = {};
  //Initial Values
  const initialValues = {
    email: "",
    password: "",
  };
  const [login, { isError, isLoading, isSuccess, error,data }] = useLoginMutation();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      if (values) {
        console.log(`Form submit successfully:Login ${values}`);
        try {
          const { data } = await login(values);
          user = data?.user;
        } catch (error) {
          console.log(error);
        }
      }
    },
  });
  console.log(data);
  return {
    formik,
    isLoading,
    isSuccess,
    isError,
    error,
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
  const [signup, { isLoading, isError, data, error }] = useSignupMutation();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      if (values) {
        console.log("Form values:", values);
        console.log("Form submit successfully: Signup");

        try {
          const response = await signup(values);
          console.log("Signup response:", response);
        } catch (error) {
          console.error("Error during signup:", error?.response?.data?.message);
        }
      }
    },
  });

  return {
    formik,
  };
};

const useForgotPassword = (userData) => {};

const useResetPassword = (userData) => {};

const useMessage = (message, error, redirect) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (message) {
      redirect && navigate(redirect);
      return message;
    }
    if (error) {
      return error;
    }
  }, [message, error, redirect]);

  return { message, error };
};
export { useLogin, useSignUp, useForgotPassword, useResetPassword, useMessage };
