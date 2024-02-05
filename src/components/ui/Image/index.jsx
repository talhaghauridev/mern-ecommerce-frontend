import React, { useState, memo } from "react";
import { useInView } from "@hooks/hook";
import { DefaultSkeleton } from "@assets/images";
import cn from "@utils/cn";

const Image = ({
  src,
  alt,
  style,
  placeholder = DefaultSkeleton,
  className,
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
          className={cn(`rounded-[3px] ${className}`)}
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
        className={className}
        style={{ display: isLoading ? "none" : "flex", ...style }}
        {...props}
      />
    </>
  );
};

export default memo(Image);
