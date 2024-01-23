import cn from "@utils/cn";
import React, { memo } from "react";

const InputRadio = ({ id, name, title, className = "" }) => {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        name={name}
        id={id}
        className={cn("flex items-center justify-center ", className)}
      />
      {title && title}
    </label>
  );
};

export default memo(InputRadio);
