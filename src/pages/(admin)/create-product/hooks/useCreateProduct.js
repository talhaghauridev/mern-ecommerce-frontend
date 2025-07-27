import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useMessage, useUpload } from "@/hooks/hook";
import { toast } from "react-toastify";
import { createProductSchema } from "@/pages/(admin)/validation";
import { useCreateProductMutation } from "@/redux/api/productApi";

const useCreateProduct = () => {
  const { handleFileChange, images, setImages } = useUpload(true);
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

  //Handle onSubmit
  const onSubmit = useCallback(
    async (values) => {
      if (!images) return;
      await handleCreateProduct({ images, ...values });
    },
    [handleCreateProduct, images]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: createProductSchema,
    onSubmit: onSubmit,
  });

  useMessage(data?.message, error, "/admin/products");
  return {
    formik,
    images,
    handleFileChange,
    isLoading,
    isSuccess,
    isError,
    setImages,
    data,
  };
};

export default useCreateProduct;
