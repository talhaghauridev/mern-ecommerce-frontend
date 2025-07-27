import { useMessage } from "@/hooks/hook";
import { useDeleteProductMutation } from "@/redux/api/productApi";

const useDeleteProduct = () => {
   const [deleteProduct, { isLoading, isError, error, data }] = useDeleteProductMutation();

   useMessage(data?.message, error);

   return {
      isLoading,
      deleteProduct
   };
};

export default useDeleteProduct;
