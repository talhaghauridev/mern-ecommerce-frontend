import { useCallback, useEffect, useMemo } from "react";
import { useFormik } from "formik";
import { useMessage, useUpload } from "@hooks/hook";
import { updateProductSchema } from "@pages/(admin)/validation";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
} from "@redux/api/productApi";
import { useParams } from "react-router-dom";
import { capitalize } from "@mui/material";

const getDetails = (data) => {
  const product = data?.product;
  return {
    name: product?.name,
    price: product?.price,
    stock: product?.stock,
    category: capitalize(String(product?.category)),
    description: product?.descripton,
    images: product?.images ? product?.images : [],
  };
};

const useUpdateProduct = () => {
  const { handleFileChange, images } = useUpload(true);
  const { id } = useParams();
  const { data: productDetail, isLoading: detialLoading } =
    useGetProductDetailsQuery(id);

  const [updateProduct, { isLoading:updateLoading, isSuccess, data, error }] =
    useUpdateProductMutation();

  const initialValues = useMemo(() => {
    const { images, ...rest } = getDetails(productDetail);
    return rest;
  }, [id, productDetail]);

  //Handle Update Product
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

  //Handle Images
  const displayImages = useMemo(() => {
    return images == false ? getDetails(productDetail)?.images : images;
  }, [images, productDetail]);


  //Handle Submit
  const onSubmit = useCallback(
    async ({ images, ...rest }) => {
      if (!displayImages) return;
      await handleUpdateProduct({
        id,
        updatedProduct: { images: displayImages, ...rest },
      });
    },
    [displayImages, handleUpdateProduct, id]
  );


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: updateProductSchema,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });

  useMessage(data?.message, error, "/admin/products");
  return {
    formik,
    images: displayImages,
    handleFileChange,
    detialLoading,
    updateLoading,
    isSuccess,
    data,
  };
};

export default useUpdateProduct;
