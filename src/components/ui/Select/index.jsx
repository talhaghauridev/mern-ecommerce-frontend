import React, { createContext, memo } from "react";
import cn from "@utils/cn";

const SelectContext = createContext();
const Select = memo(({ children, className = "", ...props }) => {
  return (
    <select name="" id="" className={cn(className)} {...props}>
      <SelectContext.Provider value={{}}>{children}</SelectContext.Provider>
    </select>
  );
});

const Option = memo(({ children, className = "", ...props }) => {
  return (
    <option value={children} {...props} className={cn(className)}>
      {children}
    </option>
  );
});

const Button = memo(({ children, className = "", ...props }) => {
  return (
    <option value={""} className={cn(className)} {...props}>
      {children}
    </option>
  );
});

Select.Option = Option;
Select.Button = Button;
export default Select;
