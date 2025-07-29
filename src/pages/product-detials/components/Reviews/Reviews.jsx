import React, { Suspense, lazy, memo, useMemo, useState } from "react";
import ReviewCard from "./ReviewCard";
import { BackDrop, Button } from "@/components/ui";
import { FaRegCommentDots } from "react-icons/fa6";
import { useMediaQuery } from "@/hooks/hook";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
const ReviewModal = lazy(() => import("./ReviewModal"));

const Reviews = ({ reviews }) => {
   const [openModal, setOpenModal] = useState(false);
   const isMobile = useMediaQuery("(max-width:640px)");
   const { userInfo } = useSelector((state) => state.user);
   const responsiveButtonText = useMemo(() => (isMobile ? <FaRegCommentDots className="text-[20px]" /> : "Write a review "), [isMobile]);
   return (
      <section id="reviews">
         <div className="container max-w-[1000px] pb-[80px]">
            <div className="flex items-center justify-between w-full border-b-[#eddeded] border-b-[1px]">
               <h1 className="form_heading text-[25px] md:text-[34px] py-[20px]">Customer Reviews</h1>
               {userInfo && (
                  <Tooltip title={"Comment"}>
                     <Button
                        variants={"outline"}
                        className={" max-w-[70px] sm:max-w-[150px]"}
                        onClick={() => setOpenModal(true)}>
                        {responsiveButtonText}
                     </Button>
                  </Tooltip>
               )}
            </div>
            <div className="flex flex-col gap-[10px] w-full">
               {reviews?.length > 0 ? (
                  reviews?.map((review, index) => (
                     <ReviewCard
                        {...review}
                        key={index}
                     />
                  ))
               ) : (
                  <div className="text-center py-8 w-full">
                     <p className="text-gray-500 text-lg font-Sans">No reviews yet. Be the first to review!</p>
                  </div>
               )}
            </div>
         </div>

         {userInfo && openModal && (
            <Suspense fallback={<BackDrop isOpen />}>
               <ReviewModal
                  openModal={openModal}
                  setOpenModal={setOpenModal}
               />
            </Suspense>
         )}
      </section>
   );
};

export default memo(Reviews);
