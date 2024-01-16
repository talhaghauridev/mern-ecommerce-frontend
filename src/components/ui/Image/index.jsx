import React, { memo, useEffect, useRef, useState } from "react";
import img1 from "../../../assets/images/img1.jpg";
import { useInView } from "../../../hooks/hook";
import AnimationWarpper from "../AnimationWarpper";
import { motion } from "framer-motion";

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

export default Image;
