import { Form, useFormik } from "formik";
import { useEffect, useState } from "react";
import { loginSchema, signUpSchema } from "../validation";
import { useNavigate } from "react-router-dom";
import {
  useLoginMutation,
  useSignupMutation,
} from "../../../redux/api/userApi";

const useLogin = () => {
  //Initial Values
  const initialValues = {
    email: "",
    password: "",
  };
  const [login] = useLoginMutation();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      if (values) {
        console.log(`Form submit successfully:Login ${values}`);
        login(values);
      }
    },
  });
  console.log("");
  return {
    formik,
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
  const [signup] = useSignupMutation();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      if (values) {
        console.log(values);
        console.log(`Form submit successfully:Signup`);
        await signup(values);
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
