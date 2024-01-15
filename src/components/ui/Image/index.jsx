import React, { memo, useEffect, useRef, useState } from "react";
import img1 from "../../../assets/images/img1.jpg";

const Image = ({ src, alt, style, placeholder = img1, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      {isLoading && <img src={placeholder} alt="Loading" ref={ref} />}
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
