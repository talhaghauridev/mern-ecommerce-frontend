import { cva } from "class-variance-authority";
import React from "react";
import { memo } from "react";
import cn from "@utils/cn";

export const buttonVariants = cva(
  "w-[100%] max-w-[100px] flex item-center justify-center relative  ",
  {
    variants: {
      variants: {
        primary: "bg-primary-blue text-white rounded-full mt-10",
        outline:
          "text-primary-blue rounded-full bg-white min-w-[130px] border-solid border-[#c7c6c6ed] border-[1px]",
      },
      size: {
        lg: "text-[22px] py-[10px] px-[8px] max-w-[200px]",
        md: "text-[18px] py-[8px] px-[6px] max-w-[150px]",
        sm: "text-[16px] py-[6px] px-[4px] max-w-[90px]",
      },
    },
    defaultVariants: {
      variants: "primary",
      size: "md",
    },
  }
);

const Button = React.forwardRef(
  ({ size, variants, className, ...props },ref) => {
    console.log("Button");
    return (
      <button
        {...props}
        className={cn(buttonVariants({ className, size, variants }))}
        ref={ref}
      />
    );
  }
);

export default memo(Button);
