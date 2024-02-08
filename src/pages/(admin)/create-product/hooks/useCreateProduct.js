import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useMessage, useUpload } from "@hooks/hook";
import { toast } from "react-toastify";
import { createProductSchema } from "@pages/(admin)/validation";
import { useCreateProductMutation } from "@redux/api/productApi";

const useCreateProduct = () => {
  const { handleFileChange, images } = useUpload(true);
  const initialValues = {
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 1,
  };
  const [createProduct, { isError, isLoading, isSuccess, data, error }] =
    useCreateProductMutation();

  // Handle Create Product
  const handleCreateProduct = useCallback(
    async (values) => {
      try {
        await createProduct(values);
      } catch (err) {
        console.log(err);
      }
    },
    [createProduct]
  );

  console.log(images==false,images);
  //Handle onSubmit
  const onSubmit = useCallback(
    async (values) => {
      console.log(values);
      if (!images) return;
      await handleCreateProduct({ images, ...values });
    },
    [handleCreateProduct]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: createProductSchema,
    onSubmit: onSubmit,
  });
console.log(formik);
  useMessage(data?.message, error, "/admin/dashboard");
  return {
    formik,
    images,
    handleFileChange,
    isLoading,
    isSuccess,
    isError,
    data,
  };
};

export default useCreateProduct;
