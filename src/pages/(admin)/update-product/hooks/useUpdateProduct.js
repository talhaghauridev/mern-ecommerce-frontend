import { useCallback, useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import { useMessage, useUpload } from "@/hooks/hook";
import { updateProductSchema } from "@/pages/(admin)/validation";
import { useGetProductDetailsQuery, useUpdateProductMutation } from "@/redux/api/productApi";
import { useParams } from "react-router-dom";
import { capitalize } from "@mui/material";

const getDetails = (data) => {
   const product = data?.product;
   return {
      name: product?.name,
      price: product?.price,
      stock: product?.stock,
      category: capitalize(String(product?.category)),
      description: product?.description,
      images: product?.images ? product?.images?.map((image) => image.url).filter((url) => url) : []
   };
};

const useUpdateProduct = () => {
   const { handleFileChange, images: uploadedImages, setImages: setUploadedImages } = useUpload(true);
   const { id } = useParams();
   const { data: productDetail, isLoading: detialLoading } = useGetProductDetailsQuery(id);
   
   // Combined images state - holds both existing and newly uploaded images
   const [allImages, setAllImages] = useState([]);

   const [updateProduct, { isLoading: updateLoading, isSuccess, data, error }] = useUpdateProductMutation();

   const initialValues = useMemo(() => {
      const { images, ...rest } = getDetails(productDetail);
      return rest;
   }, [id, productDetail]);

   // Initialize allImages with existing product images when productDetail loads
   useEffect(() => {
      if (productDetail && !allImages.length) {
         const existingImages = getDetails(productDetail)?.images || [];
         setAllImages(existingImages);
      }
   }, [productDetail, allImages.length]);

   // Add newly uploaded images to the beginning of allImages
   useEffect(() => {
      if (uploadedImages && uploadedImages !== false && uploadedImages.length > 0) {
         setAllImages(prev => {
            // Only add images that aren't already in the array
            const newImages = uploadedImages.filter(img => !prev.includes(img));
            // Put new images first, then existing images
            return [...newImages, ...prev];
         });
         // Reset uploaded images after adding them
         setUploadedImages([]);
      }
   }, [uploadedImages, setUploadedImages]);

   //Handle Update Product
   const handleUpdateProduct = useCallback(
      async (values) => {
         try {
            console.log(values);
            await updateProduct(values);
         } catch (err) {
            console.log(err);
         }
      },
      [updateProduct]
   );

   // Custom setImages function for removing images
   const setImages = useCallback((updaterOrValue) => {
      if (typeof updaterOrValue === 'function') {
         setAllImages(updaterOrValue);
      } else {
         setAllImages(updaterOrValue);
      }
   }, []);

   console.log(allImages);

   //Handle Submit
   const onSubmit = useCallback(
      async ({ images, ...rest }) => {
         if (!allImages || allImages.length === 0) return;
         await handleUpdateProduct({
            id,
            updatedProduct: { images: allImages, ...rest }
         });
      },
      [allImages, handleUpdateProduct, id]
   );

   const formik = useFormik({
      initialValues: initialValues,
      validationSchema: updateProductSchema,
      onSubmit: onSubmit,
      enableReinitialize: true
   });

   useMessage(data?.message, error, "/admin/products");

   return {
      formik,
      images: allImages,
      handleFileChange,
      detialLoading,
      updateLoading,
      isSuccess,
      data,
      setImages
   };
};

export default useUpdateProduct;