import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "../../../hooks/hook";
import { useState } from "react";
import img1 from "../../../assets/images/img1.jpg";
import { memo } from "react";
const Image = ({ src, alt, style, placeholder = img1, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isVisible, ref } = useInView();
  return (
    <>
      {isLoading && <img src={placeholder} alt="Loading" ref={ref} />}
      <img
        src={isVisible && src}
        alt={alt}
        onLoad={() =>
          setTimeout(() => {
            setIsLoading(false);
          }, 10000)
        }
        style={{ display: isLoading ? "none" : "flex", ...style }}
        {...props}
      />
    </>
  );
};
export default memo(Image);
