import { useEffect } from "react";

const useLogin = (userData) => {
  console.log(userData);
  const initialValues = {
    email: "",
    password: "",
  };
  const fomik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      //   login(values);
      console.log("Values Formik", values);
      if (values) {
        console.log(values.email);
      }
    },
  });

  return {
    fomik,
    message,
    error,
    redirect,
  };
};

const useSignUp = (userData) => {};

const useForgotPassword = (userData) => {};

const useResetPassword = (userData) => {};

export { useLogin, useSignUp, useForgotPassword, useResetPassword };
