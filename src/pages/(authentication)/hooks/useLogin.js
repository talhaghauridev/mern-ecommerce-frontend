import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useLoginMutation } from "@/redux/api/userApi";
import { setCredentials } from "@/redux/reducers/userReducer";
import { useMessage } from "@/hooks/hook";
import { loginSchema } from "../validation";

const useLogin = () => {
   //Initial Values
   const initialValues = {
      email: "",
      password: ""
   };

   const [login, { isError, isLoading, isSuccess, error, data }] = useLoginMutation();
   const dispatch = useDispatch();

   //Handle Login

   const handleLogin = useCallback(
      async (userData) => {
         try {
            await login(userData);
         } catch (err) {
            console.log(err);
         }
      },
      [login]
   );

   //Handle onSubmit
   const onSubmit = useCallback(
      async (values) => {
         await handleLogin(values);
      },
      [handleLogin]
   );
   const formik = useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: onSubmit
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

   useMessage(isSuccess && "User login successfully", error, "/user/profile");

   return {
      formik,
      isLoading,
      isSuccess,
      isError,
      error,
      data
   };
};

export default useLogin;
