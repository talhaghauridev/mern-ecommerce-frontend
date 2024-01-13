import { Form, useFormik } from "formik";
import { useEffect, useState } from "react";
import { loginSchema, signUpSchema } from "../validation";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../redux/api/userApi";

const useLogin = () => {
  //Initial Values
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      if (values) {
        console.log(values);
        console.log(`Form submit successfully:Login`);
      }
    },
  });

  return {
    formik,
  };
};

const useSignUp = () => {
  //Initial Values
  const initialValues = {
    name:"",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      if (values) {
        console.log(values);
        console.log(`Form submit successfully:SignUP`);
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
