import React, { memo, useMemo } from "react";
import cn from "@/utils/cn";

const BackDrop = ({ className = "", children, isOpen = false, ...props }) => {
   const backdropClasses = useMemo(() => {
      return cn(`h-full w-full bg-[#0000005e] fixed top-0 left-0 z-[2]`, isOpen ? "flex " : "hidden", className);
   }, [className, isOpen]);

   return (
      <section
         id="backdrop"
         className={backdropClasses}
         style={{ backdropFilter: "blur(1px)" }}
         {...props}>
         {children}
      </section>
   );
};

export default memo(BackDrop);
