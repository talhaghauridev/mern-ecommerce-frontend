import React, { memo } from "react";
import cn from "@utils/cn";

const InputUpload = React.forwardRef(({ name, onChange, className="", label,...props },ref) => {
    return (
      <div
        className={cn(
          `flex flex-col gap-[5px] w-[100%] relative overflow-hidden`
        )}
      >
     <button className="flex items-center justify-center">
     {label}
     </button>
        <input
          type="file"
          onChange={onChange}
          id={name}
          name={name}
          ref={ref}
          {...props}
          className={cn(
            `${className} absolute top-0 opacity-0 flex w-full items-center justify-center`
          )}
        />
      </div>
    );
  })

export default memo(InputUpload);
