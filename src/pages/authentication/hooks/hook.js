import { Form, useFormik } from "formik";
import { useEffect } from "react";
import { loginSchema } from "../validation";

const useLogin = () => {
  //Initial Values
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if (values) {
        console.log(values);
        console.log(`Form submit successfully`);
      }
    },
  });

  return {
    formik,
  };
};

const useSignUp = (userData) => {};

const useForgotPassword = (userData) => {};

const useResetPassword = (userData) => {};

export { useLogin, useSignUp, useForgotPassword, useResetPassword };
