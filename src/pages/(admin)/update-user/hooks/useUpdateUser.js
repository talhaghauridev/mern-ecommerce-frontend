import { useCallback, useId, useMemo } from "react";
import { useFormik } from "formik";
import { useMessage } from "@/hooks/hook";
import { updateUserSchema } from "@/pages/(admin)/validation";
import { useParams } from "react-router-dom";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";

const getDetails = (data) => {
  const user = data?.user;
  return {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  };
};

const useUpdateUser = () => {
  const { userId } = useParams();
  const { isLoading: detialLoading, data: detialData } =
    useGetSingleUserQuery(userId);

  const [updateUser, { isLoading: updateLoading, isSuccess, data, error }] =
    useUpdateUserMutation();

  const initialValues = useMemo(
    () => getDetails(detialData),
    [useId, detialData]
  );

  //Handle Update User
  const handleUpdateUser = useCallback(
    async (values) => {
      try {
        await updateUser(values);
      } catch (err) {
        console.log(err);
      }
    },
    [updateUser]
  );

  //Handle Submit
  const onSubmit = useCallback(
    async (values) => {
      await handleUpdateUser({ id: userId, userData: values });
    },
    [handleUpdateUser, userId]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: updateUserSchema,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });

  useMessage(data?.message, error, "/admin/users");
  return {
    formik,
    updateLoading,
    detialLoading,
    isSuccess,
    data,
  };
};

export default useUpdateUser;
