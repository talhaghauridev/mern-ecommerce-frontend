import React,{memo} from "react";
import cn from "@utils/cn";

const BackDrop = ({ className = "", isOpen = false, ...props }) => {
  const backdropClasses = cn(
    `h-full w-full bg-[#0000005e] fixed top-0 left-0 z-[2]`,
    isOpen ? "flex " : "hidden",
    className
  );

  return (
    <section
      id="backdrop"
      className={backdropClasses}
      style={{ backdropFilter: "blur(1px)" }}
      {...props}
    />
  );
};

export default memo(BackDrop);
