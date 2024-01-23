import React, { useState, memo } from "react";
import { useInView } from "@hooks/hook";
import { DefaultSkeleton } from "@assets/images";

const Image = ({
  src,
  alt,
  style,
  placeholder = DefaultSkeleton,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isVisible, ref } = useInView();

  return (
    <>
      {isLoading && (
        <img
          src={placeholder}
          style={style}
          alt="Loading.."
          ref={ref}
          {...props}
        />
      )}
      <img
        src={isVisible ? src : ""}
        alt={alt}
        onLoad={() => {
          setIsLoading(false);
        }}
        style={{ display: isLoading ? "none" : "flex", ...style }}
        {...props}
      />
    </>
  );
};

export default memo(Image);
