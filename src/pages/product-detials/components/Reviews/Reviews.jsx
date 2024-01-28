import React, { memo } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviews }) => {
  return (
    <section id="reviews">
      <div className="container">
        <h1 className="form_heading">Reviews</h1>
        <div className="grid grid-cols-2">
          {reviews &&
            reviews?.map((review, index) => (
              <ReviewCard {...review} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Reviews);
