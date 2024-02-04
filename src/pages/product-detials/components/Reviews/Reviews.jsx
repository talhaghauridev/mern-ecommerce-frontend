import React, { lazy, memo, useMemo, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Button } from "@components/ui";
import ReviewModal from "./ReviewModal";
import { FaRegCommentDots } from "react-icons/fa6";
import { useMediaQuery } from "@hooks/hook";
import { Tooltip } from "@mui/material";
import LocalStorage from "@utils/LocalStorage";
import { USER_INFO_KEY } from "@constants/index";
const Reviews = ({ reviews }) => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery("(max-width:640px)");
  const user = LocalStorage.get(USER_INFO_KEY);
  const responsiveButtonText = useMemo(
    () =>
      isMobile ? (
        <FaRegCommentDots className="text-[20px]" />
      ) : (
        "Write a review "
      ),
    [isMobile]
  );
  return (
    <section id="reviews">
      <div className="container max-w-[1000px] pb-[80px]">
        <div className="flex items-center justify-between w-full">
          <h1 className="form_heading text-[20px] md:text-[34px] py-[20px]">
            Customer Reviews
          </h1>
          {user && (
            <Tooltip title={"Comment"}>
              <Button
                variants={"outline"}
                className={" max-w-[70px] sm:max-w-[150px]"}
                onClick={() => setOpenModal(true)}
              >
                {responsiveButtonText}
              </Button>
            </Tooltip>
          )}
        </div>
        <div className="flex flex-col gap-[10px] w-full">
          {reviews &&
            reviews?.map((review, index) => (
              <ReviewCard {...review} key={index} />
            ))}
        </div>
      </div>

      {user && openModal && (
        <ReviewModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </section>
  );
};

export default memo(Reviews);
