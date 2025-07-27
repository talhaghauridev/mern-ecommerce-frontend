import React, { useState, memo, useCallback, useMemo } from "react";
import { useInView } from "@/hooks/hook";
import { DefaultSkeleton } from "@/assets/images";
import cn from "@/utils/cn";

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

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const shouldShowActualImage = useMemo(() => {
    return isVisible && src && src.trim() !== "";
  }, [isVisible, src]);

  const placeholderStyle = useMemo(() => style, [style]);
  const placeholderClassName = useMemo(
    () => cn(`rounded-[3px] ${className}`),
    [className]
  );
  const actualImageStyle = useMemo(
    () => ({
      display: isLoading ? "none" : "flex",
      ...style,
    }),
    [isLoading, style]
  );

  return (
    <>
      {isLoading && (
        <img
          src={placeholder}
          style={placeholderStyle}
          alt="Loading.."
          className={placeholderClassName}
          ref={ref}
          {...props}
        />
      )}
      {shouldShowActualImage && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={className}
          style={actualImageStyle}
          {...props}
        />
      )}
    </>
  );
};

export default memo(Image);
