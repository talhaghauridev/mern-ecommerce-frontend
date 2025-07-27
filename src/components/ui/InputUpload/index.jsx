import React, { memo } from "react";
import cn from "@/utils/cn";
import { Button } from "..";

const InputUpload = React.forwardRef(({ name, onChange, className = "", label, ...props }, ref) => {
   return (
      <div className={cn(`flex flex-col gap-[5px] w-[100%] relative overflow-hidden`)}>
         <Button
            className="max-w-full"
            variants="danger">
            {label}
            <input
               type="file"
               onChange={onChange}
               id={name}
               name={name}
               ref={ref}
               {...props}
               className={cn(`${className} absolute top-0 opacity-0 flex w-full items-center justify-center h-full cursor-pointer`)}
            />
         </Button>
      </div>
   );
});

export default memo(InputUpload);
