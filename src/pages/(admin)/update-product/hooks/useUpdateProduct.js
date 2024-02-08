import { useCallback, useMemo } from "react";
import { useFormik } from "formik";
import { useMessage, useUpload } from "@hooks/hook";
import { createProductSchema } from "@pages/(admin)/validation";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
} from "@redux/api/productApi";
import { useParams } from "react-router-dom";

const getDetials = () => {
  const { id } = useParams();
  const { isError, data } = useGetProductDetailsQuery(id);

  const { product } = data;
  return {
    name: product?.name,
    price: product?.price,
    stock: product?.stock,
    category: product?.category,
    description: product?.description,
    images: product?.images ? product?.images : [],
  };
};

const useUpdateProduct = () => {
  const { handleFileChange, images } = useUpload(true);
  const initialValues = {
    name: "",
    description: "", // Fixed typo in 'description'
    price: 0,
    category: "",
    stock: 1,
  };

  const [updateProduct, { isError, isLoading, isSuccess, data, error }] =
    useUpdateProductMutation();

  const handleUpdateProduct = useCallback(
    async (values) => {
      try {
        await updateProduct(values);
      } catch (err) {
        console.log(err);
      }
    },
    [updateProduct]
  );

  const displayImages = useMemo(() => {
    return images && images.length > 0 ? images : getDetials()?.images ?? [];
  }, [images, getDetials()?.images]); // Include all dependencies here

  const onSubmit = useCallback(
    async (values) => {
      console.log(values);
      if (!displayImages) return;
      await handleUpdateProduct({ images: displayImages, ...values });
    },
    [displayImages, handleUpdateProduct]
  );

  console.log(getDetials());

  const formik = useFormik({
    initialValues: getDetials() ? getDetials() : initialValues,
    validationSchema: createProductSchema,
    onSubmit: onSubmit,
  });

  useMessage(data?.message, error, "/admin/dashboard");

  return {
    formik,
    images: displayImages,
    handleFileChange,
    isLoading,
    isSuccess,
    data,
  };
};

export default useUpdateProduct;
