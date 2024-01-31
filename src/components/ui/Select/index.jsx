import React, { createContext, memo } from "react";
import { FaChevronUp } from "react-icons/fa6";
import cn from "@utils/cn";
const SelectContext = createContext();
const Select = memo(
  ({
    children,
    className = "",
    leftIcon: LIcon,
    rightIcon: RIcon = FaChevronUp,
    error,
    ...props
  }) => {
    console.log(error);
    return (
      <div className="flex flex-col w-full h-full gap-[5px]">
        <div
          className={cn(
            "select_main relative overflow-hidden flex items-center h-[45px] justify-start w-full rounded-[4px] border border-solid border-gray-300",
            error ? "border-[red!important]" : "border-[#c5c5c5ed!important]"
          )}
        >
          {LIcon && (
            <span className="absolute left-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] text-[#2b3445]">
              <LIcon className={"text-[20px]"} />
            </span>
          )}

          <select
            className={cn(
              "py-0  border-0 outline-none h-full w-full text-[15px] font-roboto text-black appearance-none ",
              LIcon ? "pl-[35px]" : "pl-[20px]",
              RIcon ? "pr-[35px]" : "pr-[20px]"
            )}
            {...props}
          >
            <SelectContext.Provider value={{}}>
              {children}
            </SelectContext.Provider>
          </select>

          {RIcon && (
            <div className="select_arrow_icon absolute right-[10px] md:right-[12px] h-full flex items-center justify-center py-[8px]">
              <RIcon className="text-gray-700" />
            </div>
          )}
        </div>
        {error && (
          <span className="error text-[red] font-Sans text-[14px] md:text-[15px]">
            {error}
          </span>
        )}
      </div>
    );
  }
);

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
