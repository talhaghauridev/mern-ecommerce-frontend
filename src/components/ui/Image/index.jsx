import React, { useState,memo } from "react";
import { useInView } from "@hooks/hook";

const Image = ({
  src,
  alt,
  style,
  placeholder = "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=1024x1024&w=is&k=20&c=K8yBJVB-TtpPF1O2zOhVlzXECDxJsadlRrLf4gXXNkk=",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isVisible, ref } = useInView();

  return (
    <>
      {isLoading && (
        <img src={placeholder} style={style} alt="Loading.." ref={ref} />
      )}
      <img
        src={isVisible ? src : ""}
        alt={alt}
        onLoad={() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 100);
        }}
        style={{ display: isLoading ? "none" : "flex", ...style }}
        {...props}
      />
    </>
  );
};

export default memo(Image);
