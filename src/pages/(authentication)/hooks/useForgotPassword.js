import { useFormik } from "formik";
import { useForgotPasswordMutation } from "@/redux/api/userApi";
import { useMessage } from "@/hooks/hook";
import { forgotSchema } from "../validation";
import { useCallback } from "react";

const useForgotPassword = () => {
   const initialValues = {
      email: ""
   };

   const [forgotPassword, { isLoading, isError, isSuccess, error, data, status }] = useForgotPasswordMutation();

   // Handle Forgot
   const handleForgot = useCallback(
      async (values) => {
         try {
            await forgotPassword(values);
         } catch (err) {
            console.log(err);
         }
      },
      [forgotPassword]
   );

   //Handle onSubmit
   const onSubmit = useCallback(
      async (values) => {
         await handleForgot(values);
      },
      [handleForgot]
   );

   const formik = useFormik({
      initialValues: initialValues,
      validationSchema: forgotSchema,
      onSubmit: onSubmit
   });

   useMessage(data?.message, error, "/");

   return {
      formik,
      isLoading,
      isSuccess
   };
};

export default useForgotPassword;
