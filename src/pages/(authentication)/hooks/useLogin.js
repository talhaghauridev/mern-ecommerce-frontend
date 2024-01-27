import { useLoginMutation } from "@redux/api/userApi";
import { useFormik } from "formik";
import { loginSchema } from "../validation";
import { useMessage } from "@hooks/hook";
import { useCallback, useEffect, useMemo } from "react";
import { setCredentials } from "@redux/reducers/userReducer";
import { useDispatch } from "react-redux";

const useLogin = () => {
  //Initial Values
  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );
  console.log("useLogin");
  const [login, { isError, isLoading, isSuccess, error, data }] =
    useLoginMutation();
  const dispatch = useDispatch();
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

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await handleLogin(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials(data));
      console.log(data);
    }
  console.log("useLogin useEffect");

  }, [isSuccess, data, dispatch]);

  useMessage(isSuccess && "User login successfully", error, "/");

  return {
    formik,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};

export default useLogin;
