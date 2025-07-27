import { useMessage } from "@/hooks/hook";
import { useDeleteReviewMutation } from "@/redux/api/reviewApi";

const useDeleteReview = () => {
  const [deleteReview, { isLoading, error, data }] = useDeleteReviewMutation();
  useMessage(data?.message, error?.data?.message);
  return {
    isLoading,
    deleteReview,
  };
};

export default useDeleteReview;
